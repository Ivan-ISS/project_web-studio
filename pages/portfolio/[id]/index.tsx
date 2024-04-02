import { PortfolioItem } from "@/types/portfolioType";
import axios from "axios";
import Layout from "@/components/Layout/layout";
import ContentItem from '@/components/ContentItem/contentItem';

interface ItemProps {
    portfolioItem: PortfolioItem;
}

export async function getServerSideProps({ params }: any) {
    const url = `https://jsonplaceholder.typicode.com/photos/${params.id}`
    const { data } = await axios.get<PortfolioItem[]>(url);
  
    return {
        props: { portfolioItem: data }
    }
}

export default function Item({ portfolioItem }: ItemProps) {
  return (
      <Layout>
          <ContentItem portfolioItem={portfolioItem}/>
      </Layout>
  )
}