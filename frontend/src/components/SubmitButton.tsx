"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ children }: { children: ReactNode }) => {
	const { pending } = useFormStatus();

	return (
		<button type="submit" disabled={pending}>
			{children}
		</button>
	);
};
