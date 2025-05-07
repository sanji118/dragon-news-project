import { FaRegEye, FaStar, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  // Create preview text using slice (first 150 characters)
  const previewText = news.details.slice(0, 150) + (news.details.length > 150 ? '...' : '');

  // Calculate rating for stars
  const rating = news.rating.number;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="card border border-[#E7E7E7] shadow-sm rounded-lg overflow-hidden mb-5">
      {/* Top section with author, date, and action icons */}
      <div className="flex bg-gray-200 items-center justify-between p-4">
        {/* Author info */}
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={news.author.img} alt={news.author.name} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{news.author.name}</span>
            <span className="text-sm text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>

        {/* Right side with action icons */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2 ml-2">
            {/* Bookmark icon */}
            <button className="text-gray-500 hover:text-primary transition-colors">
              <FaRegBookmark className="w-4 h-4" />
            </button>

            {/* Share icon */}
            <button className="text-gray-500 hover:text-primary transition-colors">
              <FaShareAlt className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Rest of the card content */}
      <div className="p-4">
        <h2 className="card-title text-xl font-bold mb-2">{news.title}</h2>

        {/* Tags and source */}
        <div className="mb-4">
          {news.others_info.is_trending && (
            <span className="badge badge-primary">Trending</span>
          )}
        </div>

        {/* Image */}
        <figure className="mb-4">
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-auto rounded-lg"
          />
        </figure>

        {/* Preview text */}
        <div className="mb-4 text-gray-700">
            <p>
                {previewText}{' '}
                <Link
                to={`/news/${news._id}`}
                className=" hover:underline font-medium"
                >
                Read More
                </Link>
            </p>
        </div>


        {/* Footer with metadata */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {/* Full stars */}
              {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className="text-yellow-400 w-4 h-4" />
              ))}

              {/* Half star */}
              {hasHalfStar && (
                <div className="relative w-4 h-4">
                  <FaStar className="text-gray-300 absolute top-0 left-0 w-4 h-4" />
                  <div className="absolute top-0 left-0 w-2 h-4 overflow-hidden">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Empty stars */}
              {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                <FaStar key={`empty-${i}`} className="text-gray-300 w-4 h-4" />
              ))}
            </div>

            <span className="text-sm font-medium">
              {rating.toFixed(1)} ({news.rating.badge})
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaRegEye className="w-4 h-4" />
            <span>{news.total_view} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
