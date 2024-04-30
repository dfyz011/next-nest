import Link from "next/link";

export const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/">Organization Tree</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
