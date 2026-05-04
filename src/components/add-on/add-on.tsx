import { ServiceGarmin } from "../../services/garmin";
import styles from "./add-on.module.css";

export function AddOn() {
	const handleClick = async () => {
		const activities = await ServiceGarmin.getActivities();
		console.log("🐞 [add-on@7] activities =", activities); // @FIXME: Remove this line written on 2026-05-04 at 18:37
	};

	return (
		<div className={styles.addOn}>
			<button type="button" onClick={handleClick}>
				<svg
					viewBox="0 0 24 24"
					preserveAspectRatio="xMidYMid meet"
					fill="currentColor"
				>
					<title>Trail-Passion</title>
					<path d="M12,8A1,1,0,0,1,13,9A1,1,0,0,1,12,10A1,1,0,0,1,11,9A1,1,0,0,1,12,8M21,11C21,16.6,17.2,21.7,12,23C6.8,21.7,3,16.6,3,11V5L12,1L21,5V11M12,6A3,3,0,0,0,9,9C9,10.3,9.8,11.4,11,11.8V18H13V16H15V14H13V11.8C14.2,11.4,15,10.3,15,9A3,3,0,0,0,12,6Z" />
				</svg>
				<div>Trail-Passion</div>
			</button>
		</div>
	);
}
