"use client";
import { useState, ReactNode, FunctionComponent } from "react";

interface AccordionProps {
	children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
				onClick={toggleAccordion}
				style={{ display: "flex", alignItems: "center" }}
			>
				{isOpen ? "-" : "+"}
			</button>
			{isOpen && <div style={{ marginTop: "0.5rem" }}>{children}</div>}
		</div>
	);
};
