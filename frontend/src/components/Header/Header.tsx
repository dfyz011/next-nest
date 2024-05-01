import Link from "next/link";
import styles from "./styles.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>
						<Link href="/" className={styles.nav__link}>
							Organization Tree
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
