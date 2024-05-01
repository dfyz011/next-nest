"use client";

import React, { useState, useRef, ReactNode } from "react";
import { ContextMenu } from "./ContextMenu";

export const ButtonedContextMenu = ({ children }: { children: ReactNode }) => {
	const [isVisible, setIsVisible] = useState(false);

	const hideMenu = () => {
		setIsVisible(false);
	};

	const handleButtonClick = () => {
		setIsVisible(true);
	};

	return (
		<div>
			<button onClick={handleButtonClick}>...</button>
			<div style={{ position: "relative", width: 0, height: 0 }}>
				<ContextMenu isVisible={isVisible} hideMenu={hideMenu}>
					{children}
				</ContextMenu>
			</div>
		</div>
	);
};
