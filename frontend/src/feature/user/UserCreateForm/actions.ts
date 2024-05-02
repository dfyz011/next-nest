"use server";

import { post } from "@/api/instance";
import { revalidatePath } from "next/cache";

type User = {
	id?: number;
	name: string;
};

export const createUser = async (
	headId: number | undefined,
	formData: FormData
) => {
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
