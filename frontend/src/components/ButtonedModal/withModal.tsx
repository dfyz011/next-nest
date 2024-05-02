"use client";

import { ComponentType, useState } from "react";
import styles from "./styles.module.css";

export const withModal = <P extends object>(
	FormComponent: ComponentType<P>,
	modalDisplayName: string = "Modal"
) => {
	const WrappedModal = ({ text, ...props }: P & { text: string }) => {
		const [isOpen, setIsOpen] = useState(false);

		const openModal = () => {
			setIsOpen(true);
		};

		const closeModal = () => {
			setIsOpen(false);
		};

		const modalAfterSubmit = () => {
			closeModal();
		};

		return (
			<div>
				<button onClick={openModal}>{text}</button>
				{isOpen && (
					<div className={styles["modal-overlay"]}>
						<div className={styles.modal}>
							<button onClick={closeModal} className={styles["close-button"]}>
								x
							</button>
							<FormComponent {...(props as P)} afterSubmit={modalAfterSubmit} />
						</div>
					</div>
				)}
			</div>
		);
	};

	// Assign display name to the wrapped component
	WrappedModal.displayName = modalDisplayName;

	return WrappedModal;
};
