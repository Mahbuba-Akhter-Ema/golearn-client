import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({ category }) => {
  
    return (
        <div>
            <p className="font-medium m-4 p-2 rounded  bg-rose-400 tracking-wide text-white transition-colors duration-200 hover:text-pink-900">
                <Link to={`/course-categories/${category.id}`}>{category.title}</Link>
            </p>
        </div>
    );
};

export default CourseCategory;