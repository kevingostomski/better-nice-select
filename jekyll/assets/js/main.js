betterNiceSelect.LOCALISATION.en.formatSearch = function() {
    return "Search Vegetables, Fruits..."
}


let remoteSearchData = {
    items: [
        {
            id: "Banana",
            text: "Banana",
            label: "Fruit"
        },
        {
            id: "Apple",
            text: "Apple",
            label: "Fruit"
        },
        {
            id: "Orange",
            text: "Orange",
            label: "Fruit"
        },
        {
            id: "Blackberry",
            text: "Blackberry",
            label: "Fruit"
        },
        {
            id: "Coconut",
            text: "Coconut",
            label: "Fruit"
        },
        {
            id: "Papaya",
            text: "Papaya",
            label: "Fruit"
        },
        {
            id: "Mango",
            text: "Mango",
            label: "Fruit"
        },
        {
            id: "Grapes",
            text: "Grapes",
            label: "Fruit"
        },
        {
            id: "Cherry",
            text: "Cherry",
            label: "Fruit"
        }, {
            id: "Guava",
            text: "Guava",
            label: "Fruit"
        },
        {
            id: "Lime",
            text: "Lime",
            label: "Fruit"
        },
        {
            id: "Pepper",
            text: "Pepper",
            label: "Vegetable"
        },
        {
            id: "Garlic",
            text: "Garlic",
            label: "Vegetable"
        },
        {
            id: "Eggplant",
            text: "Eggplant",
            label: "Vegetable"
        },
        {
            id: "Fennel",
            text: "Fennel",
            label: "Vegetable"
        },
        {
            id: "Corn",
            text: "Corn",
            label: "Vegetable"
        }, {
            id: "Cucumber",
            text: "Cucumber",
            label: "Vegetable"
        },
        {
            id: "Carrot",
            text: "Carrot",
            label: "Vegetable"
        },
        {
            id: "Chili",
            text: "Chili",
            label: "Vegetable"
        }, {
            id: "Potato",
            text: "Potato",
            label: "Vegetable"
        },
        {
            id: "Squash",
            text: "Squash",
            label: "Vegetable"
        },
    ]
}

function callRemoteData(filter, selectedOptgroup) {
    // put AJAX or Fetch for Remote JSON object here
    return new Promise(function (resolve, reject) {
        let toRet = structuredClone(remoteSearchData);
        let ret = toRet.items.filter(data => {
            if (selectedOptgroup) {
                return data.label === selectedOptgroup && data.text.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            } else {
                return data.text.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            }
        });
        setTimeout(() => resolve(ret), 3000);
    });
}

function checkTag(input) {
    return new Promise(function (resolve, reject) {
        let ret = true;
        if (input === "" || input.toLowerCase().includes("ä") || input.toLowerCase().includes("ö") || input.toLowerCase().includes("ü")) {
            ret = false;
        }
        setTimeout(() => resolve(ret), 5000);
    });
}

function callRemoteOptionGroups() {
    return new Promise(function (resolve, reject) {
        let arr = [];
        remoteSearchData.items.forEach(data => {
            if (!arr.includes(data.label)) {
                arr.push(data.label);
            }
        });
        setTimeout(() => resolve(arr), 5000);
    });
};

document.addEventListener("DOMContentLoaded", function () {

    // Generate CopyToClipBoard Button for Code Blocks
    let clipBoardButton = function () {
        let divWrapper = document.createElement("div");
        divWrapper.classList.add("bd-clipboard");
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-toggle", "tooltip");
        button.setAttribute("data-bs-title", "Copy to clipboard");
        button.classList.add("btn-clipboard");
        button.addEventListener("click", async function () {
            button.querySelector("i").classList.replace("fa-regular", "fa-solid");
            button.querySelector("i").classList.replace("fa-clipboard", "fa-check");
            let tooltip = bootstrap.Tooltip.getInstance(button);
            let code = button.parentElement.nextElementSibling.querySelector("code");
            await navigator.clipboard.writeText(code.innerText);
            tooltip.setContent({ '.tooltip-inner': 'Copied!' });
            setTimeout(function () {
                button.querySelector("i").classList.replace("fa-solid", "fa-regular");
                button.querySelector("i").classList.replace("fa-check", "fa-clipboard");
                tooltip.setContent({ '.tooltip-inner': 'Copy to clipboard' });
                tooltip.hide();
            }, 1500);
        });
        let icon = document.createElement("i");
        icon.classList.add("fa-regular", "fa-clipboard");
        button.appendChild(icon);
        divWrapper.appendChild(button);
        return divWrapper;
    };

    let figures = document.querySelectorAll("figure.highlight");
    for (let figure of figures) {
        figure.parentNode.insertBefore(clipBoardButton(), figure);
    }

    // Activate Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Activate possible BetterNiceSelects
    let elements = document.querySelectorAll('[data-toggle="better-nice-select"]');
    elements.forEach(element => new betterNiceSelect.BetterNiceSelect(element));

    if (document.querySelector("#from-javascript")) {
        new betterNiceSelect.BetterNiceSelect("#from-javascript");
    }

    if (document.querySelector("#option-searchdata")) {
        new betterNiceSelect.BetterNiceSelect("#option-searchdata", { customSearch: 'callRemoteData' });
    }

    if (document.querySelector('#option-icons')) {
        new betterNiceSelect.BetterNiceSelect("#option-icons", {
            icons: {
                add: '<i class="material-icons">add</i>',
                search: '<i class="fa-solid fa-magnifying-glass"></i>',
                tag: '<i class="fa-solid fa-circle-exclamation"></i>',
                delete: '<i class="bi bi-trash"></i>'
            }
        });
    }

    if (document.querySelector('#option-scrollable')) {
        new betterNiceSelect.BetterNiceSelect("#option-scrollable", {
            scrollable: {
                on: 'true',
                height: '200px'
            }
        });
    }

    if (document.querySelector("#event-inserted")) {
        document.querySelector("#event-inserted").addEventListener("inserted.better-nice-select", function (e) {
            alert(`ADDED = Key: '${e.detail.key}' | Text: '${e.detail.value}'`);
        });
    }

    if (document.querySelector("#event-removed")) {
        document.querySelector("#event-removed").addEventListener("removed.better-nice-select", function (e) {
            alert(`REMOVED = Key: '${e.detail.key}' | Text: '${e.detail.value}'`);
        });
    }

    if (document.querySelector("#option-animation")) {
        let select = new betterNiceSelect.BetterNiceSelect("#option-animation");
        document.querySelector("#option-animation-hide").addEventListener("click", function () {
            select.hide();
        });
        document.querySelector("#option-animation-show").addEventListener("click", function () {
            select.show();
        });
    }

    if (document.querySelector("#methods-animation")) {
        let select = new betterNiceSelect.BetterNiceSelect("#methods-animation");
        document.querySelector("#methods-animation-hide").addEventListener("click", function () {
            select.hide();
        });
        document.querySelector("#methods-animation-show").addEventListener("click", function () {
            select.show();
        });
    }

    if (document.querySelector("#methods-destroy")) {
        let select = new betterNiceSelect.BetterNiceSelect("#methods-destroy");
        document.querySelector("#methods-destroy-destroy").addEventListener("click", function () {
            select.destroy();
        });
        document.querySelector("#methods-destroy-recreate").addEventListener("click", function () {
            select = new betterNiceSelect.BetterNiceSelect("#methods-destroy");
        });
    }

    if (document.querySelector("#methods-overlay")) {
        let select = new betterNiceSelect.BetterNiceSelect("#methods-overlay");
        document.querySelector("#methods-overlay-open").addEventListener("click", function () {
            select.open("A");
        });
        document.querySelector("#methods-overlay-close").addEventListener("click", function () {
            select.close();
        });
    }

    if (document.querySelector("#methods-select")) {
        let select = new betterNiceSelect.BetterNiceSelect("#methods-select");
        document.querySelector("#methods-select-select").addEventListener("click", function () {
            select.select({ id: "Apple", text: "Apple" }, { id: "Lemon", text: "Lemon" }, { id: "Garlic", text: "Garlic" });
        });

        document.querySelector("#methods-select-select-all").addEventListener("click", function () {
            select.selectAll();
        });

        document.querySelector("#methods-select-deselect").addEventListener("click", function () {
            select.deselect("Lemon", "Cabbages");
        });

        document.querySelector("#methods-select-deselect-all").addEventListener("click", function () {
            select.deselectAll();
        });
    }

    if (document.querySelector("#option-tagscheck")) {
        new betterNiceSelect.BetterNiceSelect('#option-tagscheck', { customTagCheck: 'checkTag', tags: true });
    }

    if (document.querySelector("#option-customoptiongrouplabel")) {
        new betterNiceSelect.BetterNiceSelect('#option-customoptiongrouplabel', { customOptiongroupLabels: 'callRemoteOptionGroups', customSearch: 'callRemoteData'});
    }
});