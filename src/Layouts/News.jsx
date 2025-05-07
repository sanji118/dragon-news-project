import { useParams, useLoaderData } from 'react-router-dom';
import NewsDetails from '../components/NewsDetails';

const News = () => {
  const { id } = useParams();
  const allNews = useLoaderData();

  const singleNews = allNews.find(news => news._id === id);

  if (!singleNews) {
    return <p>News not found</p>;
  }

  return (
    <NewsDetails news={singleNews} categoryId={singleNews.category_id} />
  );
};

export default News;

