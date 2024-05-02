import React, { ReactNode } from "react";
import { User } from "../type";
import { UserDeleteButton } from "../UserDeleteButton/UserDeleteButton";
import { UserUnassignButton } from "../UserUnassignButton/UserUnassignButton";
import { ButtonedModal } from "@/components/ButtonedModal/ButtonedModal";
import { ButtonedContextMenu } from "@/components/ContextMenu/ButtonedContextMenu";
import { ModaledUserCreateForm } from "../UserCreateForm/ModaledUserCreateForm";
import { ModaledUserAssignForm } from "../UserAssignForm/ModaledUserAssignForm";

export const UserItem = ({
	user,
	children,
}: {
	user: User;
	children?: ReactNode;
}) => {
	return (
		<li>
			<div style={{ display: "flex", gap: "16px" }}>
				{user.name}
				<ButtonedContextMenu>
					<UserDeleteButton userId={user.id} />
					<ButtonedModal text="Create">
						<ModaledUserCreateForm
							title={`Create subordinate for ${user.name}`}
							headId={user.id}
						/>
					</ButtonedModal>
					<ButtonedModal text="Assign">
						<ModaledUserAssignForm
							title={`Assign subordinate for ${user.name}`}
							headId={user.id}
						/>
					</ButtonedModal>
					{user.head && <UserUnassignButton userId={user.id} />}
				</ButtonedContextMenu>
			</div>
			{children}
		</li>
	);
};

export const UserNode = ({ user }: { user: User }) => (
	<UserItem user={user}>
		{user.subordinates && user.subordinates.length > 0 && (
			<ul>
				{user.subordinates.map((sub) => (
					<UserNode key={sub.id} user={sub} />
				))}
			</ul>
		)}
	</UserItem>
);
