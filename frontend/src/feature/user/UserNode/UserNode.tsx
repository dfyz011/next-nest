import React, { ReactNode } from "react";
import { UserForm } from "@/feature/user/UserCreateForm";
import { User } from "../type";
import { UserDeleteButton } from "../UserDeleteButton/UserDeleteButton";
import { UserUnassignButton } from "../UserUnassignButton/UserUnassignButton";
import { ButtonedModal } from "@/components/ButtonedModal/ButtonedModal";
import { ButtonedContextMenu } from "@/components/ContextMenu/ButtonedContextMenu";
import styles from "./styles.module.css";

export const UserItem = ({
	user,
	actions,
	children,
}: {
	user: User;
	actions: ReactNode;
	children?: ReactNode;
}) => {
	return (
		<li>
			<div style={{ display: "flex", gap: "16px" }}>
				{user.name}
				{actions}
			</div>
			{children}
		</li>
	);
};

export const UserNode = ({ user }: { user: User }) => (
	<UserItem
		user={user}
		actions={
			<ButtonedContextMenu>
				<UserDeleteButton userId={user.id} />
				<ButtonedModal text="Create">
					<p>Create subordinate for {user.name}</p>
					<UserForm headId={user.id} />
				</ButtonedModal>
			</ButtonedContextMenu>
		}
	>
		{user.subordinates && user.subordinates.length > 0 && (
			<ul>
				{user.subordinates.map((sub) => (
					<UserItem
						key={sub.id}
						user={sub}
						actions={<UserUnassignButton userId={sub.id} />}
					></UserItem>
				))}
			</ul>
		)}
	</UserItem>
);
