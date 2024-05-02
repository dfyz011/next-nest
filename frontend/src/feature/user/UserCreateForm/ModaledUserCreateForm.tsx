"use client";

import { useModalContext } from "@/components/ButtonedModal/useModalContext";
import { UserCreateForm } from "./UserCreateForm";

type Props = {
	title: string;
	headId?: number;
};

export const ModaledUserCreateForm = ({ title, headId }: Props) => {
	const { closeModal } = useModalContext();

	return (
		<>
			<p>{title}</p>
			<UserCreateForm headId={headId} onSubmit={closeModal} />
		</>
	);
};
