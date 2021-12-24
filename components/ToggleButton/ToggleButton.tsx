import React, { useState } from "react";

import styles from "./ToggleButton.module.scss";

function ToggleButton(): React.ReactElement {
	const [isDark, setIsDark] = useState(false);

	return (
		<div
			className={isDark ? styles.toggleActive : styles.toggle}
			onClick={() => {
				const body = document.querySelector("body");
				const checkDark = body?.classList.toggle("dark");
				setIsDark(checkDark as any);
			}}
		>
			<i
				style={isDark ? { left: "35px" } : {}}
				className={styles.indicator}
			></i>
		</div>
	);
}

export default ToggleButton;
