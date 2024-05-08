export default {
    /**
     * Create HTML single Element from string input
     * @param {String} html representing a single element
     * @return {Element}
     */
    htmlToElement(html: string) {
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
    htmlToElements(html: string) {
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
    executeFunctionByName(functionName: string, context: any, ...args: any[]) {
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
    debounce(callback: Function, wait: number) {
        let timeout: ReturnType<typeof setTimeout>;;
        return (...args: any) => {
            clearTimeout(timeout);
            timeout = setTimeout(function () { callback(...args); }, wait);
        };
    },
}