"use client";

import { useModalContext } from "@/components/ButtonedModal/useModalContext";
import { UserAssignForm } from "./UserAssignForm";

type Props = {
	title: string;
	headId: number;
};

export const ModaledUserAssignForm = ({ title, headId }: Props) => {
	const { closeModal } = useModalContext();

	return (
		<>
			<p
				style={{
					textAlign: "center",
				}}
			>
				{title}
			</p>
			<UserAssignForm headId={headId} onSubmit={closeModal} />
		</>
	);
};
