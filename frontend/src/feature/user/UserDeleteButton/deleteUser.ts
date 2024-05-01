"use server";

import { del } from "@/api/instance";
import { revalidatePath } from "next/cache";
import { User } from "../type";

export const deleteUser = async (userId: number) => {
	try {
		await del<User>(`/users/${userId}`);
		revalidatePath("/");
	} catch (error) {
		console.error("Failed to fetch users", error);
		return [];
	}
};
