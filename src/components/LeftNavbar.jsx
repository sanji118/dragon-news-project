import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategoryId, setActiveCategoryId] = useState(null);//Active category id set , default hisebe null hobe;
    useEffect(()=>{
        fetch('/demo-data/categories.json')
        .then(res => res.json())
        .then (data =>{
            setCategories(data)
        })
        .catch(error => {
            const errorMessage = error.message;
            //console.log(error))
        });
        
    }, []);


    const handleCategoryClick = id =>{
        setActiveCategoryId(id);//shudhu matro ei id r category active hobe;
    }
  return (
    <div className='col-span-3 '>
        <h2 className='font-bold text-xl text-[#403F3F] py-5'>All Categories</h2>
        <ul className="space-y-2 flex flex-col gap-7">
            {
                categories.map (category => (
                    <NavLink to={`/category/${category.id}`} key={category.id} 
                    onClick={()=> handleCategoryClick(category.id)}
                    className="btn  border-none bg-white text-gray-500 shadow-none hover:text-gray-600 text-lg ">{category.name}</NavLink>
                ))
                  
            }
        </ul>
    </div>
  )
}

export default LeftNavbar