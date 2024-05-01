"use client";

import React from "react";
import { unAssignUser } from "./unassignUser";

type Props = {
	userId: number;
};

export const UserUnassignButton = ({ userId }: Props) => {
	return <button onClick={() => unAssignUser(userId)}>Unassign</button>;
};
