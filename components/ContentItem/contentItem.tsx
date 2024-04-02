import Image from "next/image";
import { PortfolioItem } from "@/types/portfolioType";
import styles from "./contentItem.module.css";
import Link from "next/link";

interface ItemProps {
    portfolioItem: PortfolioItem;
}

export default function ContentItem({ portfolioItem }: ItemProps) {
    return (
        <>
            <div className={styles.item}>
                <h1>Проект: {portfolioItem.title}</h1>
                <Image 
                    src={portfolioItem.url} 
                    width={400} 
                    height={400} 
                    alt={portfolioItem.title} />
                <Link className={styles.link} href="/portfolio">Назад к списку работ</Link>
            </div>
        </>
    );
}