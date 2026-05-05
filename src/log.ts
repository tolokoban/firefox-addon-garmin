import { isNumber, isString } from "@tolokoban/type-guards"

const STYLE = "font-family:monospace;background:#000;color:#9dc"

export const Console = {
    log(...args: unknown[]) {
        console.log(`%c${args.map(item => {
            if (isString(item)) return item
            if (isNumber(item)) return `${item}`
            return JSON.stringify(item, null, 4)
        })}`, STYLE)
    }
}