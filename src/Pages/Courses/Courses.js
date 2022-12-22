import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';
import { FaStar, FaEye, FaPlayCircle } from 'react-icons/fa';

const Courses = () => {
    const [categories, setCagories] = useState([]);

    useEffect(() => {
        fetch('https://go-learn-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCagories(data));
    }, []);

    return (
        <div className="container mx-auto lg:grid sm:justify-center lg:grid-cols-3">
            <div className="row-span-3">
                {
                    categories.map(category => <CourseCategory
                        key={category.id}
                        category={category}
                    > </CourseCategory>)
                }

            </div>
            <div className="col-span-2 grid lg:grid-cols-3 gap-8 mb-10">
                {
                    categories.map(category =>
                        <div key={category.id} className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-5 card card-compact  bg-base-200 shadow-xl">
                            <figure><img className='w-full h-full' src={category.image} alt="Shoes" /></figure>
                            <div className='flex justify-between'>
                                <div className='flex justify-between'>
                                    <FaStar className='mt-1 m-2'></FaStar>
                                    <span>{category.ratings}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <FaEye className='mt-1 m-2'></FaEye>
                                    <span>{category.views}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <FaPlayCircle className='mt-1 m-2'></FaPlayCircle>
                                    <span>{category.videos}</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{category.title}</h2>
                                <div>
                                    {
                                        category.details.length > 30 ?
                                            <p>{category.details.slice(0, 30) + '...'} <Link className='bg-rose-400 text-white rounded px-2 m-1 hover:bg-rose-700 focus:shadow-outline focus:outline-none' to={`/course-categories/${category.id}`}>Read More</Link></p>
                                            : <p>{category.details}</p>
                                    }
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>

    );
};

export default Courses;