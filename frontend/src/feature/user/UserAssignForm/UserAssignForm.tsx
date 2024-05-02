"use client";

import { SubmitButton } from "@/components/SubmitButton";
import { AvailableForAssignUsersSelect } from "../AvailableForAssignUsersSelect";
import { FormEventHandler } from "react";
import { assignUsers } from "./actions";
import styles from "./styles.module.css";

interface UserFormProps {
	headId: number;
	onSubmit?: FormEventHandler;
}

export const UserAssignForm = ({ headId, onSubmit }: UserFormProps) => {
	const assignUsersToHead = assignUsers.bind(null, headId);

	return (
		<form
			className={styles.formContainer}
			action={assignUsersToHead}
			onSubmit={onSubmit}
		>
			<label className={styles.label}>
				User:
				<AvailableForAssignUsersSelect
					className={styles.select}
					name="userIds"
					multiple
					required
					headId={headId}
				/>
			</label>
			<SubmitButton>Assign</SubmitButton>
		</form>
	);
};
