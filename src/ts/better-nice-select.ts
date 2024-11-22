import '../scss/better-nice-select.scss';
import Constants from "./constants/index";
import Data from './utils/data';
import Utils from "./utils/index";
import { IDefault, IIcon, Localisation, ISearchItem } from "./constants/index";

/**
 * Needed to set globally options for multiple creation of BetterNiceSelect
 */
export const DEFAULTS: IDefault = Object.create(Constants.DEFAULT);

export const LOCALISATION: Localisation = Object.create(Constants.LOCALISATION);

/**
 * Creates, initialize and injects a BetterNiceSelect component into the HTML DOM and makes a given <select> element hidden
 */
export class BetterNiceSelect implements IDefault {
    animation: boolean;
    multiple: boolean;
    disabled: boolean;
    customSearch: string | ((filter: string, optgroup: string) => ISearchItem[]);
    customOptiongroupLabels: string | (() => string[]);
    tags: boolean;
    customTagCheck: string | ((input: string) => boolean);
    tokenSeparators: string[];
    locale: string;
    scrollable: { on: boolean; height: string; };
    icons: IIcon;
    inputDelay: number;
    #currentLi = 0;
    #currentOptGroup = 0;
    #searchData = {
        items: [] as ISearchItem[],
        possibleOptGroupLabels: [] as string[]
    };

    async #triggerRemoteOptiongroupLabels() {
        const remoteData = this['customOptiongroupLabels'] instanceof Function || typeof this['customOptiongroupLabels'] === 'function' ? this['customOptiongroupLabels']() : Utils.executeFunctionByName(this['customOptiongroupLabels'], window);
        await Promise.resolve(remoteData).then(data => {
            this.#searchData.possibleOptGroupLabels = data;
        })
    }

    async #filterRemoteSearchData(filter: string, optgroup: string) {
        const remoteData = this['customSearch'] instanceof Function || typeof this['customSearch'] === 'function' ? this['customSearch'](filter, optgroup) : Utils.executeFunctionByName(this['customSearch'], window, filter, optgroup);
        await Promise.resolve(remoteData).then(data => {
            this.#searchData.items = data;
        });
    }

    #refreshSearchListItems(selectField: HTMLSelectElement) {
        const searchList = document.querySelector(".better-nice-select-overlay .search-container ul");
        if (searchList) {
            searchList.innerHTML = "";
        }
        for (const searchOption of this.#searchData.items) {
            const afterAdd = new CustomEvent("inserted.better-nice-select", {
                detail: {
                    key: searchOption.id,
                    value: searchOption.text
                }
            });

            const li = document.createElement("li");
            li.classList.add(...Constants.CLASSES.searchListItem);
            const text = document.createElement("span");
            text.classList.add(...Constants.CLASSES.searchListItemText);
            text.innerHTML = searchOption.text;
            li.appendChild(text);
            li.tabIndex = -1;
            li.setAttribute("data-id", searchOption.id);
            if (searchOption.label) {
                const badge = document.createElement("span");
                badge.classList.add(...Constants.CLASSES.searchListItemBadge);
                badge.appendChild(Utils.htmlToElement(`<span class="badge">${searchOption.label}</span>`));
                li.appendChild(badge);
            }
            const self = this;
            li.addEventListener('click', function () {
                if (!self.multiple) {
                    const deleteLiElements = selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').getElementsByTagName("li");
                    for (let i = 0; i < deleteLiElements.length; i++) {
                        deleteLiElements[i].remove();
                    }
                    const oldSelectedOption = selectField.querySelector('option[selected]');
                    if (oldSelectedOption) {
                        oldSelectedOption.removeAttribute("selected");
                    }
                }
                let option = selectField.querySelector(`option[value='${this.getAttribute("data-id")}']`) as HTMLOptionElement;
                if (!option) {
                    option = document.createElement("option");
                    option.value = searchOption.id;
                    option.innerText = searchOption.text;
                    if (searchOption.label && selectField.querySelector(`optgroup[label="${searchOption.label}"]`)) {
                        selectField.querySelector(`optgroup[label="${searchOption.label}"]`).appendChild(option);
                    } else {
                        selectField.appendChild(option);
                    }
                }
                option.setAttribute("selected", 'selected');
                self.#closeOverlay();
                if (selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list button[data-id='${searchOption.id}']`)) {
                    // already selected. nothing to do...
                    return;
                }
                const deleteButton = self.#createDeleteButton(searchOption.id, searchOption.text, searchOption.label ? searchOption.label : undefined, searchOption.disabled ? searchOption.disabled : false, selectField);
                if (searchOption.label) {
                    let selectedHeader = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list h5[data-optgroup=${searchOption.label}]`);
                    if (!selectedHeader) {
                        selectedHeader = document.createElement("h5");
                        selectedHeader.innerHTML = searchOption.label;
                        selectedHeader.setAttribute("data-optgroup", searchOption.label);
                        selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(selectedHeader);
                    }
                    selectedHeader.insertAdjacentElement('afterend', deleteButton);
                } else {
                    selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(deleteButton);
                }
                selectField.dispatchEvent(afterAdd);
            });
            li.addEventListener('keydown', function (event) {
                event.preventDefault();
                const liElements = document.querySelectorAll(".better-nice-select-overlay .search-container ul li:not(.hidden)") as NodeListOf<HTMLLIElement>;
                if (event.key === "ArrowDown") {
                    if (self.#currentLi + 1 >= liElements.length) {
                        self.#currentLi = 0;
                    } else {
                        self.#currentLi++;
                    }
                    liElements[self.#currentLi].tabIndex = 0;
                    liElements[self.#currentLi].focus();
                    this.tabIndex = -1;
                }
                if (event.key === "ArrowUp") {
                    if (self.#currentLi - 1 < 0) {
                        self.#currentLi = liElements.length - 1;
                    } else {
                        self.#currentLi--;
                    }
                    liElements[self.#currentLi].tabIndex = 0;
                    liElements[self.#currentLi].focus();
                    this.tabIndex = -1;
                }
                if (event.key === "Tab") {
                    (document.querySelector(".better-nice-select-overlay .search-container input") as HTMLInputElement).focus();
                }
                if (event.key === "Enter") {
                    this.click();
                }
                if (event.key === "Escape") {
                    self.#closeOverlay();
                }
            });
            li.addEventListener("focusin", function () {
                const input = document.querySelector(".better-nice-select-overlay .search-container input") as HTMLInputElement;
                const inputHint = document.querySelector(".better-nice-select-overlay .search-container input.hint") as HTMLInputElement;
                input.value = searchOption.text;
                inputHint.value = searchOption.text;
            });
            searchList.appendChild(li);
        }
    }


    #createDeleteButton(optKey: string, optValue: string, label: string, disabled: boolean, selectField: HTMLSelectElement): HTMLLIElement {

        const afterDelete = new CustomEvent("removed.better-nice-select", {
            detail: {
                key: optKey,
                value: optValue
            }
        });
        const liElement = document.createElement("li");
        liElement.classList.add(...Constants.CLASSES.deleteItem);

        const optValueElement = document.createElement("div");
        optValueElement.classList.add(...Constants.CLASSES.deleteButtonOptionText);
        optValueElement.innerText = optValue;
        liElement.appendChild(optValueElement);

        const button = document.createElement("button");
        button.classList.add(...Constants.CLASSES.deleteButton);
        button.setAttribute("type", "button");
        button.setAttribute("data-id", optKey);
        if (disabled || this.disabled) {
            button.setAttribute("disabled", 'disabled');
        }
        const icon = document.createElement("span");
        if (typeof this.icons.delete === 'string') {
            icon.insertAdjacentHTML("beforeend", this.icons.delete);
        } else {
            icon.insertAdjacentElement("beforeend", this.icons.delete);
        }
        button.appendChild(icon);
        liElement.appendChild(button);

        const self = this;
        button.addEventListener("click", function () {
            selectField.querySelector(`option[value='${this.getAttribute("data-id")}']`).removeAttribute("selected");
            if (this.parentElement.previousElementSibling && this.parentElement.previousElementSibling.tagName.toUpperCase() === "H5" && (this.parentElement.nextElementSibling && this.parentElement.nextElementSibling.tagName.toUpperCase() === "H5" || !this.parentElement.nextElementSibling)) {
                this.parentElement.previousElementSibling.remove();
            }
            this.parentElement.remove();
            if (!self.multiple && selectField.nextElementSibling.querySelectorAll(".better-nice-select .delete-list li").length === 0) {
                selectField.selectedIndex = -1;
            }
            if (self.customSearch === undefined && !self.#searchData.items.map(x => x.id.toLowerCase()).includes(optKey.toLowerCase())) {
                self.#searchData.items.push(label ?
                    {
                        id: optKey,
                        text: optValue,
                        label: label,
                        disabled: disabled
                    } : {
                        id: optKey,
                        text: optValue,
                        disabled: disabled
                    });
            }
            selectField.dispatchEvent(afterDelete);
        });
        return liElement;
    }

    #openOverlay() {
        if (this.animation) {
            document.querySelector(".better-nice-select-overlay").classList.add("animate-in");
        }
        else {
            document.querySelector(".better-nice-select-overlay").classList.add("active");
        }
    }

    #closeOverlay() {
        if (!document.querySelector(".better-nice-select-overlay")) {
            return;
        }
        document.querySelector(".better-nice-select-overlay .search-container ul").classList.remove("active");
        document.querySelector(".better-nice-select-overlay .search-container").classList.remove("optgroup-selected", "to-many-options");
        if (this.animation) {
            document.querySelector(".better-nice-select-overlay").classList.add("animate-out");
            setTimeout(function () {
                document.querySelector("body").removeChild(document.querySelector(".better-nice-select-overlay"));
            }, 500);
        } else {
            document.querySelector(".better-nice-select-overlay").classList.remove("active");
            document.querySelector("body").removeChild(document.querySelector(".better-nice-select-overlay"));
        }
    }

    #createSearchOptGroupHint(): HTMLDivElement {
        const optgroupHint = document.createElement("div");
        optgroupHint.classList.add(...Constants.CLASSES.searchOptGroupHint);
        const shiftIcon = document.createElement("div");
        shiftIcon.classList.add("icon");
        shiftIcon.innerHTML = "&#8679;";
        const tabIcon = document.createElement("div");
        tabIcon.classList.add("icon");
        tabIcon.innerText = "Tab";
        optgroupHint.appendChild(shiftIcon);
        optgroupHint.appendChild(tabIcon);
        return optgroupHint;
    }

    #triggerSearchContainerAnimationForOptgroupSelected() {
        const searchContainer = document.querySelector(".better-nice-select-overlay .search-container") as HTMLElement;
        if (!searchContainer) {
            return;
        }
        searchContainer.classList.remove("to-many-options");
        if (searchContainer.classList.contains("optgroup-selected")) {
            searchContainer.classList.remove("optgroup-selected");
        }
        // needed so animation is getting retriggered
        // see here: https://stackoverflow.com/questions/50612096/removing-class-from-element-isnt-triggering-css-animation
        searchContainer.offsetHeight;
        searchContainer.classList.add("optgroup-selected");
    }

    #triggerSearchContainerAnimationForWrongInput() {
        const searchContainer = document.querySelector(".better-nice-select-overlay .search-container") as HTMLElement;
        if (!searchContainer) {
            return;
        }
        searchContainer.classList.remove("optgroup-selected");
        if (searchContainer.classList.contains("to-many-options")) {
            searchContainer.classList.remove("to-many-options");
        }
        // needed so animation is getting retriggered
        // see here: https://stackoverflow.com/questions/50612096/removing-class-from-element-isnt-triggering-css-animation
        searchContainer.offsetHeight;
        searchContainer.classList.add("to-many-options");
    }

    #createOverlay(selectField: HTMLSelectElement) {
        const hideOverlayOnClick = function (event: MouseEvent) {
            const target = (event && event.target);
            if (target == this) {
                self.#closeOverlay();
            }
        }

        const filterOnSearchInput = async function (filter: string, searchInput: HTMLInputElement, searchHint: HTMLInputElement, animationWrapper: HTMLDivElement) {
            document.querySelector(".better-nice-select-overlay .search-container ul").classList.remove("active");
            animationWrapper.classList.add("active");
            searchHint.value = "";
            if (filter.length === 0) {
                animationWrapper.classList.remove("active");
                document.querySelector(".better-nice-select-overlay .search-container ul").innerHTML = "";
                return;
            }
            const selectedOptgroupElement = document.querySelector(".better-nice-select-overlay .search-container .search-optgroup-selected");
            let founded: ISearchItem;
            if (self.customSearch !== undefined) {
                await self.#filterRemoteSearchData(filter, selectedOptgroupElement ? selectedOptgroupElement.getAttribute("data-optgroup") : null);
                // it could be that search was already emptied again because getting data takes to long so we can early return
                if (searchInput.value.length === 0) {
                    return;
                }
                self.#refreshSearchListItems(selectField);
                founded = self.#searchData.items.find(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
            } else {
                self.#refreshSearchListItems(selectField);
                const liNodes = document.querySelector(".better-nice-select-overlay .search-container ul").getElementsByTagName("li");
                for (let i = 0; i < liNodes.length; i++) {
                    if (selectedOptgroupElement && liNodes[i].querySelector(".badge").textContent !== selectedOptgroupElement.getAttribute("data-optgroup")) {
                        liNodes[i].classList.add("hidden");
                        continue;
                    }
                    if (liNodes[i].firstChild.textContent.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                        if (!founded && liNodes[i].firstChild.textContent.toLowerCase().startsWith(filter.toLowerCase())) {
                            founded = self.#searchData.items.find(item => item.id === liNodes[i].getAttribute("data-id"));
                        }
                        liNodes[i].classList.remove("hidden");
                    } else {
                        liNodes[i].classList.add("hidden");
                    }
                }
            }
            if (founded) {
                searchHint.value = `${searchInput.value}${founded.text.substring(searchInput.value.length)}`;
            }
            animationWrapper.classList.remove("active");
            document.querySelector(".better-nice-select-overlay .search-container ul").classList.add("active");
        }

        const keyboardInteraction = async function (event: KeyboardEvent) {

            const allowTagsInputInteraction = async function (keyValue: string) {

                const afterAdd = new CustomEvent("inserted.better-nice-select", {
                    detail: {
                        key: keyValue,
                        value: keyValue
                    }
                });

                const checkTagBeforeCreation = function () {
                    if (self['customTagCheck'] instanceof Function || typeof self['customTagCheck'] === 'function') {
                        return self['customTagCheck'](keyValue);
                    }
                    if (typeof self['customTagCheck'] === 'string') {
                        return Utils.executeFunctionByName(self['customTagCheck'], window, keyValue);
                    }
                    return true;
                }
                if (self.tokenSeparators.includes(event.key)) {
                    enterAlreadyPressed = true;
                    document.querySelector(".better-nice-select-overlay .search-container ul").classList.remove("active");
                    const animationWrapper = document.querySelector(".better-nice-select-overlay .search-container .loading-wrapper");
                    animationWrapper.firstChild.textContent = LOCALISATION[self.locale].formatCheckingMessage();
                    animationWrapper.classList.add("active");
                    await Promise.resolve(checkTagBeforeCreation()).then(value => {
                        if (!value) {
                            console.error(`Can not create option with value '${keyValue}' because of given check function...`);
                            self.#closeOverlay();
                            return;
                        }
                        let optgroup;
                        if (self.#searchData.possibleOptGroupLabels.length !== 0) {
                            const optgroupSelectedElement = document.querySelector(".better-nice-select-overlay .search-container .search-optgroup-selected");
                            if (!optgroupSelectedElement) {
                                self.#triggerSearchContainerAnimationForWrongInput();
                                console.error(`Can not create option with value '${keyValue}' because you need to select an optiongroup first...`);
                                animationWrapper.classList.remove("active");
                                animationWrapper.firstChild.textContent = LOCALISATION[self.locale].formatLoadingMessage();
                                document.querySelector(".better-nice-select-overlay .search-container ul").classList.add("active");
                                return;
                            }
                            optgroup = optgroupSelectedElement.getAttribute("data-optgroup");
                        }
                        let option = selectField.querySelector(`option[value='${keyValue}']`) as HTMLOptionElement;
                        if (!option) {
                            option = document.createElement("option");
                            option.value = keyValue;
                            option.innerText = keyValue;
                            if (optgroup && selectField.querySelector(`optgroup[label="${optgroup}"]`)) {
                                selectField.querySelector(`optgroup[label="${optgroup}"]`).appendChild(option);
                            } else {
                                selectField.appendChild(option);
                            }
                        }
                        option.setAttribute("selected", "selected");
                        if (!selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list button[data-id='${keyValue}']`)) {
                            const newDeleteButton = self.#createDeleteButton(keyValue, keyValue, optgroup ? optgroup : undefined, false, selectField);
                            if (optgroup) {
                                let selectedHeader = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list h5[data-optgroup=${optgroup}]`);
                                if (!selectedHeader) {
                                    selectedHeader = document.createElement("h5");
                                    selectedHeader.innerHTML = optgroup;
                                    selectedHeader.setAttribute("data-optgroup", optgroup);
                                    selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(selectedHeader);
                                }
                                selectedHeader.insertAdjacentElement('afterend', newDeleteButton);
                            } else {
                                selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(newDeleteButton);
                            }
                        }
                        animationWrapper.classList.remove("active");
                        self.#closeOverlay();
                        selectField.dispatchEvent(afterAdd);
                    })
                }
            }

            // multi purpose button 'Enter' should only react to one event
            let enterAlreadyPressed = false;
            if (self.tags) {
                await allowTagsInputInteraction(this.value.trim());
            }
            if ((event.key === "Tab" && !event.shiftKey) || event.key === "ArrowDown") {
                event.preventDefault();
                const liElements = document.querySelectorAll(".better-nice-select-overlay .search-container ul li:not(.hidden)") as NodeListOf<HTMLLIElement>;
                if (liElements.length > 0) {
                    liElements.forEach(element => element.tabIndex = -1);
                    liElements[0].tabIndex = 0;
                    self.#currentLi = 0;
                    liElements[0].focus();
                }
            }
            if (event.key === "ArrowRight" && (event.target as HTMLInputElement).selectionStart === this.value.length) {
                const inputHint = document.querySelector(".better-nice-select-overlay .search-container input.hint") as HTMLInputElement;
                if (inputHint.value && inputHint.value !== "") {
                    event.preventDefault();
                    this.value = inputHint.value;
                    const liNodes = document.querySelector(".better-nice-select-overlay .search-container ul").getElementsByTagName("li");
                    for (let i = 0; i < liNodes.length; i++) {
                        const txtValue = liNodes[i].firstChild.textContent;
                        if (txtValue.toLowerCase().indexOf(inputHint.value.toLowerCase()) > -1) {
                            liNodes[i].classList.remove("hidden");
                        } else {
                            liNodes[i].classList.add("hidden");
                        }
                    }
                }
            }
            if (event.shiftKey && event.key === 'Tab' && self.#searchData.possibleOptGroupLabels.length !== 0) {
                event.preventDefault();
                this.value = "";
                this.dispatchEvent(new Event('input', { bubbles: true }));
                let optGroupSearchSelected = document.querySelector(".better-nice-select-overlay .search-container .search-optgroup-selected") as HTMLDivElement;
                if (!optGroupSearchSelected) {
                    optGroupSearchSelected = document.createElement("div");
                    optGroupSearchSelected.classList.add(...Constants.CLASSES.searchOptGroupSelected);
                    document.querySelector(".better-nice-select-overlay .search-container .search-optgroup-hint").remove();
                    this.insertAdjacentElement("afterend", optGroupSearchSelected);
                }
                if (self.#currentOptGroup < self.#searchData.possibleOptGroupLabels.length) {
                    optGroupSearchSelected.innerText = self.#searchData.possibleOptGroupLabels[self.#currentOptGroup];
                    optGroupSearchSelected.setAttribute("data-optgroup", self.#searchData.possibleOptGroupLabels[self.#currentOptGroup]);
                    self.#currentOptGroup++;
                } else {
                    self.#currentOptGroup = 0;
                    optGroupSearchSelected.remove();
                    this.parentNode.appendChild(self.#createSearchOptGroupHint());
                }
                if (self.animation) {
                    self.#triggerSearchContainerAnimationForOptgroupSelected();
                }
            }
            if (event.key === 'Enter' && !enterAlreadyPressed && this.value && this.value !== "") {
                const liElements = document.querySelectorAll(".better-nice-select-overlay .search-container ul li:not(.hidden)") as NodeListOf<HTMLLIElement>;
                if (liElements && liElements.length !== 1 && self.animation) {
                    self.#triggerSearchContainerAnimationForWrongInput();
                    console.error("To many possible <option> groups.... Please restrict further by tipping more in search input...");
                }
                if (liElements && liElements.length === 1) {
                    liElements[0].click();
                }
            }
            if (event.key === "Escape") {
                self.#closeOverlay();
            }
        }

        const self = this;
        const overlayElement = document.createElement("div");
        overlayElement.classList.add(...Constants.CLASSES.overlayContainer);

        const divWrapper = document.createElement("div");
        divWrapper.classList.add(...Constants.CLASSES.overlayContainerWrapper);
        divWrapper.addEventListener("click", hideOverlayOnClick);

        const search = document.createElement("div");
        search.classList.add(...Constants.CLASSES.searchContainer);
        const searchInputWrapper = document.createElement("div");
        searchInputWrapper.classList.add(...Constants.CLASSES.searchInputWrapper);
        const searchIcon = document.createElement("span");
        searchIcon.classList.add(...Constants.CLASSES.searchIcon);
        if (typeof self.icons.search === 'string') {
            searchIcon.insertAdjacentHTML("beforeend", self.icons.search);
        } else {
            searchIcon.insertAdjacentElement("beforeend", self.icons.search);
        }
        const searchInput = document.createElement("input");
        searchInput.setAttribute("placeholder", LOCALISATION[self.locale].formatSearch());
        searchInputWrapper.appendChild(searchIcon);
        searchInputWrapper.appendChild(searchInput);
        const searchHintInput = document.createElement("input");
        searchHintInput.classList.add(...Constants.CLASSES.searchHintInput);
        searchInputWrapper.appendChild(searchHintInput);
        if (self.tags) {
            const tagIcon = document.createElement("span");
            tagIcon.classList.add(...Constants.CLASSES.tagIcon);
            if (typeof self.icons.tag === 'string') {
                tagIcon.insertAdjacentHTML("beforeend", self.icons.tag);
            } else {
                tagIcon.insertAdjacentElement("beforeend", self.icons.tag);
            }
            const tooltip = document.createElement("span");
            tooltip.classList.add("tooltip-own");
            tagIcon.appendChild(tooltip);
            const index = self.tokenSeparators.indexOf(" ");
            const copySeparators = self.tokenSeparators.slice();
            if (index > -1) {
                copySeparators.splice(index, 1);
                copySeparators.push("Spacebar");
            }
            tooltip.append(...Utils.htmlToElements(`${LOCALISATION[self.locale].formatHelpForTagging()}<br/>${copySeparators.join("<br/>")}`));
            searchInputWrapper.appendChild(tagIcon);
        }
        if (self.#searchData.possibleOptGroupLabels.length !== 0) {
            searchInputWrapper.appendChild(self.#createSearchOptGroupHint());
        }
        search.appendChild(searchInputWrapper);
        const focusHr = document.createElement("span");
        focusHr.classList.add(...Constants.CLASSES.searchHrFocus);
        search.appendChild(focusHr);
        const hr = document.createElement("span");
        hr.classList.add(...Constants.CLASSES.searchHr);
        search.appendChild(hr);
        const searchList = document.createElement("ul");
        searchList.classList.add(...Constants.CLASSES.searchList);
        search.appendChild(searchList);
        const loadingAnimationWrapper = document.createElement("div");
        loadingAnimationWrapper.classList.add("loading-wrapper");
        const loadingAnimation = document.createElement("div");
        loadingAnimation.classList.add("loading");
        const loadingText = document.createElement("span");
        loadingText.innerText = LOCALISATION[self.locale].formatLoadingMessage();
        loadingAnimationWrapper.appendChild(loadingText);
        loadingAnimationWrapper.appendChild(loadingAnimation);
        search.appendChild(loadingAnimationWrapper);
        divWrapper.appendChild(search);
        overlayElement.appendChild(divWrapper);
        document.querySelector("body").appendChild(overlayElement);
        searchInput.addEventListener("input", Utils.debounce(function () {
            filterOnSearchInput(searchInput.value.trim(), searchInput, searchHintInput, loadingAnimationWrapper);
        }, self.inputDelay));
        searchInput.addEventListener('keydown', keyboardInteraction);
        searchInput.addEventListener("focusin", function () {
            document.querySelector('.better-nice-select-overlay .search-container .focus-border').classList.add("active");
        });
        searchInput.addEventListener("focusout", function () {
            document.querySelector('.better-nice-select-overlay .search-container .focus-border').classList.remove("active");
        });
    }

    /**
     * Initialize a BetterNiceSelect object
     * @param selector select element to be styled and initialized as BetterNiceSelect component
     * @param options optional attributes how to style and initialize the BetterNiceSelect component
     */
    constructor(selector: string | HTMLSelectElement, options: IDefault) {

        function initDeleteField(instance: BetterNiceSelect, selectField: HTMLSelectElement): HTMLUListElement {
            const optGroupsAvailable = function () {
                for (const optGroup of optGroups) {
                    const headerElement = document.createElement("h5");
                    headerElement.innerHTML = optGroup.label;
                    headerElement.setAttribute("data-optgroup", optGroup.label);
                    ulElement.appendChild(headerElement);
                    if (instance.customOptiongroupLabels === undefined) {
                        instance.#searchData.possibleOptGroupLabels.push(optGroup.label);
                    }
                    for (const optionElement of Array.from(optGroup.children) as HTMLOptionElement[]) {
                        if (optionElement.selected) {
                            ulElement.appendChild(instance.#createDeleteButton(optionElement.value, optionElement.innerText, optGroup.label, optionElement.disabled, selectField));
                        }
                        if (instance.customSearch === undefined) {
                            instance.#searchData.items.push({
                                id: optionElement.value,
                                text: optionElement.innerText,
                                label: optGroup.label,
                                disabled: optionElement.disabled
                            });
                        }
                    }
                }
            }

            const optGroupsNotAvailable = function () {
                for (const optionElement of Array.from(selectField.children) as HTMLOptionElement[]) {
                    if (optionElement.selected) {
                        ulElement.appendChild(instance.#createDeleteButton(optionElement.value, optionElement.innerText, undefined, optionElement.disabled, selectField));
                    }
                    if (instance.customSearch === undefined) {
                        instance.#searchData.items.push({
                            id: optionElement.value,
                            text: optionElement.innerText,
                            disabled: optionElement.disabled
                        });
                    }
                }
            }

            const ulElement = document.createElement("ul");
            ulElement.classList.add(...Constants.CLASSES.deleteContainerList);
            if (instance.scrollable.on) {
                ulElement.classList.add("scrollable");
                ulElement.style.height = instance.scrollable.height;
            }
            const optGroups = selectField.getElementsByTagName("optgroup");
            if (optGroups.length !== 0) {
                optGroupsAvailable();
            } else {
                optGroupsNotAvailable();
            }
            if (instance.customOptiongroupLabels !== undefined) {
                instance.#triggerRemoteOptiongroupLabels();
            }
            return ulElement;
        }

        function initAddField(instance: BetterNiceSelect, selectField: HTMLSelectElement): HTMLDivElement {
            const divElement = document.createElement("div");
            divElement.classList.add(...Constants.CLASSES.addContainer);
            const button = document.createElement("button");
            button.classList.add(...Constants.CLASSES.addButton);
            button.setAttribute("type", "button");
            if (instance.disabled) {
                button.setAttribute("disabled", 'disabled');
            }
            button.addEventListener("click", function () {
                //need to wait if customRemoteOptionsLabels is set but array is still empty
                if (instance.customOptiongroupLabels !== undefined && instance.#searchData.possibleOptGroupLabels.length === 0) {
                    alert(LOCALISATION[instance.locale].formatAlertOptiongroups());
                    return;
                }
                instance.#createOverlay(selectField);
                instance.#openOverlay();

                const input = document.querySelector(".better-nice-select-overlay .search-container input") as HTMLInputElement;
                input.value = '';
                input.focus();
            });
            const icon = document.createElement("span");
            if (typeof instance.icons.add === 'string') {
                icon.insertAdjacentHTML("beforeend", instance.icons.add);
            } else {
                icon.insertAdjacentElement("beforeend", instance.icons.add);
            }
            button.appendChild(icon);
            divElement.appendChild(button);
            return divElement;
        }

        function syncParams(selectField: HTMLSelectElement): IDefault {
            // sync default
            const _defaultNiceSelect = Object.create(DEFAULTS);
            // sync via Javascript
            if (options) {
                for (const [key, value] of Object.entries(options)) {
                    _defaultNiceSelect[key] = value;
                }
            }
            // sync via HTML
            if (selectField.hasAttribute("disabled")) {
                _defaultNiceSelect.disabled = true;
            }
            if (selectField.hasAttribute('multiple')) {
                _defaultNiceSelect.multiple = true;
            } else {
                _defaultNiceSelect.multiple = false;
                if (!selectField.querySelector('option[selected]')) {
                    selectField.selectedIndex = -1;
                    for (const option of selectField.options) {
                        option.selected = false;
                    }
                }
            }
            if (selectField.hasAttribute('data-input-delay')) {
                _defaultNiceSelect.inputDelay = Number(selectField.getAttribute('data-input-delay'));
            }
            if (selectField.hasAttribute('data-tags')) {
                if (selectField.getAttribute('data-tags') === '') {
                    _defaultNiceSelect.tags = true;
                } else {
                    _defaultNiceSelect.tags = (selectField.getAttribute('data-tags') === 'true');
                }
            }
            if (selectField.getAttribute("data-locale")) {
                _defaultNiceSelect.locale = selectField.getAttribute("data-locale");
            }
            if (selectField.getAttribute("data-custom-search")) {
                _defaultNiceSelect.customSearch = selectField.getAttribute("data-custom-search");
            }
            if (selectField.getAttribute("data-custom-optiongroup-labels")) {
                _defaultNiceSelect.customOptiongroupLabels = selectField.getAttribute("data-custom-optiongroup-labels");
            }
            if (selectField.getAttribute("data-custom-tag-check")) {
                _defaultNiceSelect.customTagCheck = selectField.getAttribute("data-custom-tag-check");
            }
            if (selectField.hasAttribute("data-scrollable-on")) {
                if (selectField.getAttribute('data-scrollable-on') === '') {
                    _defaultNiceSelect.scrollable.on = true;
                } else {
                    _defaultNiceSelect.scrollable.on = (selectField.getAttribute("data-scrollable-on") === 'true');
                }
                _defaultNiceSelect.scrollable.height = selectField.getAttribute("data-scrollable-height");
            }
            if (selectField.hasAttribute("data-animation")) {
                if (selectField.getAttribute('data-animation') === '') {
                    _defaultNiceSelect.animation = true;
                } else {
                    _defaultNiceSelect.animation = (selectField.getAttribute("data-animation") === 'true');
                }
            }
            if (selectField.getAttribute("data-token-separators")) {
                _defaultNiceSelect.tokenSeparators = JSON.parse(selectField.getAttribute("data-token-separators"));
            }
            if (selectField.getAttribute("data-icons")) {
                _defaultNiceSelect.tokenSeparators = JSON.parse(selectField.getAttribute("data-icons"));
            }
            return _defaultNiceSelect;
        }

        let selectField: HTMLSelectElement;
        if (typeof selector === 'string') {
            selectField = document.querySelector(selector);
        } else {
            selectField = selector;
        }
        selectField.setAttribute("hidden", 'hidden');

        const params = syncParams(selectField);
        this.animation = params.animation;
        this.multiple = params.multiple;
        this.disabled = params.disabled;
        this.customSearch = params.customSearch;
        this.customOptiongroupLabels = params.customOptiongroupLabels;
        this.tags = params.tags;
        this.customTagCheck = params.customTagCheck;
        this.tokenSeparators = params.tokenSeparators;
        this.locale = params.locale;
        this.scrollable = params.scrollable;
        this.icons = params.icons;
        this.inputDelay = params.inputDelay;


        const main = document.createElement("div");
        main.classList.add(...Constants.CLASSES.mainContainer);

        const deleteList = initDeleteField(this, selectField);
        const addContainer = initAddField(this, selectField);
        const deleteContainer = document.createElement("div");
        deleteContainer.classList.add(...Constants.CLASSES.deleteContainer);
        deleteContainer.appendChild(deleteList);

        main.appendChild(addContainer);
        main.appendChild(deleteContainer);

        selectField.parentNode.insertBefore(main, selectField.nextSibling);

        Data.set(selectField, 'better-nice-select', this);
    }

    /**
     * Static method which allows you to get the BetterNiceSelect instance associated to a DOM element
     * @param selector select element which was already initialized as BetterNiceSelect component
     * @returns BetterNiceSelect instance if found. Otherwise NULL
     */
    static getInstance(selector: string | HTMLSelectElement): BetterNiceSelect {
        const element = typeof selector === 'string' ? document.querySelector(selector) as HTMLSelectElement : selector;
        return Data.get(element, 'better-nice-select') as BetterNiceSelect;
    }

    /**
     * 
     * @param selector Static method which returns an BetterNiceSelect instance associated to a DOM element or create a new one in case it wasn’t initialized
     * @param config optional attributes how to style and initialize the BetterNiceSelect component, in case it wasn’t initialized
     * @returns BetterNiceSelect instance if found. Otherwise new created instance
     */
    static getOrCreateInstance(selector: string | HTMLSelectElement, config: IDefault): BetterNiceSelect {
        return this.getInstance(selector) || new this(selector, config);
    }

    /**
     * Select already predefined <option> elements or create dynamically new ones and select them directly
     * @param items one or more items to select
     */
    select(...items: ISearchItem[]) {
        if (items.length === 0) {
            console.error("No given option to select something for method 'select'. Please read the manual how to use the function...");
            return;
        }
        const selectField = Data.findElement('better-nice-select', this) as HTMLSelectElement;
        if (!selectField) {
            console.error("Could not find <select> object during 'select'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        for (const item of items) {
            const afterAdd = new CustomEvent("inserted.better-nice-select", {
                detail: {
                    key: item.id,
                    value: item.text
                }
            });
            if (!this.multiple) {
                const deleteLiElements = selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').getElementsByTagName("li");
                for (let i = 0; i < deleteLiElements.length; i++) {
                    deleteLiElements[i].remove();
                }
                const oldSelectedOption = selectField.querySelector('option[selected]');
                if (oldSelectedOption) {
                    oldSelectedOption.removeAttribute("selected");
                }
            }
            let option = selectField.querySelector(`option[value='${item.id}']`) as HTMLOptionElement;
            if (!option) {
                option = document.createElement("option");
                option.value = item.id;
                option.innerText = item.text;
                if (item.label && selectField.querySelector(`optgroup[label='${item.label}']`)) {
                    selectField.querySelector(`optgroup[label='${item.label}']`).appendChild(option);
                } else {
                    selectField.appendChild(option);
                }
            }
            option.setAttribute("selected", 'selected');
            if (selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list button[data-id='${item.id}']`)) {
                continue;
            }
            const deleteButton = this.#createDeleteButton(item.id, item.text, item.label ? item.label : undefined, item.disabled ? item.disabled : false, selectField);
            if (item.label) {
                let selectedHeader = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list h5[data-optgroup=${item.label}]`);
                if (!selectedHeader) {
                    selectedHeader = document.createElement("h5");
                    selectedHeader.innerHTML = item.label;
                    selectedHeader.setAttribute("data-optgroup", item.label);
                    selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(selectedHeader);
                }
                selectedHeader.insertAdjacentElement('afterend', deleteButton);
            } else {
                selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(deleteButton);
            }
            selectField.dispatchEvent(afterAdd);
        }
    }

    /**
     * Selects all possible elements for a optional given search with or without a given option group
     * @param args args[0] = searchInput | args[1] = selectedOptionGroup
     */
    async selectAll(...args: string[]) {
        if (!this.multiple) {
            console.error("Method 'selectAll' should not be used for a <select> field without 'multiple' property because it does not make sense if you can only select one. Please use method 'select' instead...");
            return;
        }
        if (args.length > 2) {
            console.error("Method 'selectAll' used wrong. Please read user manual...");
            return;
        }
        const selectField = Data.findElement('better-nice-select', this) as HTMLSelectElement;
        if (!selectField) {
            console.error("Could not find <select> object during 'selectAll'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        if (this.customSearch) {
            args.length > 0 ? await this.#filterRemoteSearchData(args[0], args[1] ? args[1] : "") : await this.#filterRemoteSearchData("", "");
        }
        for (const searchoption of this.#searchData.items) {
            const afterAdd = new CustomEvent("inserted.better-nice-select", {
                detail: {
                    key: searchoption.id,
                    value: searchoption.text
                }
            });
            let option = selectField.querySelector(`option[value='${searchoption.id}']`) as HTMLOptionElement;
            if (!option) {
                option = document.createElement("option");
                option.value = searchoption.id;
                option.innerText = searchoption.text;
                if (searchoption.label && selectField.querySelector(`optgroup[label="${searchoption.label}"]`)) {
                    selectField.querySelector(`optgroup[label="${searchoption.label}"]`).appendChild(option);
                } else {
                    selectField.appendChild(option);
                }
            }
            option.setAttribute("selected", 'selected');
            if (selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list button[data-id='${searchoption.id}']`)) {
                continue;
            }
            const deleteButton = this.#createDeleteButton(searchoption.id, searchoption.text, searchoption.label ? searchoption.label : undefined, searchoption.disabled ? searchoption.disabled : false, selectField);
            if (searchoption.label) {
                let selectedHeader = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list h5[data-optgroup=${searchoption.label}]`);
                if (!selectedHeader) {
                    selectedHeader = document.createElement("h5");
                    selectedHeader.innerHTML = searchoption.label;
                    selectedHeader.setAttribute("data-optgroup", searchoption.label);
                    selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(selectedHeader);
                }
                selectedHeader.insertAdjacentElement('afterend', deleteButton);
            } else {
                selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(deleteButton);
            }
            selectField.dispatchEvent(afterAdd);
        }
    }

    /**
     * Deselect already added <option> elements by given ids
     * @param ids string array with ids to deselect
     */
    deselect(...ids: string[]) {
        if (ids.length === 0) {
            console.error("No given option to deselect something for method 'deselect'. Please read the manual how to use the function...");
            return;
        }
        const selectField = Data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'deselect'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        for (const id of ids) {
            const foundedButton = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list li button[data-id='${id}']`) as HTMLButtonElement;
            if (!foundedButton) {
                console.error(`Could not deselect given option "${id}", because could not trigger click event for respective delete button...`);
                continue;
            }
            foundedButton.click();
        }
    }

    /**
     * Deselects all already added <option> elements
     */
    deselectAll() {
        const selectField = Data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'deselectAll'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        const foundedButtons = selectField.nextElementSibling.querySelectorAll(".better-nice-select .delete-list li button") as NodeListOf<HTMLButtonElement>;
        for (const foundedButton of foundedButtons) {
            foundedButton.click();
        }
    }

    /**
     * Destroys the initialized BetterNiceSelect instance and make the <select> element visible again
     */
    destroy() {
        const selectField = Data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'destroy'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        selectField.nextElementSibling.remove();
        selectField.removeAttribute("hidden");
        Data.remove(selectField, 'better-nice-select');
    }

    /**
     * Shows a already initialized BetterNiceSelect instance after it got already called with hide() method
     */
    show() {
        const selectField = Data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'show'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        if (this.animation) {
            selectField.nextElementSibling.classList.remove("fade-out-down");
            selectField.nextElementSibling.classList.add("fade-in-down");
        } else {
            (selectField.nextElementSibling as HTMLElement).style.opacity = "1";
        }
    }

    /**
     * Hides a already initialized BetterNiceSelect instance, if not already hidden
     */
    hide() {
        const selectField = Data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'hide'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        if (this.animation) {
            selectField.nextElementSibling.classList.remove("fade-in-down");
            selectField.nextElementSibling.classList.add("fade-out-down");
        } else {
            (selectField.nextElementSibling as HTMLElement).style.opacity = "0";
        }
    }

    /**
     * Opens programmaticaly the search overlay with an optional given input
     * @param args args[0] = searchInput
     */
    open(...args: string[]) {
        const selectField = Data.findElement('better-nice-select', this) as HTMLSelectElement;
        if (!selectField) {
            console.error("Could not find <select> object during 'open'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        this.#createOverlay(selectField);
        this.#openOverlay();
        const input = document.querySelector(".better-nice-select-overlay .search-container input") as HTMLInputElement;
        if (args.length > 0) {
            input.value = args[0];
            input.dispatchEvent(new Event('input'));
        } else {
            input.value = '';
        }
        input.focus();
    }
}