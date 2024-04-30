import Link from "next/link";

interface User {
	id: number;
	name: string;
}

interface UserListProps {
	users: User[];
}

const UserList = ({ users }: UserListProps) => {
	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					{user.name} -{" "}
					<Link href={`/users/${user.id}`}>
						<a>View Details</a>
					</Link>
				</li>
			))}
		</ul>
	);
};
