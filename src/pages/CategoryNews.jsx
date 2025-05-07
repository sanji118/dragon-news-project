import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import noContent from '../assets/no-content-found.webp'

const CategoryNews = () => {
    const data = useLoaderData();//puro news data ashbe
    const {id} = useParams();//url theke category id anbo


    //category id onujayi filter kore nibo
    const categoryNews = data.filter(news => news.category_id === id);
    //console.log(categoryNews)
    
  return (
    <div >
        <h2 className='font-bold text-xl text-[#403F3F] py-5'>Dragon News Home</h2>
        <div>
            {
                categoryNews.length === 0?(
                    <div className="flex flex-col items-center justify-center text-center mt-20">
                        <img src={noContent} alt="No Content Found" />
                        
                        <p className="text-gray-500 text-lg w-11/12">There is no news available for this category right now.</p>
                    </div>
                ):
                (categoryNews.map(news =>(
                    <NewsCard key={news._id} news={news}></NewsCard>
                )))
            }
        </div>
    </div>
  )}
export default CategoryNews;