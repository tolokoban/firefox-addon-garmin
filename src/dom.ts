import { isString } from "@tolokoban/type-guards"

export function getWhenExist(selector: string): Promise<Element> {
    return new Promise((resolve, reject) => {
        const elem = document.querySelector(selector)
        if (elem) resolve(elem)
        else setTimeout(() => getWhenExist(selector).then(resolve).catch(reject), 300)
    })
}

type DomProps =
    | string
    | Record<string, string>
    | HTMLElement[]

export function dom(tagName: string, ...children: DomProps[]): HTMLElement {
    const elem = document.createElement(tagName)
    for (const child of children) {
        if (isString(child)) {
            elem.textContent += child
        } else if (Array.isArray(child)) {
            for (const item of child) {
                elem.appendChild(item)
            }
        } else {
            console.log('🐞 [dom@26] tagName, child =', tagName, child) // @FIXME: Remove this line written on 2026-05-05 at 10:49
            for (const key of Object.keys(child)) {
                const val = child[key]
                console.log('🐞 [dom@28] key, val =', key, val) // @FIXME: Remove this line written on 2026-05-05 at 10:49
                elem.setAttribute(key, val)
            }
        }
    }
    return elem
}