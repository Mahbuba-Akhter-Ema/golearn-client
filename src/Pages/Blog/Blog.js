import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                Node JS
                            </a>
                            <p className="text-gray-600">25 August 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    what is cors in node js?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                Firebase
                            </a>
                            <p className="text-gray-600">25 August 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                React Router
                            </a>
                            <p className="text-gray-600">25 August 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How does the private route work in react js?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                Node JS
                            </a>
                            <p className="text-gray-600">25 August 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is Node? How does Node work?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    Go To Home Page
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Blog;