import { isString } from "@tolokoban/type-guards"

export function classNames(...classes: unknown[]): string {
    return classes.filter(isString).join(" ")
}