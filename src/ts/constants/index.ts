/**
 * Object with helper texts to render the HTML elements
 */
const EN = {
    /**
     * Helper text for Search placeholder
     * @returns english string for search placeholder
     */
    formatSearch(): string {
        return "Search..."
    },
    /**
     * Helper text for information text on creating own tags
     * @returns english string for information for tagging process
     */
    formatHelpForTagging(): string {
        return "To create your own tags, focus on the input field and click one of the following buttons to create the object:";
    },
    /**
     * Helper text for alert when options groups are still getting loaded from remote action
     * @returns english string for alert option groups
     */
    formatAlertOptiongroups(): string {
        return "Please wait...\nThe option groups are still getting loaded...";
    },
    formatLoadingMessage(): string {
        return "Loading";
    },
    formatCheckingMessage(): string {
        return "Checking";
    }
}

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
}

export type IconType = {
    search: string | HTMLElement,
    delete: string | HTMLElement,
    add: string | HTMLElement,
    tag: string | HTMLElement
}

export interface DefaultType {
    animation: boolean,
    multiple: boolean,
    disabled: boolean,
    customSearch: string | Function,
    customOptiongroupLabels: string | Function,
    tags: boolean,
    customTagCheck: string | Function,
    tokenSeparators: string[],
    locale: string,
    scrollable: {
        on: boolean,
        height: string
    },
    icons: IconType,
    inputDelay: number
}

const DEFAULT: DefaultType = {
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
    } as IconType,
    inputDelay: 400
}

export interface Localisation {
    [key: string]: {
        formatSearch(): string;
        formatHelpForTagging(): string;
        formatAlertOptiongroups(): string;
        formatLoadingMessage(): string;
        formatCheckingMessage(): string;
    };
}

interface ExportedConstants {
    CLASSES: any;
    LOCALISATION: Localisation;
    DEFAULT: any;
}

const exportedObject: ExportedConstants = {
    CLASSES: CLASSES,
    LOCALISATION: {
        'en': EN,
        'en-US': EN
    },
    DEFAULT: DEFAULT
};

export default exportedObject;