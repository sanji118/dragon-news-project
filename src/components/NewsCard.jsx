import { FaRegEye, FaStar, FaRegBookmark, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const NewsCard = ({ news }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [bookmarked, setBookmarked] = useState(false);

  // Toast function
  const showToast = (message, type = 'info') => {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `alert alert-${type} shadow-lg mb-2 animate-fade-in`;
    toast.innerHTML = `
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Auto remove toast after 2.5s
    setTimeout(() => {
      toast.remove();
    }, 2500);
  };

  // Share handler
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + `/news/${news._id}`);
    showToast('Link copied to clipboard!', 'success');
  };

  // Bookmark handler
  const handleBookmark = () => {
    if (!user) {
      navigate('/auth/login');
      return;
    }
    const newState = !bookmarked;
    setBookmarked(newState);
    showToast(newState ? 'Bookmark added!' : 'Bookmark removed!', 'success');
  };

  const previewText = news.details.slice(0, 150) + (news.details.length > 150 ? '...' : '');

  // Rating calculation
  const rating = news.rating.number;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="card border border-[#E7E7E7] shadow-sm rounded-lg overflow-hidden mb-5">
      {/* Top section with author, date, and icons */}
      <div className="flex bg-gray-200 items-center justify-between p-4">
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

        {/* Action icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleBookmark}
            className="text-gray-500 hover:text-primary transition-colors"
            title={bookmarked ? 'Remove Bookmark' : 'Bookmark'}
          >
            {bookmarked ? (
              <FaBookmark className="w-5 h-5 text-purple-600" />
            ) : (
              <FaRegBookmark className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={handleShare}
            className="text-gray-500 hover:text-primary transition-colors"
            title="Share"
          >
            <FaShareAlt className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Content */}
      <div className="p-4">
        <h2 className="card-title text-xl font-bold mb-2">{news.title}</h2>

        {/* Tags */}
        <div className="mb-4">
          {news.others_info.is_trending && (
            <span className="badge badge-primary">Trending</span>
          )}
        </div>

        {/* Image */}
        <figure className="mb-4">
          <img src={news.image_url} alt={news.title} className="w-full h-auto rounded-lg" />
        </figure>

        {/* Preview */}
        <div className="mb-4 text-gray-700">
          <p>
            {previewText}{' '}
            <Link to={`/news/${news._id}`} className=" hover:underline font-medium">
              Read More
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className="text-yellow-400 w-4 h-4" />
              ))}
              {hasHalfStar && (
                <div className="relative w-4 h-4">
                  <FaStar className="text-gray-300 absolute top-0 left-0 w-4 h-4" />
                  <div className="absolute top-0 left-0 w-2 h-4 overflow-hidden">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                  </div>
                </div>
              )}
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


