import { SubmitButton } from "@/components/SubmitButton";
import { FormEventHandler } from "react";
import { createUser } from "./actions";

interface UserFormProps {
	headId?: number;
	onSubmit?: FormEventHandler;
}

export const UserCreateForm = ({ headId, onSubmit }: UserFormProps) => {
	const createUserWithHead = createUser.bind(null, headId);

	return (
		<form action={createUserWithHead} onSubmit={onSubmit}>
			<label>
				Name:
				<input type="text" required name="name" />
			</label>
			<SubmitButton>Create</SubmitButton>
		</form>
	);
};
