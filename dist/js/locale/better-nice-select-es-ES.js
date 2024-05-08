/*!
 * 
 * Better-Nice-Select v1.0.0 (https://github.com/kevingostomski/better-nice-select)
 * Copyright 2024 Kevin Gostomski <kevingostomski2001@gmail.com>
 * Licensed under MIT (https://github.com/kevingostomski/better-nice-select/blob/main/LICENSE)
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("betterNiceSelect", [], factory);
	else if(typeof exports === 'object')
		exports["betterNiceSelect"] = factory();
	else
		root["betterNiceSelect"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BetterNiceSelect: () => (/* reexport */ better_nice_select),
  DEFAULTS: () => (/* reexport */ DEFAULTS),
  LOCALISATION: () => (/* reexport */ LOCALISATION)
});

;// CONCATENATED MODULE: ./src/ts/constants/index.ts
/**
 * Object with helper texts to render the HTML elements
 */
const EN = {
    /**
     * Helper text for Search placeholder
     * @returns english string for search placeholder
     */
    formatSearch() {
        return "Search...";
    },
    /**
     * Helper text for information text on creating own tags
     * @returns english string for information for tagging process
     */
    formatHelpForTagging() {
        return "To create your own tags, focus on the input field and click one of the following buttons to create the object:";
    },
    /**
     * Helper text for alert when options groups are still getting loaded from remote action
     * @returns english string for alert option groups
     */
    formatAlertOptiongroups() {
        return "Please wait...\nThe option groups are still getting loaded...";
    },
    formatLoadingMessage() {
        return "Loading";
    },
    formatCheckingMessage() {
        return "Checking";
    }
};
const CLASSES = {
    mainContainer: ['better-nice-select'],
    deleteContainer: ['delete-container'],
    deleteContainerList: ["delete-list"],
    deleteItem: ["delete-item"],
    deleteButton: ['delete'],
    deleteButtonOptionText: ["opt-text"],
    addContainer: ["add-container"],
    addButton: ['add'],
    overlayContainer: ['better-nice-select-overlay'],
    overlayContainerWrapper: ["better-nice-select-closer"],
    searchContainer: ["search-container"],
    searchGlowEffect: ["search-container-glow"],
    searchInputWrapper: ["search-input-container"],
    searchHintInput: ["hint"],
    searchOptGroupHint: ["search-optgroup-hint"],
    searchOptGroupSelected: ["search-optgroup-selected"],
    searchIcon: ["search-icon"],
    tagIcon: ["tag-icon"],
    searchHr: ['hr'],
    searchHrFocus: ['focus-border'],
    searchList: ['search-list'],
    searchListItem: ['search-list-item'],
    searchListItemText: ["search-list-item-text"],
    searchListItemBadge: ["search-list-item-badge"]
};
const DEFAULT = {
    animation: true,
    multiple: false,
    disabled: false,
    customSearch: undefined,
    customOptiongroupLabels: undefined,
    tags: false,
    customTagCheck: undefined,
    tokenSeparators: ['Enter'],
    locale: "en-US",
    scrollable: {
        on: false,
        height: undefined
    },
    icons: {
        search: '<svg class="better-nice-select-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>',
        delete: '<svg class="better-nice-select-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>',
        add: '<svg class="better-nice-select-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>',
        tag: '<svg class="better-nice-select-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>'
    },
    inputDelay: 400
};
const exportedObject = {
    CLASSES: CLASSES,
    LOCALISATION: {
        'en': EN,
        'en-US': EN
    },
    DEFAULT: DEFAULT
};
/* harmony default export */ const constants = (exportedObject);

;// CONCATENATED MODULE: ./src/ts/utils/data.ts
/**
 * Used to only have one BetterNiceSelect-instance per select trigger available during DOM render process
 */
const elementMap = new Map();
/* harmony default export */ const data = ({
    set(element, key, instance) {
        if (!elementMap.has(element)) {
            elementMap.set(element, new Map());
        }
        const instanceMap = elementMap.get(element);
        // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            console.error(`Better-Nice-Select doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    findElement(key, instance) {
        for (let instanceMap of elementMap) {
            if (instanceMap[1].has(key) && instanceMap[1].get(key) === instance) {
                return instanceMap[0];
            }
        }
        return undefined;
    },
    get(element, key) {
        if (elementMap.has(element)) {
            return elementMap.get(element).get(key) || null;
        }
        return null;
    },
    remove(element, key) {
        if (!elementMap.has(element)) {
            return;
        }
        const instanceMap = elementMap.get(element);
        instanceMap.delete(key);
        // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) {
            elementMap.delete(element);
        }
    }
});

;// CONCATENATED MODULE: ./src/ts/utils/index.ts
/* harmony default export */ const utils = ({
    /**
     * Create HTML single Element from string input
     * @param {String} html representing a single element
     * @return {Element}
     */
    htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    },
    /**
     * Create HTML nested Element from string input
     * @param {String} html representing any number of sibling elements
     * @return {NodeList}
     */
    htmlToElements(html) {
        var template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.childNodes;
    },
    /**
     * Executes a given function by name with params
     * @param {string} functionName
     * @param {any} context
     * @returns Return value of the called function
     */
    executeFunctionByName(functionName, context, ...args) {
        let namespaces = functionName.split(".");
        let funcName = namespaces.pop();
        for (let i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[funcName].apply(context, args);
    },
    /**
     * fire the callback after the action has finished for the defined amount of time
     * @param {Function} callback function the get called
     * @param {Number} wait definded amount of time to wait in ms
     * @returns result of callback function
     */
    debounce(callback, wait) {
        let timeout;
        ;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(function () { callback(...args); }, wait);
        };
    },
});

;// CONCATENATED MODULE: ./src/ts/better-nice-select.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BetterNiceSelect_instances, _BetterNiceSelect_currentLi, _BetterNiceSelect_currentOptGroup, _BetterNiceSelect_searchData, _BetterNiceSelect_triggerRemoteOptiongroupLabels, _BetterNiceSelect_filterRemoteSearchData, _BetterNiceSelect_refreshSearchListItems, _BetterNiceSelect_createDeleteButton, _BetterNiceSelect_openOverlay, _BetterNiceSelect_closeOverlay, _BetterNiceSelect_createSearchOptGroupHint, _BetterNiceSelect_triggerSearchContainerAnimationForOptgroupSelected, _BetterNiceSelect_triggerSearchContainerAnimationForWrongInput, _BetterNiceSelect_createOverlay;




/**
 * Needed to set globally options for multiple creation of BetterNiceSelect
 */
const DEFAULTS = Object.create(constants.DEFAULT);
const LOCALISATION = Object.create(constants.LOCALISATION);
/**
 * Creates, initialize and injects a BetterNiceSelect component into the HTML DOM and makes a given <select> element hidden
 */
class BetterNiceSelect {
    /**
     * Initialize a BetterNiceSelect object
     * @param selector select element to be styled and initialized as BetterNiceSelect component
     * @param options optional attributes how to style and initialize the BetterNiceSelect component
     */
    constructor(selector, options) {
        _BetterNiceSelect_instances.add(this);
        _BetterNiceSelect_currentLi.set(this, 0);
        _BetterNiceSelect_currentOptGroup.set(this, 0);
        _BetterNiceSelect_searchData.set(this, {
            items: [],
            possibleOptGroupLabels: []
        });
        function initDeleteField(instance, selectField) {
            let optGroupsAvailable = function () {
                for (let optGroup of optGroups) {
                    let headerElement = document.createElement("h5");
                    headerElement.innerHTML = optGroup.label;
                    headerElement.setAttribute("data-optgroup", optGroup.label);
                    ulElement.appendChild(headerElement);
                    for (let optionElement of Array.from(optGroup.children)) {
                        if (optionElement.selected) {
                            ulElement.appendChild(__classPrivateFieldGet(instance, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createDeleteButton).call(instance, optionElement.value, optionElement.innerText, optGroup.label, optionElement.disabled, selectField));
                        }
                        if (instance.customSearch === undefined) {
                            __classPrivateFieldGet(instance, _BetterNiceSelect_searchData, "f").items.push({
                                id: optionElement.value,
                                text: optionElement.innerText,
                                label: optGroup.label,
                                disabled: optionElement.disabled
                            });
                        }
                        if (instance.customOptiongroupLabels === undefined) {
                            if (!__classPrivateFieldGet(instance, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels.includes(optGroup.label)) {
                                __classPrivateFieldGet(instance, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels.push(optGroup.label);
                            }
                        }
                    }
                }
            };
            let optGroupsNotAvailable = function () {
                for (let optionElement of Array.from(selectField.children)) {
                    if (optionElement.selected) {
                        ulElement.appendChild(__classPrivateFieldGet(instance, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createDeleteButton).call(instance, optionElement.value, optionElement.innerText, undefined, optionElement.disabled, selectField));
                    }
                    if (instance.customSearch === undefined) {
                        __classPrivateFieldGet(instance, _BetterNiceSelect_searchData, "f").items.push({
                            id: optionElement.value,
                            text: optionElement.innerText,
                            disabled: optionElement.disabled
                        });
                    }
                }
            };
            let ulElement = document.createElement("ul");
            ulElement.classList.add(...constants.CLASSES.deleteContainerList);
            if (instance.scrollable.on) {
                ulElement.classList.add("scrollable");
                ulElement.style.height = instance.scrollable.height;
            }
            let optGroups = selectField.getElementsByTagName("optgroup");
            if (optGroups.length !== 0) {
                optGroupsAvailable();
            }
            else {
                optGroupsNotAvailable();
            }
            if (instance.customOptiongroupLabels !== undefined) {
                __classPrivateFieldGet(instance, _BetterNiceSelect_instances, "m", _BetterNiceSelect_triggerRemoteOptiongroupLabels).call(instance);
            }
            return ulElement;
        }
        function initAddField(instance, selectField) {
            let divElement = document.createElement("div");
            divElement.classList.add(...constants.CLASSES.addContainer);
            let button = document.createElement("button");
            button.classList.add(...constants.CLASSES.addButton);
            button.setAttribute("type", "button");
            if (instance.disabled) {
                button.setAttribute("disabled", 'disabled');
            }
            button.addEventListener("click", function () {
                //need to wait if customRemoteOptionsLabels is set but array is still empty
                if (instance.customOptiongroupLabels !== undefined && __classPrivateFieldGet(instance, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels.length === 0) {
                    alert(LOCALISATION[instance.locale].formatAlertOptiongroups());
                    return;
                }
                __classPrivateFieldGet(instance, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createOverlay).call(instance, selectField);
                __classPrivateFieldGet(instance, _BetterNiceSelect_instances, "m", _BetterNiceSelect_openOverlay).call(instance);
                let input = document.querySelector(".better-nice-select-overlay .search-container input");
                input.value = '';
                input.focus();
            });
            let icon = document.createElement("span");
            if (typeof instance.icons.add === 'string') {
                icon.insertAdjacentHTML("beforeend", instance.icons.add);
            }
            else {
                icon.insertAdjacentElement("beforeend", instance.icons.add);
            }
            button.appendChild(icon);
            divElement.appendChild(button);
            return divElement;
        }
        function syncParams(selectField) {
            // sync default
            let _defaultNiceSelect = Object.create(DEFAULTS);
            // sync via Javascript
            if (options) {
                for (let [key, value] of Object.entries(options)) {
                    _defaultNiceSelect[key] = value;
                }
            }
            // sync via HTML
            if (selectField.hasAttribute("disabled")) {
                _defaultNiceSelect.disabled = true;
            }
            if (selectField.hasAttribute('multiple')) {
                _defaultNiceSelect.multiple = true;
            }
            else {
                _defaultNiceSelect.multiple = false;
                if (!selectField.querySelector('option[selected]')) {
                    selectField.selectedIndex = -1;
                    for (let option of selectField.options) {
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
                }
                else {
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
                }
                else {
                    _defaultNiceSelect.scrollable.on = (selectField.getAttribute("data-scrollable-on") === 'true');
                }
                _defaultNiceSelect.scrollable.height = selectField.getAttribute("data-scrollable-height");
            }
            if (selectField.hasAttribute("data-animation")) {
                if (selectField.getAttribute('data-animation') === '') {
                    _defaultNiceSelect.animation = true;
                }
                else {
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
        let selectField;
        if (typeof selector === 'string') {
            selectField = document.querySelector(selector);
        }
        else {
            selectField = selector;
        }
        selectField.setAttribute("hidden", 'hidden');
        let params = syncParams(selectField);
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
        let main = document.createElement("div");
        main.classList.add(...constants.CLASSES.mainContainer);
        let deleteList = initDeleteField(this, selectField);
        let addContainer = initAddField(this, selectField);
        let deleteContainer = document.createElement("div");
        deleteContainer.classList.add(...constants.CLASSES.deleteContainer);
        deleteContainer.appendChild(deleteList);
        main.appendChild(addContainer);
        main.appendChild(deleteContainer);
        selectField.parentNode.insertBefore(main, selectField.nextSibling);
        data.set(selectField, 'better-nice-select', this);
    }
    /**
     * Static method which allows you to get the BetterNiceSelect instance associated to a DOM element
     * @param selector select element which was already initialized as BetterNiceSelect component
     * @returns BetterNiceSelect instance if found. Otherwise NULL
     */
    static getInstance(selector) {
        let element = typeof selector === 'string' ? document.querySelector(selector) : selector;
        return data.get(element, 'better-nice-select');
    }
    /**
     *
     * @param selector Static method which returns an BetterNiceSelect instance associated to a DOM element or create a new one in case it wasn’t initialized
     * @param config optional attributes how to style and initialize the BetterNiceSelect component, in case it wasn’t initialized
     * @returns BetterNiceSelect instance if found. Otherwise new created instance
     */
    static getOrCreateInstance(selector, config) {
        return this.getInstance(selector) || new this(selector, config);
    }
    /**
     * Select already predefined <option> elements or create dynamically new ones and select them directly
     * @param items one or more items to select
     */
    select(...items) {
        if (items.length === 0) {
            console.error("No given option to select something for method 'select'. Please read the manual how to use the function...");
            return;
        }
        let selectField = data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'select'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        for (let item of items) {
            const afterAdd = new CustomEvent("inserted.better-nice-select", {
                detail: {
                    key: item.id,
                    value: item.text
                }
            });
            if (!this.multiple) {
                let deleteLiElements = selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').getElementsByTagName("li");
                for (let i = 0; i < deleteLiElements.length; i++) {
                    deleteLiElements[i].remove();
                }
                let oldSelectedOption = selectField.querySelector('option[selected]');
                if (oldSelectedOption) {
                    oldSelectedOption.removeAttribute("selected");
                }
            }
            let option = selectField.querySelector(`option[value='${item.id}']`);
            if (!option) {
                option = document.createElement("option");
                option.value = item.id;
                option.innerText = item.text;
                if (item.label && selectField.querySelector(`optgroup[label='${item.label}']`)) {
                    selectField.querySelector(`optgroup[label='${item.label}']`).appendChild(option);
                }
                else {
                    selectField.appendChild(option);
                }
            }
            option.setAttribute("selected", 'selected');
            if (selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list button[data-id='${item.id}']`)) {
                continue;
            }
            let deleteButton = __classPrivateFieldGet(this, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createDeleteButton).call(this, item.id, item.text, item.label ? item.label : undefined, item.disabled ? item.disabled : false, selectField);
            if (item.label) {
                let selectedHeader = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list h5[data-optgroup=${item.label}]`);
                if (!selectedHeader) {
                    selectedHeader = document.createElement("h5");
                    selectedHeader.innerHTML = item.label;
                    selectedHeader.setAttribute("data-optgroup", item.label);
                    selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(selectedHeader);
                }
                selectedHeader.insertAdjacentElement('afterend', deleteButton);
            }
            else {
                selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(deleteButton);
            }
            selectField.dispatchEvent(afterAdd);
        }
    }
    /**
     * Selects all possible elements for a optional given search with or without a given option group
     * @param args args[0] = searchInput | args[1] = selectedOptionGroup
     */
    selectAll(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.multiple) {
                console.error("Method 'selectAll' should not be used for a <select> field without 'multiple' property because it does not make sense if you can only select one. Please use method 'select' instead...");
                return;
            }
            if (args.length > 2) {
                console.error("Method 'selectAll' used wrong. Please read user manual...");
                return;
            }
            let selectField = data.findElement('better-nice-select', this);
            if (!selectField) {
                console.error("Could not find <select> object during 'selectAll'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
                return;
            }
            if (this.customSearch) {
                args.length > 0 ? yield __classPrivateFieldGet(this, _BetterNiceSelect_instances, "m", _BetterNiceSelect_filterRemoteSearchData).call(this, args[0], args[1] ? args[1] : "", selectField) : yield __classPrivateFieldGet(this, _BetterNiceSelect_instances, "m", _BetterNiceSelect_filterRemoteSearchData).call(this, "", "", selectField);
            }
            for (let searchoption of __classPrivateFieldGet(this, _BetterNiceSelect_searchData, "f").items) {
                const afterAdd = new CustomEvent("inserted.better-nice-select", {
                    detail: {
                        key: searchoption.id,
                        value: searchoption.text
                    }
                });
                let option = selectField.querySelector(`option[value='${searchoption.id}']`);
                if (!option) {
                    option = document.createElement("option");
                    option.value = searchoption.id;
                    option.innerText = searchoption.text;
                    if (searchoption.label && selectField.querySelector(`optgroup[label="${searchoption.label}"]`)) {
                        selectField.querySelector(`optgroup[label="${searchoption.label}"]`).appendChild(option);
                    }
                    else {
                        selectField.appendChild(option);
                    }
                }
                option.setAttribute("selected", 'selected');
                if (selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list button[data-id='${searchoption.id}']`)) {
                    continue;
                }
                let deleteButton = __classPrivateFieldGet(this, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createDeleteButton).call(this, searchoption.id, searchoption.text, searchoption.label ? searchoption.label : undefined, searchoption.disabled ? searchoption.disabled : false, selectField);
                if (searchoption.label) {
                    let selectedHeader = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list h5[data-optgroup=${searchoption.label}]`);
                    if (!selectedHeader) {
                        selectedHeader = document.createElement("h5");
                        selectedHeader.innerHTML = searchoption.label;
                        selectedHeader.setAttribute("data-optgroup", searchoption.label);
                        selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(selectedHeader);
                    }
                    selectedHeader.insertAdjacentElement('afterend', deleteButton);
                }
                else {
                    selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(deleteButton);
                }
                selectField.dispatchEvent(afterAdd);
            }
        });
    }
    /**
     * Deselect already added <option> elements by given ids
     * @param ids string array with ids to deselect
     */
    deselect(...ids) {
        if (ids.length === 0) {
            console.error("No given option to deselect something for method 'deselect'. Please read the manual how to use the function...");
            return;
        }
        let selectField = data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'deselect'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        for (let id of ids) {
            let foundedButton = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list li button[data-id='${id}']`);
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
        let selectField = data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'deselectAll'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        let foundedButtons = selectField.nextElementSibling.querySelectorAll(".better-nice-select .delete-list li button");
        for (let foundedButton of foundedButtons) {
            foundedButton.click();
        }
    }
    /**
     * Destroys the initialized BetterNiceSelect instance and make the <select> element visible again
     */
    destroy() {
        let selectField = data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'destroy'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        selectField.nextElementSibling.remove();
        selectField.removeAttribute("hidden");
        data.remove(selectField, 'better-nice-select');
    }
    /**
     * Shows a already initialized BetterNiceSelect instance after it got already called with hide() method
     */
    show() {
        let selectField = data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'show'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        if (this.animation) {
            selectField.nextElementSibling.classList.remove("fade-out-down");
            selectField.nextElementSibling.classList.add("fade-in-down");
        }
        else {
            selectField.nextElementSibling.style.opacity = "1";
        }
    }
    /**
     * Hides a already initialized BetterNiceSelect instance, if not already hidden
     */
    hide() {
        let selectField = data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'hide'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        if (this.animation) {
            selectField.nextElementSibling.classList.remove("fade-in-down");
            selectField.nextElementSibling.classList.add("fade-out-down");
        }
        else {
            selectField.nextElementSibling.style.opacity = "0";
        }
    }
    /**
     * Opens programmaticaly the search overlay with an optional given input
     * @param args args[0] = searchInput
     */
    open(...args) {
        let selectField = data.findElement('better-nice-select', this);
        if (!selectField) {
            console.error("Could not find <select> object during 'open'. Something is broken... Please report with a Github issue for seeking help or fix it yourself...");
            return;
        }
        __classPrivateFieldGet(this, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createOverlay).call(this, selectField);
        __classPrivateFieldGet(this, _BetterNiceSelect_instances, "m", _BetterNiceSelect_openOverlay).call(this);
        let input = document.querySelector(".better-nice-select-overlay .search-container input");
        if (args.length > 0) {
            input.value = args[0];
            input.dispatchEvent(new Event('input'));
        }
        else {
            input.value = '';
        }
        input.focus();
    }
}
_BetterNiceSelect_currentLi = new WeakMap(), _BetterNiceSelect_currentOptGroup = new WeakMap(), _BetterNiceSelect_searchData = new WeakMap(), _BetterNiceSelect_instances = new WeakSet(), _BetterNiceSelect_triggerRemoteOptiongroupLabels = function _BetterNiceSelect_triggerRemoteOptiongroupLabels() {
    return __awaiter(this, void 0, void 0, function* () {
        let remoteData = this['customOptiongroupLabels'] instanceof Function || typeof this['customOptiongroupLabels'] === 'function' ? this['customOptiongroupLabels']() : utils.executeFunctionByName(this['customOptiongroupLabels'], window);
        yield Promise.resolve(remoteData).then(data => {
            __classPrivateFieldGet(this, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels = data;
        });
    });
}, _BetterNiceSelect_filterRemoteSearchData = function _BetterNiceSelect_filterRemoteSearchData(filter, optgroup, selectField) {
    return __awaiter(this, void 0, void 0, function* () {
        let remoteData = this['customSearch'] instanceof Function || typeof this['customSearch'] === 'function' ? this['customSearch'](filter, optgroup) : utils.executeFunctionByName(this['customSearch'], window, filter, optgroup);
        yield Promise.resolve(remoteData).then(data => {
            __classPrivateFieldGet(this, _BetterNiceSelect_searchData, "f").items = data;
        });
    });
}, _BetterNiceSelect_refreshSearchListItems = function _BetterNiceSelect_refreshSearchListItems(selectField) {
    let searchList = document.querySelector(".better-nice-select-overlay .search-container ul");
    if (searchList) {
        searchList.innerHTML = "";
    }
    for (let searchOption of __classPrivateFieldGet(this, _BetterNiceSelect_searchData, "f").items) {
        const afterAdd = new CustomEvent("inserted.better-nice-select", {
            detail: {
                key: searchOption.id,
                value: searchOption.text
            }
        });
        let li = document.createElement("li");
        li.classList.add(...constants.CLASSES.searchListItem);
        let text = document.createElement("span");
        text.classList.add(...constants.CLASSES.searchListItemText);
        text.innerHTML = searchOption.text;
        li.appendChild(text);
        li.tabIndex = -1;
        li.setAttribute("data-id", searchOption.id);
        if (searchOption.label) {
            let badge = document.createElement("span");
            badge.classList.add(...constants.CLASSES.searchListItemBadge);
            badge.appendChild(utils.htmlToElement(`<span class="badge">${searchOption.label}</span>`));
            li.appendChild(badge);
        }
        let self = this;
        li.addEventListener('click', function () {
            if (!self.multiple) {
                let deleteLiElements = selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').getElementsByTagName("li");
                for (let i = 0; i < deleteLiElements.length; i++) {
                    deleteLiElements[i].remove();
                }
                let oldSelectedOption = selectField.querySelector('option[selected]');
                if (oldSelectedOption) {
                    oldSelectedOption.removeAttribute("selected");
                }
            }
            let option = selectField.querySelector(`option[value='${this.getAttribute("data-id")}']`);
            if (!option) {
                option = document.createElement("option");
                option.value = searchOption.id;
                option.innerText = searchOption.text;
                if (searchOption.label && selectField.querySelector(`optgroup[label="${searchOption.label}"]`)) {
                    selectField.querySelector(`optgroup[label="${searchOption.label}"]`).appendChild(option);
                }
                else {
                    selectField.appendChild(option);
                }
            }
            option.setAttribute("selected", 'selected');
            __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_closeOverlay).call(self);
            if (selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list button[data-id='${searchOption.id}']`)) {
                // already selected. nothing to do...
                return;
            }
            let deleteButton = __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createDeleteButton).call(self, searchOption.id, searchOption.text, searchOption.label ? searchOption.label : undefined, searchOption.disabled ? searchOption.disabled : false, selectField);
            if (searchOption.label) {
                let selectedHeader = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list h5[data-optgroup=${searchOption.label}]`);
                if (!selectedHeader) {
                    selectedHeader = document.createElement("h5");
                    selectedHeader.innerHTML = searchOption.label;
                    selectedHeader.setAttribute("data-optgroup", searchOption.label);
                    selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(selectedHeader);
                }
                selectedHeader.insertAdjacentElement('afterend', deleteButton);
            }
            else {
                selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(deleteButton);
            }
            selectField.dispatchEvent(afterAdd);
        });
        li.addEventListener('keydown', function (event) {
            var _a, _b, _c, _d;
            event.preventDefault();
            let liElements = document.querySelectorAll(".better-nice-select-overlay .search-container ul li:not(.hidden)");
            if (event.key === "ArrowDown") {
                if (__classPrivateFieldGet(self, _BetterNiceSelect_currentLi, "f") + 1 >= liElements.length) {
                    __classPrivateFieldSet(self, _BetterNiceSelect_currentLi, 0, "f");
                }
                else {
                    __classPrivateFieldSet(_a = self, _BetterNiceSelect_currentLi, (_b = __classPrivateFieldGet(_a, _BetterNiceSelect_currentLi, "f"), _b++, _b), "f");
                }
                liElements[__classPrivateFieldGet(self, _BetterNiceSelect_currentLi, "f")].tabIndex = 0;
                liElements[__classPrivateFieldGet(self, _BetterNiceSelect_currentLi, "f")].focus();
                this.tabIndex = -1;
            }
            if (event.key === "ArrowUp") {
                if (__classPrivateFieldGet(self, _BetterNiceSelect_currentLi, "f") - 1 < 0) {
                    __classPrivateFieldSet(self, _BetterNiceSelect_currentLi, liElements.length - 1, "f");
                }
                else {
                    __classPrivateFieldSet(_c = self, _BetterNiceSelect_currentLi, (_d = __classPrivateFieldGet(_c, _BetterNiceSelect_currentLi, "f"), _d--, _d), "f");
                }
                liElements[__classPrivateFieldGet(self, _BetterNiceSelect_currentLi, "f")].tabIndex = 0;
                liElements[__classPrivateFieldGet(self, _BetterNiceSelect_currentLi, "f")].focus();
                this.tabIndex = -1;
            }
            if (event.key === "Tab") {
                document.querySelector(".better-nice-select-overlay .search-container input").focus();
            }
            if (event.key === "Enter") {
                this.click();
            }
        });
        li.addEventListener("focusin", function () {
            let input = document.querySelector(".better-nice-select-overlay .search-container input");
            let inputHint = document.querySelector(".better-nice-select-overlay .search-container input.hint");
            input.value = searchOption.text;
            inputHint.value = searchOption.text;
        });
        searchList.appendChild(li);
    }
}, _BetterNiceSelect_createDeleteButton = function _BetterNiceSelect_createDeleteButton(optKey, optValue, label, disabled, selectField) {
    const afterDelete = new CustomEvent("removed.better-nice-select", {
        detail: {
            key: optKey,
            value: optValue
        }
    });
    let liElement = document.createElement("li");
    liElement.classList.add(...constants.CLASSES.deleteItem);
    let optValueElement = document.createElement("div");
    optValueElement.classList.add(...constants.CLASSES.deleteButtonOptionText);
    optValueElement.innerText = optValue;
    liElement.appendChild(optValueElement);
    let button = document.createElement("button");
    button.classList.add(...constants.CLASSES.deleteButton);
    button.setAttribute("type", "button");
    button.setAttribute("data-id", optKey);
    if (disabled || this.disabled) {
        button.setAttribute("disabled", 'disabled');
    }
    let icon = document.createElement("span");
    if (typeof this.icons.delete === 'string') {
        icon.insertAdjacentHTML("beforeend", this.icons.delete);
    }
    else {
        icon.insertAdjacentElement("beforeend", this.icons.delete);
    }
    button.appendChild(icon);
    liElement.appendChild(button);
    let self = this;
    button.addEventListener("click", function () {
        selectField.querySelector(`option[value='${this.getAttribute("data-id")}']`).removeAttribute("selected");
        if (this.parentElement.previousElementSibling && this.parentElement.previousElementSibling.tagName.toUpperCase() === "H5" && (this.parentElement.nextElementSibling && this.parentElement.nextElementSibling.tagName.toUpperCase() === "H5" || !this.parentElement.nextElementSibling)) {
            this.parentElement.previousElementSibling.remove();
        }
        this.parentElement.remove();
        if (!self.multiple && selectField.nextElementSibling.querySelectorAll(".better-nice-select .delete-list li").length === 0) {
            selectField.selectedIndex = -1;
        }
        if (self.customSearch === undefined && !__classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").items.map(x => x.id.toLowerCase()).includes(optKey.toLowerCase())) {
            __classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").items.push(label ?
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
}, _BetterNiceSelect_openOverlay = function _BetterNiceSelect_openOverlay() {
    if (this.animation) {
        document.querySelector(".better-nice-select-overlay").classList.add("animate-in");
    }
    else {
        document.querySelector(".better-nice-select-overlay").classList.add("active");
    }
}, _BetterNiceSelect_closeOverlay = function _BetterNiceSelect_closeOverlay() {
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
    }
    else {
        document.querySelector(".better-nice-select-overlay").classList.remove("active");
        document.querySelector("body").removeChild(document.querySelector(".better-nice-select-overlay"));
    }
}, _BetterNiceSelect_createSearchOptGroupHint = function _BetterNiceSelect_createSearchOptGroupHint() {
    let optgroupHint = document.createElement("div");
    optgroupHint.classList.add(...constants.CLASSES.searchOptGroupHint);
    let shiftIcon = document.createElement("div");
    shiftIcon.classList.add("icon");
    shiftIcon.innerHTML = "&#8679;";
    let tabIcon = document.createElement("div");
    tabIcon.classList.add("icon");
    tabIcon.innerText = "Tab";
    optgroupHint.appendChild(shiftIcon);
    optgroupHint.appendChild(tabIcon);
    return optgroupHint;
}, _BetterNiceSelect_triggerSearchContainerAnimationForOptgroupSelected = function _BetterNiceSelect_triggerSearchContainerAnimationForOptgroupSelected() {
    let searchContainer = document.querySelector(".better-nice-select-overlay .search-container");
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
}, _BetterNiceSelect_triggerSearchContainerAnimationForWrongInput = function _BetterNiceSelect_triggerSearchContainerAnimationForWrongInput() {
    let searchContainer = document.querySelector(".better-nice-select-overlay .search-container");
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
}, _BetterNiceSelect_createOverlay = function _BetterNiceSelect_createOverlay(selectField) {
    let hideOverlayOnClick = function (event) {
        let target = (event && event.target);
        if (target == this) {
            __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_closeOverlay).call(self);
        }
    };
    let filterOnSearchInput = function (filter, searchInput, searchHint, animationWrapper) {
        return __awaiter(this, void 0, void 0, function* () {
            document.querySelector(".better-nice-select-overlay .search-container ul").classList.remove("active");
            animationWrapper.classList.add("active");
            searchHint.value = "";
            if (filter.length === 0) {
                animationWrapper.classList.remove("active");
                document.querySelector(".better-nice-select-overlay .search-container ul").innerHTML = "";
                return;
            }
            let selectedOptgroupElement = document.querySelector(".better-nice-select-overlay .search-container .search-optgroup-selected");
            let founded;
            if (self.customSearch !== undefined) {
                yield __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_filterRemoteSearchData).call(self, filter, selectedOptgroupElement ? selectedOptgroupElement.getAttribute("data-optgroup") : null, selectField);
                // it could be that search was already emptied again because getting data takes to long so we can early return
                if (searchInput.value.length === 0) {
                    return;
                }
                __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_refreshSearchListItems).call(self, selectField);
                founded = __classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").items.find(item => item.text.toLowerCase().startsWith(filter.toLowerCase()));
            }
            else {
                __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_refreshSearchListItems).call(self, selectField);
                let liNodes = document.querySelector(".better-nice-select-overlay .search-container ul").getElementsByTagName("li");
                for (let i = 0; i < liNodes.length; i++) {
                    if (selectedOptgroupElement && liNodes[i].querySelector(".badge").textContent !== selectedOptgroupElement.getAttribute("data-optgroup")) {
                        liNodes[i].classList.add("hidden");
                        continue;
                    }
                    if (liNodes[i].firstChild.textContent.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                        if (!founded && liNodes[i].firstChild.textContent.toLowerCase().startsWith(filter.toLowerCase())) {
                            founded = __classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").items.find(item => item.id === liNodes[i].getAttribute("data-id"));
                        }
                        liNodes[i].classList.remove("hidden");
                    }
                    else {
                        liNodes[i].classList.add("hidden");
                    }
                }
            }
            if (founded) {
                searchHint.value = `${searchInput.value}${founded.text.substring(searchInput.value.length)}`;
            }
            animationWrapper.classList.remove("active");
            document.querySelector(".better-nice-select-overlay .search-container ul").classList.add("active");
        });
    };
    let keyboardInteraction = function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            let allowTagsInputInteraction = function (keyValue) {
                return __awaiter(this, void 0, void 0, function* () {
                    const afterAdd = new CustomEvent("inserted.better-nice-select", {
                        detail: {
                            key: keyValue,
                            value: keyValue
                        }
                    });
                    let checkTagBeforeCreation = function () {
                        if (self['customTagCheck'] instanceof Function || typeof self['customTagCheck'] === 'function') {
                            return self['customTagCheck'](keyValue);
                        }
                        if (typeof self['customTagCheck'] === 'string') {
                            return utils.executeFunctionByName(self['customTagCheck'], window, keyValue);
                        }
                        return true;
                    };
                    if (self.tokenSeparators.includes(event.key)) {
                        enterAlreadyPressed = true;
                        document.querySelector(".better-nice-select-overlay .search-container ul").classList.remove("active");
                        let animationWrapper = document.querySelector(".better-nice-select-overlay .search-container .loading-wrapper");
                        animationWrapper.firstChild.textContent = LOCALISATION[self.locale].formatCheckingMessage();
                        animationWrapper.classList.add("active");
                        yield Promise.resolve(checkTagBeforeCreation()).then(value => {
                            if (!value) {
                                console.error(`Can not create option with value '${keyValue}' because of given check function...`);
                                __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_closeOverlay).call(self);
                                return;
                            }
                            let optgroup;
                            if (__classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels.length !== 0) {
                                let optgroupSelectedElement = document.querySelector(".better-nice-select-overlay .search-container .search-optgroup-selected");
                                if (!optgroupSelectedElement) {
                                    __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_triggerSearchContainerAnimationForWrongInput).call(self);
                                    console.error(`Can not create option with value '${keyValue}' because you need to select an optiongroup first...`);
                                    animationWrapper.classList.remove("active");
                                    animationWrapper.firstChild.textContent = LOCALISATION[self.locale].formatLoadingMessage();
                                    document.querySelector(".better-nice-select-overlay .search-container ul").classList.add("active");
                                    return;
                                }
                                optgroup = optgroupSelectedElement.getAttribute("data-optgroup");
                            }
                            let option = selectField.querySelector(`option[value='${keyValue}']`);
                            if (!option) {
                                option = document.createElement("option");
                                option.value = keyValue;
                                option.innerText = keyValue;
                                if (optgroup && selectField.querySelector(`optgroup[label="${optgroup}"]`)) {
                                    selectField.querySelector(`optgroup[label="${optgroup}"]`).appendChild(option);
                                }
                                else {
                                    selectField.appendChild(option);
                                }
                            }
                            option.setAttribute("selected", "selected");
                            if (!selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list button[data-id='${keyValue}']`)) {
                                let newDeleteButton = __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createDeleteButton).call(self, keyValue, keyValue, optgroup ? optgroup : undefined, false, selectField);
                                if (optgroup) {
                                    let selectedHeader = selectField.nextElementSibling.querySelector(`.better-nice-select .delete-list h5[data-optgroup=${optgroup}]`);
                                    if (!selectedHeader) {
                                        selectedHeader = document.createElement("h5");
                                        selectedHeader.innerHTML = optgroup;
                                        selectedHeader.setAttribute("data-optgroup", optgroup);
                                        selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(selectedHeader);
                                    }
                                    selectedHeader.insertAdjacentElement('afterend', newDeleteButton);
                                }
                                else {
                                    selectField.nextElementSibling.querySelector('.better-nice-select .delete-list').appendChild(newDeleteButton);
                                }
                            }
                            animationWrapper.classList.remove("active");
                            __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_closeOverlay).call(self);
                            selectField.dispatchEvent(afterAdd);
                        });
                    }
                });
            };
            // multi purpose button 'Enter' should only react to one event
            let enterAlreadyPressed = false;
            if (self.tags) {
                yield allowTagsInputInteraction(this.value.trim());
            }
            if ((event.key === "Tab" && !event.shiftKey) || event.key === "ArrowDown") {
                event.preventDefault();
                let liElements = document.querySelectorAll(".better-nice-select-overlay .search-container ul li:not(.hidden)");
                if (liElements.length > 0) {
                    liElements.forEach(element => element.tabIndex = -1);
                    liElements[0].tabIndex = 0;
                    __classPrivateFieldSet(self, _BetterNiceSelect_currentLi, 0, "f");
                    liElements[0].focus();
                }
            }
            if (event.key === "ArrowRight" && event.target.selectionStart === this.value.length) {
                let inputHint = document.querySelector(".better-nice-select-overlay .search-container input.hint");
                if (inputHint.value && inputHint.value !== "") {
                    event.preventDefault();
                    this.value = inputHint.value;
                    let liNodes = document.querySelector(".better-nice-select-overlay .search-container ul").getElementsByTagName("li");
                    for (let i = 0; i < liNodes.length; i++) {
                        let txtValue = liNodes[i].firstChild.textContent;
                        if (txtValue.toLowerCase().indexOf(inputHint.value.toLowerCase()) > -1) {
                            liNodes[i].classList.remove("hidden");
                        }
                        else {
                            liNodes[i].classList.add("hidden");
                        }
                    }
                }
            }
            if (event.shiftKey && event.key === 'Tab' && __classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels.length !== 0) {
                event.preventDefault();
                this.value = "";
                this.dispatchEvent(new Event('input', { bubbles: true }));
                let optGroupSearchSelected = document.querySelector(".better-nice-select-overlay .search-container .search-optgroup-selected");
                if (!optGroupSearchSelected) {
                    optGroupSearchSelected = document.createElement("div");
                    optGroupSearchSelected.classList.add(...constants.CLASSES.searchOptGroupSelected);
                    document.querySelector(".better-nice-select-overlay .search-container .search-optgroup-hint").remove();
                    this.insertAdjacentElement("afterend", optGroupSearchSelected);
                }
                if (__classPrivateFieldGet(self, _BetterNiceSelect_currentOptGroup, "f") < __classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels.length) {
                    optGroupSearchSelected.innerText = __classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels[__classPrivateFieldGet(self, _BetterNiceSelect_currentOptGroup, "f")];
                    optGroupSearchSelected.setAttribute("data-optgroup", __classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels[__classPrivateFieldGet(self, _BetterNiceSelect_currentOptGroup, "f")]);
                    __classPrivateFieldSet(_a = self, _BetterNiceSelect_currentOptGroup, (_b = __classPrivateFieldGet(_a, _BetterNiceSelect_currentOptGroup, "f"), _b++, _b), "f");
                }
                else {
                    __classPrivateFieldSet(self, _BetterNiceSelect_currentOptGroup, 0, "f");
                    optGroupSearchSelected.remove();
                    this.parentNode.appendChild(__classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createSearchOptGroupHint).call(self));
                }
                if (self.animation) {
                    __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_triggerSearchContainerAnimationForOptgroupSelected).call(self);
                }
            }
            if (event.key === 'Enter' && !enterAlreadyPressed && this.value && this.value !== "") {
                let liElements = document.querySelectorAll(".better-nice-select-overlay .search-container ul li:not(.hidden)");
                if (liElements && liElements.length !== 1 && self.animation) {
                    __classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_triggerSearchContainerAnimationForWrongInput).call(self);
                    console.error("To many possible <option> groups.... Please restrict further by tipping more in search input...");
                }
                if (liElements && liElements.length === 1) {
                    liElements[0].click();
                }
            }
        });
    };
    let self = this;
    let overlayElement = document.createElement("div");
    overlayElement.classList.add(...constants.CLASSES.overlayContainer);
    let divWrapper = document.createElement("div");
    divWrapper.classList.add(...constants.CLASSES.overlayContainerWrapper);
    divWrapper.addEventListener("click", hideOverlayOnClick);
    let search = document.createElement("div");
    search.classList.add(...constants.CLASSES.searchContainer);
    let searchInputWrapper = document.createElement("div");
    searchInputWrapper.classList.add(...constants.CLASSES.searchInputWrapper);
    let searchIcon = document.createElement("span");
    searchIcon.classList.add(...constants.CLASSES.searchIcon);
    if (typeof self.icons.search === 'string') {
        searchIcon.insertAdjacentHTML("beforeend", self.icons.search);
    }
    else {
        searchIcon.insertAdjacentElement("beforeend", self.icons.search);
    }
    let searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder", LOCALISATION[self.locale].formatSearch());
    searchInputWrapper.appendChild(searchIcon);
    searchInputWrapper.appendChild(searchInput);
    let searchHintInput = document.createElement("input");
    searchHintInput.classList.add(...constants.CLASSES.searchHintInput);
    searchInputWrapper.appendChild(searchHintInput);
    if (self.tags) {
        let tagIcon = document.createElement("span");
        tagIcon.classList.add(...constants.CLASSES.tagIcon);
        if (typeof self.icons.tag === 'string') {
            tagIcon.insertAdjacentHTML("beforeend", self.icons.tag);
        }
        else {
            tagIcon.insertAdjacentElement("beforeend", self.icons.tag);
        }
        let tooltip = document.createElement("span");
        tooltip.classList.add("tooltip-own");
        tagIcon.appendChild(tooltip);
        let index = self.tokenSeparators.indexOf(" ");
        let copySeparators = self.tokenSeparators.slice();
        if (index > -1) {
            copySeparators.splice(index, 1);
            copySeparators.push("Spacebar");
        }
        tooltip.append(...utils.htmlToElements(`${LOCALISATION[self.locale].formatHelpForTagging()}<br/>${copySeparators.join("<br/>")}`));
        searchInputWrapper.appendChild(tagIcon);
    }
    if (__classPrivateFieldGet(self, _BetterNiceSelect_searchData, "f").possibleOptGroupLabels.length !== 0) {
        searchInputWrapper.appendChild(__classPrivateFieldGet(self, _BetterNiceSelect_instances, "m", _BetterNiceSelect_createSearchOptGroupHint).call(self));
    }
    search.appendChild(searchInputWrapper);
    let focusHr = document.createElement("span");
    focusHr.classList.add(...constants.CLASSES.searchHrFocus);
    search.appendChild(focusHr);
    let hr = document.createElement("span");
    hr.classList.add(...constants.CLASSES.searchHr);
    search.appendChild(hr);
    let searchList = document.createElement("ul");
    searchList.classList.add(...constants.CLASSES.searchList);
    search.appendChild(searchList);
    let loadingAnimationWrapper = document.createElement("div");
    loadingAnimationWrapper.classList.add("loading-wrapper");
    let loadingAnimation = document.createElement("div");
    loadingAnimation.classList.add("loading");
    let loadingText = document.createElement("span");
    loadingText.innerText = LOCALISATION[self.locale].formatLoadingMessage();
    loadingAnimationWrapper.appendChild(loadingText);
    loadingAnimationWrapper.appendChild(loadingAnimation);
    search.appendChild(loadingAnimationWrapper);
    divWrapper.appendChild(search);
    overlayElement.appendChild(divWrapper);
    document.querySelector("body").appendChild(overlayElement);
    searchInput.addEventListener("input", utils.debounce(function () {
        filterOnSearchInput(searchInput.value.trim(), searchInput, searchHintInput, loadingAnimationWrapper);
    }, self.inputDelay));
    searchInput.addEventListener('keydown', keyboardInteraction);
    searchInput.addEventListener("focusin", function () {
        document.querySelector('.better-nice-select-overlay .search-container .focus-border').classList.add("active");
    });
    searchInput.addEventListener("focusout", function () {
        document.querySelector('.better-nice-select-overlay .search-container .focus-border').classList.remove("active");
    });
};
/* harmony default export */ const better_nice_select = (BetterNiceSelect);

;// CONCATENATED MODULE: ./src/ts/locale/better-nice-select-es-ES.ts
/*
 *  Better Nice Select Spanish (Spain, International Sort) Translation
 *  Author: Kevin Gostomski <kevingostomski2001@gmail.com>
*/


const ES = {
    formatSearch() {
        return "Buscar...";
    },
    formatHelpForTagging() {
        return "Para crear sus propias etiquetas, céntrese en el campo de entrada y haga clic en uno de los siguientes botones para crear el objeto:";
    },
    formatAlertOptiongroups() {
        return "Espere...\nLos grupos de opciones aún se están cargando...";
    },
    formatLoadingMessage() {
        return "Cargando";
    },
    formatCheckingMessage() {
        return "Comprobación";
    }
};
LOCALISATION['es-ES'] = LOCALISATION['es'] = ES;
DEFAULTS.locale = "es-ES";


/******/ 	return __webpack_exports__;
/******/ })()
;
});