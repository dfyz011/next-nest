import React from "react";
import { get } from "@/api/instance";
import { UserCreateForm } from "@/feature/user/UserCreateForm";
import { UserNode } from "@/feature/user/UserNode/UserNode";
import styles from "@/feature/user/UserNode/styles.module.css";
import { User } from "@/feature/user/type";
import { ButtonedModal } from "@/components/ButtonedModal/ButtonedModal";

const fetchUsersWithHierarchy = async () => {
	try {
		const users = await get<User[]>("/users/tree");
		return users;
	} catch (error) {
		console.error("Failed to fetch users", error);
		return [];
	}
};

const TreePage = async () => {
	const users = await fetchUsersWithHierarchy();

	return (
		<div style={{ padding: "20px" }}>
			<h1>Organization Tree</h1>
			<ul className={styles.tree}>
				{users.map((user) => (
					<UserNode key={user.id} user={user} />
				))}
			</ul>
			<ButtonedModal text="Create">
				<p>Create new user</p>
				<UserCreateForm />
			</ButtonedModal>
		</div>
	);
};

export default TreePage;
