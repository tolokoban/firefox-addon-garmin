import { createRoot } from "react-dom/client";

import { AddOn } from "./components/add-on";
import { dom, getWhenExist } from "./dom";
import { Console } from "./log";

async function start() {
	Console.log("Garmin Trail-Passion Add-on loaded!");
	const firstLI = await getWhenExist(
		"div.connect-container > nav.main-nav > div > div > ul > li",
	);
	if (!firstLI) throw new Error("Cannot find navigation bar!");

	const firstUL = firstLI.parentElement;
	if (!firstUL) throw new Error("Cannot find containing UL!");

	const tp = document.body.querySelector("#trail-passion");
	if (tp) {
		tp.parentNode?.removeChild(tp);
	}
	const li = dom("li", {
		id: "trail-passion",
		class: firstLI.className,
	});
	firstUL.appendChild(li);
	const root = createRoot(li);
	root.render(<AddOn />);
}

start();

async function backup_start() {
	Console.log("Garmin Trail-Passion Add-on loaded!");
	const container = await getWhenExist("#searchAndFilterContainer");
	if (!container) throw new Error("Div #searchAndFilterContainer is empty!");

	const tp = container.querySelector("#trail-passion");
	if (tp) {
		tp.parentNode?.removeChild(tp);
	}
	const body = document.createElement("div");
	body.setAttribute("id", "trail-passion");
	body.style.gridArea = "trail-passion";
	container.appendChild(body);
	if (container instanceof HTMLDivElement) {
		container.style.gridTemplateColumns = "auto 1fr auto";
		container.style.gridTemplateAreas =
			"'search activityTypesFilter trail-passion' 'activitySubTypesFilter activitySubTypesFilter trail-passion'";
	}
	const root = createRoot(body);
	root.render(<AddOn />);
}
