import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaStar, FaPaypal, FaPlayCircle, FaFileDownload } from 'react-icons/fa';

const CourseDetails = () => {
    const cardDetails = useLoaderData();
    const ref = React.createRef();

    return (
        <div className='flex justify-center items-center mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="inline-flex items-center m-2  justify-center h-10 px-7 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400  hover:bg-rose-700 focus:shadow-outline focus:outline-none"><FaFileDownload className='m-2'></FaFileDownload>Download PDF</button>}
                    </Pdf>

                </div>
                <figure className="px-10 pt-10">
                    <img src={cardDetails.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className='flex justify-between p-5'>
                    <div className='flex justify-between'>
                        <FaStar className='mt-1 m-2'></FaStar>
                        <span>{cardDetails.ratings}</span>
                    </div>
                    <div className='flex justify-between'>
                        <FaPaypal className='mt-1 m-2'></FaPaypal>
                        <span>{cardDetails.price}</span>
                    </div>
                    <div className='flex justify-between'>
                        <FaPlayCircle className='mt-1 m-2'></FaPlayCircle>
                        <span>{cardDetails.videos}</span>
                    </div>
                </div>
                <div ref={ref}  className="card-body items-center text-center">
                    <h2 className="card-title">{cardDetails.title}</h2>
                    <p>{cardDetails.details}</p>
                    <div className="card-actions justify-center">
                        <button className="inline-flex items-center m-2  justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400  hover:bg-rose-700 focus:shadow-outline focus:outline-none"><Link to={`/premiumpage/${cardDetails.id}`}>Get Premium Access</Link></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;