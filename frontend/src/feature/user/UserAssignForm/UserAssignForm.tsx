"use client";

import { SubmitButton } from "@/components/SubmitButton";
import { AvailableForAssignUsersSelect } from "../AvailableForAssignUsersSelect";
import { FormEventHandler } from "react";
import { assignUsers } from "./actions";

interface UserFormProps {
	headId: number;
	onSubmit?: FormEventHandler;
}

export const UserAssignForm = ({ headId, onSubmit }: UserFormProps) => {
	const assignUsersToHead = assignUsers.bind(null, headId);

	return (
		<form action={assignUsersToHead} onSubmit={onSubmit}>
			<label>
				User:
				<AvailableForAssignUsersSelect
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
