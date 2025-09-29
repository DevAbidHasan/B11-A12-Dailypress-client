import React from 'react';
import FAQ from '../pages/ExtraPages/FAQ';
import Contact from '../pages/ExtraPages/Contact';
import Plan from '../components/Plan';

const HomeLayout = () => {
    return (
        <div>
            <h2>this is home</h2>
            <Plan></Plan>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default HomeLayout;