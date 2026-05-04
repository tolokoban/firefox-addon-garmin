import { createRoot } from "react-dom/client"

import { AddOn } from "./components/add-on"
import { getWhenExist } from "./dom"

async function start() {
    console.log("Garmin Trail-Passion content script loaded on activities page")
    const container = await getWhenExist("#pageContainer")
    const header = container.querySelector("div")
    if (!header) throw new Error("Div #pageContainer is empty!")

    const body = document.createElement("span")
    header.appendChild(body)
    const root = createRoot(body)
    root.render(<AddOn />)
}

start()