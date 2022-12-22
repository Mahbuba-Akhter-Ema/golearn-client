import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const PremiumPage = () => {
    const premium = useLoaderData();
  
    const purchase = () => {
        toast.success('Thanks For Your Purchase.')
    }
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={premium.image} className="rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{premium.price}</h1>
          <p className="py-6">{premium.title}</p>
          <button onClick={purchase} className="inline-flex items-center m-2  justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400  hover:bg-rose-700 focus:shadow-outline focus:outline-none">Purchase</button>
        </div>
      </div>
    </div>
    );
};

export default PremiumPage;