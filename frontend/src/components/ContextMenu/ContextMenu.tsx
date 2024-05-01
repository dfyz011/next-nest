"use client";

import React, { CSSProperties, ReactNode, useEffect, useRef } from "react";
import styles from "./styles.module.css";

export type ContextMenuProps = {
	isVisible: boolean;
	xPos?: number;
	yPos?: number;
	children: ReactNode;
	hideMenu: () => void;
};

export const ContextMenu = ({
	isVisible,
	xPos = 0,
	yPos = 0,
	children,
	hideMenu,
}: ContextMenuProps) => {
	const menuRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			hideMenu();
		}
	};

	useEffect(() => {
		if (isVisible) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isVisible]);

	const menuStyles: CSSProperties = {
		display: isVisible ? "block" : "none",
		top: yPos,
		left: xPos,
	};

	return (
		<div ref={menuRef} className={styles.menu} style={menuStyles}>
			{children}
		</div>
	);
};
