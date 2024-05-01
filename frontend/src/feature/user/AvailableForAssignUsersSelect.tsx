import { get } from "@/api/instance";
import { User } from "./type";
import { SelectHTMLAttributes } from "react";

type AvailableForAssignUsersSelectProps = SelectHTMLAttributes<unknown> & {
	headId: number;
};

const fetchUsersForAssign = async () => {
	try {
		const users = await get<User[]>("/users/for-assign");
		return users;
	} catch (error) {
		console.error("Failed to fetch users", error);
		return [];
	}
};

export const AvailableForAssignUsersSelect = async ({
	headId,
	...rest
}: AvailableForAssignUsersSelectProps) => {
	const users = await fetchUsersForAssign();
	return (
		<select {...rest}>
			{users.map(
				(user) =>
					user.id !== headId && (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					)
			)}
		</select>
	);
};
