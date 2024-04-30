import Link from "next/link";

export const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/users">Users</Link>
					</li>
					<li>
						<Link href="/tree">Organization Tree</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
