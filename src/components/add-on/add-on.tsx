import React from "react";

import { ServiceGarmin } from "../../services/garmin";
import DialogTrailPassion from "../dialog-trail-passion";
import Logo from "../logo";
import styles from "./add-on.module.css";

export function AddOn() {
	const [open, setOpen] = React.useState(false);
	const handleClick = async () => {
		setOpen(true);
		const activities = await ServiceGarmin.getActivities();
		console.log("🐞 [add-on@7] activities =", activities); // @FIXME: Remove this line written on 2026-05-04 at 18:37
	};

	return (
		<>
			<div className={styles.addOn}>
				<button type="button" onClick={handleClick}>
					<Logo />
					<div>Trail-Passion</div>
				</button>
			</div>
			{open && (
				<DialogTrailPassion open={open} onClose={() => setOpen(false)} />
			)}
		</>
	);
}
