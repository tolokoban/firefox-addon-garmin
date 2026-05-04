export function getWhenExist(selector: string): Promise<Element> {
    return new Promise((resolve, reject) => {
        const elem = document.querySelector(selector)
        if (elem) resolve(elem)
        else setTimeout(() => getWhenExist(selector).then(resolve).catch(reject), 300)
    })
}