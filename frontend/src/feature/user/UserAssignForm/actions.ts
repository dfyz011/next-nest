"use server";
import { revalidatePath } from "next/cache";
import { post } from "@/api/instance";

type User = {
	id?: number;
	name: string;
};

export const assignUsers = async (
	headId: number | undefined,
	formData: FormData
) => {
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
