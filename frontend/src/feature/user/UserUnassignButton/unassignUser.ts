"use server";

import { del } from "@/api/instance";
import { User } from "../type";
import { revalidatePath } from "next/cache";

export const unAssignUser = async (userId: number) => {
	try {
		await del<User>(`/users/${userId}/unassign`);
		revalidatePath("/");
	} catch (error) {
		console.error("Failed to fetch users", error);
		return [];
	}
};
