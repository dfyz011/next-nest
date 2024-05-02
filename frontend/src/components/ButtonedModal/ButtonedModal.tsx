import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { ModalContext } from "./ModalContext";

type ModalProps = {
	text: string;
	children: ReactNode;
};

export const ButtonedModal = ({ text, children }: ModalProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<ModalContext.Provider value={{ closeModal }}>
			<div>
				<button onClick={openModal}>{text}</button>
				{isOpen && (
					<div className={styles["modal-overlay"]}>
						<div className={styles.modal}>
							<button onClick={closeModal} className={styles["close-button"]}>
								x
							</button>
							{children}
						</div>
					</div>
				)}
			</div>
		</ModalContext.Provider>
	);
};
