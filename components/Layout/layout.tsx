import { PropsWithChildren } from "react";
import Head from "next/head";
import Link from 'next/link';
import Navigation from '@/components/Navigation/navigation'
import styles from "./layout.module.css";
import { useRouter } from "next/router";
import clsx from "clsx";


export default function Layout({ children }: PropsWithChildren) {
    const { pathname } = useRouter();

    return (
        <>
            <Head>
                <title>Web Studio</title>
                <meta name="description" content="SkillFactory Next.js project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <div className={styles.container}>
                <header className={styles.header}>
                    <Link href ="/" className={clsx(styles.logo, { [styles.disabled]: pathname === "/" })}>
                        <div>WEBSTUDIO</div>
                    </Link>
                    <div>
                        <Navigation />
                    </div>
                </header>
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>&copy; 2023 Web studio</footer>
            </div>
        </>
    );
}