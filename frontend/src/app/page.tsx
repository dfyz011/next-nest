import React, { useEffect, useState } from "react";
import { get } from "@/api/instance";
import { UserForm } from "@/feature/user/UserCreateForm";
import { Accordion } from "@/components/Accordion";

interface User {
	id: number;
	name: string;
	subordinates: User[];
}

const UserNode = ({ user }: { user: User }) => (
	<li>
		{user.name}
		{user.subordinates && user.subordinates.length > 0 && (
			<ul>
				{user.subordinates.map((sub) => (
					<UserNode key={sub.id} user={sub} />
				))}
			</ul>
		)}
		<Accordion>
			<UserForm headId={user.id} />
		</Accordion>
	</li>
);

const fetchUsersWithHierarchy = async () => {
	try {
		const users = await get<User[]>("/users");
		return users;
	} catch (error) {
		console.error("Failed to fetch users", error);
		return [];
	}
};

const TreePage = async () => {
	const users = await fetchUsersWithHierarchy();

	return (
		<div>
			<h1>Organization Tree</h1>
			<ul>
				{users.map((user) => (
					<UserNode key={user.id} user={user} />
				))}
			</ul>
			<Accordion>
				<UserForm />
			</Accordion>
		</div>
	);
};

export default TreePage;
