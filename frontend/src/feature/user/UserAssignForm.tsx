import { post } from "@/api/instance";
import { SubmitButton } from "@/components/SubmitButton";
import { revalidatePath } from "next/cache";
import { AvailableForAssignUsersSelect } from "./AvailableForAssignUsersSelect";

const assignUsers = async (headId: number | undefined, formData: FormData) => {
	"use server";
	try {
		const rawFormData = {
			userIds: formData.getAll("userIds"),
		};
		const users = await post<User>(`/users/${headId}/assign`, rawFormData);
		revalidatePath("/");
		return users;
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
	headId: number;
	afterSubmit?: (user: User) => void;
}

export const UserAssignForm = ({ headId, afterSubmit }: UserFormProps) => {
	const assignUsersToHead = assignUsers.bind(null, headId);

	return (
		<form action={assignUsersToHead}>
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
