import { PortfolioItem, ItemsByGroup } from "@/types/portfolioType";

const category = ['Корпоративные сайты', 'CRM-системы', 'Прочие проекты'];

export default function prepareData(arr: PortfolioItem[]) {
    const result: ItemsByGroup = [];

    /* result.push(['Корпоративные сайты', [{
        albumId: 1,
        id: 1,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952"
    }]]);
    result.push(['CRM-системы', []]);
    result.push(['Прочие проекты', []]); */

    category.forEach(element => {
        result.push([element, []])
    })

    let k = 0;
    result.forEach((element) => {
        //console.log(element[1]);
        for (let j = 1; j <= 3; j++) {
            if (arr[k]) {
                element[1].push(arr[k]);
                k++;
            }
        }
    });

    console.log(result);
    return result;
};