"use client";

import { useState, ReactNode } from "react";
import styles from "./styles.module.css";

interface AccordionProps {
	children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`${styles.accordion} ${isOpen ? styles.accordion_open : ""}`}
		>
			<button className={styles.accordion__button} onClick={toggleAccordion}>
				<span className={styles.accordion__sign}>{isOpen ? "-" : "+"}</span>
			</button>
			<div className={styles.accordion__content}>
				{isOpen && (
					<div className={styles.accordion__content_inner}>{children}</div>
				)}
			</div>
		</div>
	);
};
