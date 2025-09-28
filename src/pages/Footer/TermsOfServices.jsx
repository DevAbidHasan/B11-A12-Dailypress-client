import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router';
import { PiNewspaperClipping } from "react-icons/pi";

const TermsOfServices = () => {
    return (
        <div className='my-10 mb-25 w-11/12 mx-auto'>
            <Helmet>
                <title>
                    DailyPress || Terms of Services
                </title>
            </Helmet>
            <h2 className='text-center mb-5 md:text-3xl sm:text-2xl text-xl poppins font-black'>
                Terms of Services
            </h2> 
            <hr/>
            <p className='text-center mt-5 inter'>
                <span className='text-2xl font-bold text-blue-600'>W</span>elcome to 
                <span className='font-bold text-blue-600'> DailyPress 📰 </span>! 
                By accessing or using our platform, you agree to the following terms. Please read them carefully.
            </p>

            <ol className='my-12 space-y-3 list-decimal list-inside'>

                <li>
                    <span className='font-bold poppins'>Use of Service :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>DailyPress provides users with access to news articles and related content.</li>
                        <li className='inter'>You agree not to misuse the platform for unlawful, misleading, or harmful purposes.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Accounts :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>Certain features (such as submitting articles or accessing premium content) may require an account.</li>
                        <li className='inter'>You are responsible for keeping your login credentials secure.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Content :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>You retain ownership of articles or materials you submit to DailyPress.</li>
                        <li className='inter'>By submitting content, you grant DailyPress permission to store, display, and distribute it for providing our services.</li>
                        <li className='inter'>You must ensure that submitted content does not violate copyright, laws, or third-party rights.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Subscriptions & Payments :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>Some features or articles may be available only through paid subscriptions.</li>
                        <li className='inter'>Payments are non-refundable unless otherwise required by applicable law.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Limitations :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>DailyPress is provided “as is.” We do not guarantee that news, recommendations, or services will always be accurate or uninterrupted.</li>
                        <li className='inter'>We are not responsible for decisions made based on the content provided.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Termination :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>We may suspend or terminate accounts that violate these terms or applicable laws.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Changes :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>We may update these terms from time to time. Continued use of DailyPress means you accept the updated terms.</li>
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

export default TermsOfServices;
