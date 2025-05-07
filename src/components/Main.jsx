import React from 'react';
import LeftNavbar from './LeftNavbar';
import AboutNavbar from './AboutNavbar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
  const location = useLocation();

  // News details route check korbo
  const isNewsDetailsPage = location.pathname.startsWith('/news/');

  return (
    <>
      <main className='grid md:grid-cols-12 gap-3 my-20'>
        {!isNewsDetailsPage && (
          <LeftNavbar onSelectCategory={(categoryId) => console.log('Selected:', categoryId)} />
        )}
        <section className={isNewsDetailsPage ? 'col-span-9' : 'col-span-6'}>
          <Outlet />
        </section>
        <aside className='col-span-3'>
          <AboutNavbar />
        </aside>
      </main>
    </>
  );
};

export default Main;
