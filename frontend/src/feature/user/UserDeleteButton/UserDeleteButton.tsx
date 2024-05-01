"use client";

import React from "react";
import { deleteUser } from "./deleteUser";

type Props = {
	userId: number;
};

export const UserDeleteButton = ({ userId }: Props) => {
	return <button onClick={() => deleteUser(userId)}>Delete</button>;
};
