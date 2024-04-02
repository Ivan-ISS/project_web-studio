import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./contentPortfolio.module.css";
import { ItemsByGroup, PortfolioItem } from "@/types/portfolioType"
import { PHOTOS_API_URL } from "@/data";
import prepareData from "@/utils/prepareData";

export default function ContentPortfolio() {
    const [loading, setLoading] = useState(true);
    const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);
    const { push } = useRouter();

    const load = async () => {
        /* const { data } = await axios.get<PortfolioItem[]>('https://jsonplaceholder.typicode.com/photos');
        console.log(data);
        const prepared = prepareData(data.slice(0, 7)); */
        try {
            const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
            const prepared = prepareData(data.slice(0, 7));
            setItems(prepared);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
         
    useEffect(() => {
        load();
    }, []);

    if (loading) {
        return (
            <>
                ... loading ...
            </>
        )
    }

    return (
        <>
            <h1>Наши работы</h1>
 
 
            {itemsByGroup?.length ? (
            <div>
                {itemsByGroup.map((group, i) => (
                <div key={i} className={styles.groupWrapper}>
                    <h2>{group[0]}</h2>


                    <div className={styles.listGroup}>
                    {group[1].map(({ id, title, thumbnailUrl }) => (
                        <div
                        key={id}
                        className={styles.groupItem}
                        onClick={() => push(`/portfolio/${id}`)}
                        >
                        <Image src={thumbnailUrl} width={150} height={150} alt={title} />
                        <h3>{title}</h3>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            ) : <div>Ничего не найдено</div>}
        </>
    );
}