import { post } from "@/api/instance";
import { SubmitButton } from "@/components/SubmitButton";
import { revalidatePath } from "next/cache";
import { FormEventHandler } from "react";

const createUser = async (headId: number | undefined, formData: FormData) => {
	"use server";
	try {
		const rawFormData = {
			...(headId && { headId }),
			name: formData.get("name"),
		};
		const user = await post<User>("/users", rawFormData);
		revalidatePath("/");
		return user;
	} catch (error) {
		console.error("Failed to fetch users", error);
		return [];
	}
};

interface User {
	id?: number;
	name: string;
}

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
