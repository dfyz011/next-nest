export interface User {
	id: number;
	name: string;
	head: User;
	subordinates: User[];
}
