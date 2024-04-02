export interface PortfolioItem {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export type ItemsByGroup = [string, PortfolioItem[]][];