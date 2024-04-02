import Link from 'next/link';
import styles from './navigation.module.css';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function Navigation() {
    const { pathname } = useRouter();

    return (
      <div className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.item }>
                <Link href="/" className={clsx(styles.link, { [styles.disabled]: pathname === "/" })}>
                    Главная
                </Link>
            </li>
            <li className={styles.item}>
                <Link href="/about" className={clsx(styles.link, { [styles.disabled]: pathname === "/about" })}>
                    О компании
                </Link>
            </li>
            <li className={styles.item}>
                <Link href="/portfolio" className={clsx(styles.link, { [styles.disabled]: pathname === "/portfolio" })}>
                    Портфолио
                </Link>
            </li>
            <li className={styles.item}>
                <Link href="/contacts" className={clsx(styles.link, { [styles.disabled]: pathname === "/contacts" })}>
                    Контакты
                </Link>
            </li>
        </ul>
      </div>
    );
}