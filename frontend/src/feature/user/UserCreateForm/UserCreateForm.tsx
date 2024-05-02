import { SubmitButton } from "@/components/SubmitButton";
import { FormEventHandler } from "react";
import { createUser } from "./actions";
import styles from "./styles.module.css";

interface UserFormProps {
	headId?: number;
	onSubmit?: FormEventHandler;
}

export const UserCreateForm = ({ headId, onSubmit }: UserFormProps) => {
	const createUserWithHead = createUser.bind(null, headId);

	return (
		<form
			className={styles.formContainer}
			action={createUserWithHead}
			onSubmit={onSubmit}
		>
			<label className={styles.label}>
				Name:
				<input type="text" required name="name" />
			</label>
			<SubmitButton>Create</SubmitButton>
		</form>
	);
};
