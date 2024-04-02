import _Kz8nHVg_tGI from "../../public/team/annie-spratt-QckxruozjRg-unsplash.jpg";
import _g1Kr4Ozfoac from "../../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import _5fNmWej4tAA from "../../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg";
import styles from "./description.module.css"
import Image from "next/image"

export default function Description() {

    return (
        <>
            <h1>О компании</h1>
            <div>
                <p>
                Противоположная точка зрения подразумевает, что ключевые особенности структуры проекта, превозмогая сложившуюся непростую экономическую ситуацию, 
                ограничены исключительно образом мышления. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: 
                дальнейшее развитие различных форм деятельности обеспечивает актуальность стандартных подходов. Картельные сговоры не допускают ситуации, при которой 
                некоторые особенности внутренней политики, инициированные исключительно синтетически, объективно рассмотрены соответствующими инстанциями.
                </p>
            </div>

            <div className={styles.list}>
                <div className={styles.item}>
                <h3>Отдел маркетинга</h3>
                <div className={styles.content}>
                <Image
                    className={styles.image}
                    src={_Kz8nHVg_tGI}
                    alt="https://unsplash.com/photos/Kz8nHVg_tGI"
                />
                <div> 
                    Прежде всего, семантический разбор внешних противодействий говорит о возможностях направлений прогрессивного развития. Значимость этих проблем настолько 
                    очевидна, что курс на социально-ориентированный национальный проект является качественно новой ступенью глубокомысленных рассуждений. 
                </div>
                </div>
            </div>
            
            
            <div className={styles.item}>
                <h3>Инженеры-разработчики</h3>
                <div className={styles.content}>
                <Image
                    className={styles.image}
                    src={_g1Kr4Ozfoac}
                    alt="https://unsplash.com/photos/g1Kr4Ozfoac"
                />
                <div>
                    Лишь сделанные на базе интернет-аналитики выводы преданы социально-демократической анафеме. Значимость этих проблем настолько очевидна, что выбранный нами 
                    инновационный путь играет важную роль в формировании модели развития.
                </div>
                </div>
            </div>
            
            
            <div className={styles.item}>
                <h3>Отдел продаж</h3>
                <div className={styles.content}>
                <Image
                    className={styles.image}
                    src={_5fNmWej4tAA}
                    alt="https://unsplash.com/photos/5fNmWej4tAA"
                />
                <div>
                Следует отметить, что перспективное планирование напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт говорит нам, 
                что выбранный нами инновационный путь способствует повышению качества вывода текущих активов.
                </div>
                </div>
            </div>
            </div>
        </>
    );
}