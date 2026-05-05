import React from "react";

import { classNames } from "@/util/utils";
import Logo from "../logo";
import styles from "./dialog-trail-passion.module.css";

export interface DialogTrailPassionProps {
	className?: string;
	open: boolean;
	onClose: () => void;
}

export default function DialogTrailPassion({
	className,
	open,
	onClose,
}: DialogTrailPassionProps) {
	return (
		<dialog
			className={classNames(className, styles.dialogTrailPassion)}
			open={open}
			closedby="any"
			onClose={onClose}
			id="trail-passion-dialog"
		>
			<div>
				<header>
					<Logo />
					<div>Trail-Passion bridge</div>
					<button type="button" onClick={onClose}>
						✕
					</button>
				</header>
				<main>Login to do something useful...</main>
			</div>
		</dialog>
	);
}
