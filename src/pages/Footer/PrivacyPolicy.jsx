import React from 'react';
import { Helmet } from 'react-helmet';
import { PiNewspaperClipping } from "react-icons/pi";
import { NavLink } from 'react-router';

const PrivacyPolicy = () => {
    return (
        <div className='my-10 mb-25 w-11/12 mx-auto'>
            <Helmet>
                <title>
                    DailyPress || Privacy Policy
                </title>
            </Helmet>
            <h2 className='text-center mb-5 md:text-3xl sm:text-2xl text-xl poppins font-black'>
                Privacy Policy
            </h2>
            <hr/>
            <p className='text-center mt-5 inter'>
                At <span className='font-bold text-blue-600'>DailyPress 📰</span>, we respect your privacy and are committed to protecting your personal data.
            </p>

            <ol className='my-12 space-y-3 list-decimal list-inside'>
                
                <li>
                    <span className='font-bold poppins'>Information We Collect :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>Account Info – Name, email, and password.</li>
                        <li className='inter'>Subscription Data – Billing details for premium content.</li>
                        <li className='inter'>Article Data – Content submitted by users.</li>
                        <li className='inter'>Usage Data – Analytics to improve features and user experience.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>How We Use Your Information :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>To provide access to articles and subscription features.</li>
                        <li className='inter'>To manage user accounts and premium content access.</li>
                        <li className='inter'>To review and display submitted articles.</li>
                        <li className='inter'>To improve the website and user experience.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Data Protection :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>We use secure technologies to store and protect your data.</li>
                        <li className='inter'>We do not sell or rent your data to third parties.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Third-Party Services :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>We may use third-party tools for analytics, payments, or hosting (e.g., Firebase, AWS).</li>
                        <li className='inter'>These services have their own privacy policies.</li>
                    </ul>
                </li>

                <li>
                    <span className='font-bold poppins'>Your Rights :</span>
                    <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                        <li className='inter'>You can request access, correction, or deletion of your data at any time by contacting us.</li>
                        <li className='inter'>You may cancel your subscription at any time according to our Terms of Services.</li>
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

export default PrivacyPolicy;
