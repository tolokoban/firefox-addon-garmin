declare module "*.module.css" {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare function cloneInto(obj: any, target: any): any
declare interface Window { wrappedJSObject: typeof globalThis & { fetch: typeof fetch } }

