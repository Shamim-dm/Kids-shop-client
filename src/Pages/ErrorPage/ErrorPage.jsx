import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16  text-purple-900 mt-12'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='rounded-lg'>
          <img className='rounded-full w-[60%] mx-auto' src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000' alt="" />
        </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-purple-600'>
            <span className='sr-only'>Error </span> 
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            You are at wrong place!!!
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-purple-500 text-white mb-4'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
    );
};

export default ErrorPage;