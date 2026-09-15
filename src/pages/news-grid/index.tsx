import NewsOne from "@/components/news/newsOne";
import PageHeader from "@/components/pageHeader";
import { newsDataFour } from "@/data/nwesData";

const NewsGrid = () => {
  return (
    <>
      <PageHeader currentPage="Blog Grid" title="Blog Grid" />
      <NewsOne
        data={newsDataFour}
        isTitleShow={false}
        cardClass="mt-0"
        rowClass="g-4"
      />
    </>
  );
};

export default NewsGrid;
