import React from 'react';
import { Helmet } from 'react-helmet';
import { PiNewspaperClipping } from "react-icons/pi";
import { NavLink } from 'react-router';

const DeveloperResources = () => {
    return (
        <div className='my-10 mb-25 w-11/12 mx-auto'>
            <Helmet>
                <title>
                    DailyPress || Developer Resources
                </title>
            </Helmet>
            <h2 className='text-center mb-5 md:text-3xl sm:text-2xl text-xl poppins font-black'>
                Developer Resources
            </h2> 
            <hr/>
            <p className='text-center mt-5 inter'>
                Welcome developers! 📰  
                If you want to integrate or build on top of 
                <span className='font-bold text-blue-600'> DailyPress</span>, 
                here are some resources:
            </p>

            <ol className='my-12 space-y-3 list-decimal list-inside'>

                <li>
                    <span className='font-bold poppins'>API Access (Upcoming) :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>Planned APIs for accessing articles, categories, and authors.</li>
                        <li className='inter'>Premium API endpoints for subscription-based content.</li>
                        <li className='inter'>Secure access via API keys and authentication tokens.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Open Source Contributions :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>Certain components of DailyPress (e.g., article editor, frontend templates) may be open-sourced.</li>
                        <li className='inter'>Developers can contribute via our GitHub repositories.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Documentation :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>Detailed guides on authentication, API endpoints, and integrations will be published soon.</li>
                        <li className='inter'>Sample apps and code snippets for integrating DailyPress data.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Support :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>For questions, email us at 
                            <span className='italic text-blue-600 hover:underline'> abidhasanplabon80@gmail.com</span>.
                        </li>
                        <li className='inter'>Community forums and FAQs will be added in future releases.</li>
                    </ul>
                </li>

            </ol>

            <div className="flex mt-10 justify-center items-center ">
                <NavLink to="/" className="btn btn-primary w-auto">
                    Go Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default DeveloperResources;
