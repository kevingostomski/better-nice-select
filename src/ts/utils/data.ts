/**
 * Used to only have one BetterNiceSelect-instance per select trigger available during DOM render process
 */

const elementMap = new Map<HTMLElement, Map<string, object>>()

export default {
    set(element: HTMLElement, key: string, instance: object) {
        if (!elementMap.has(element)) {
            elementMap.set(element, new Map())
        }

        const instanceMap = elementMap.get(element)

        // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            console.error(`Better-Nice-Select doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`)
            return;
        }

        instanceMap.set(key, instance)
    },

    findElement(key: string, instance: object): HTMLElement {
        for (let instanceMap of elementMap) {
            if (instanceMap[1].has(key) && instanceMap[1].get(key) === instance) {
                return instanceMap[0];
            }
        }
        return undefined;
    },

    get(element: HTMLElement, key: string) {
        if (elementMap.has(element)) {
            return elementMap.get(element).get(key) || null
        }
        return null
    },

    remove(element: HTMLElement, key: string) {
        if (!elementMap.has(element)) {
            return;
        }

        const instanceMap = elementMap.get(element)

        instanceMap.delete(key)

        // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) {
            elementMap.delete(element)
        }
    }
}