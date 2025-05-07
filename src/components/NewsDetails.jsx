import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsDetails = ({ news, categoryId }) => {
  return (
    <>
    <h2 className='font-bold text-xl text-[#403F3F] py-5'>Dragon News Home</h2>
    <div className="card rounded-lg border border-[#E7E7E7] shadow-sm mb-6 p-5">
       
      <figure>
        <img src={news.image_url} alt={news.title} className="w-full h-auto rounded-t-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{news.title}</h2>
        <p className="text-gray-600">{news.details}</p>

        <div className="card-actions justify-start mt-4">
          <Link to={`/category/${categoryId}`} className="btn btn-sm bg-[#D72050] hover:bg-pink-700 text-white border-none">
             <FaLongArrowAltLeft></FaLongArrowAltLeft>All news in this category
          </Link>
        </div>
      </div>
    </div></>
  );
};

export default NewsDetails;
