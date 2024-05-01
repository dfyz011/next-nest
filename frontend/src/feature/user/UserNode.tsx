import React, { ReactNode } from "react";
import { UserForm } from "@/feature/user/UserCreateForm";
import { Accordion } from "@/components/Accordion/Accordion";
import { User } from "./type";
import { UserDeleteButton } from "./UserDeleteButton/UserDeleteButton";
import { UserUnassignButton } from "./UserUnassignButton/UserUnassignButton";
import { ButtonedModal } from "@/components/ButtonedModal/ButtonedModal";

export const UserItem = ({
	user,
	children,
}: {
	user: User;
	children?: ReactNode;
}) => {
	return (
		<li>
			{user.name}
			{children}
		</li>
	);
};

export const UserNode = ({ user }: { user: User }) => (
	<UserItem user={user}>
		<UserDeleteButton userId={user.id} />
		{user.subordinates && user.subordinates.length > 0 && (
			<ul>
				{user.subordinates.map((sub) => (
					<UserItem key={sub.id} user={sub}>
						<UserUnassignButton userId={user.id} />
					</UserItem>
				))}
			</ul>
		)}
		<ButtonedModal text="Create">
			<p>Create subordinate for {user.name}</p>
			<UserForm headId={user.id} />
		</ButtonedModal>
	</UserItem>
);
