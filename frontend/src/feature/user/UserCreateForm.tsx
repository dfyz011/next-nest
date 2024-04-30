import { useState, FormEvent } from "react";

interface User {
	id?: number;
	name: string;
}

interface UserFormProps {
	user?: User;
	onSubmit: (user: User) => void;
}

export const UserForm = ({ user, onSubmit }: UserFormProps) => {
	const [name, setName] = useState(user ? user.name : "");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit({ ...user, name });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
};
