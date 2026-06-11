
import React from 'react';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import FAQArea from '../affiliate/FAQArea';
import FaqContactForm from './FaqContactForm';
import BrandHomeOne from '../homes/home/BrandHomeOne';
import FooterOne from '../layout/footers/FooterOne';

const FAQ = () => {
    return (
        <>            <main>
                <Breadcrumb top_title='FAQ Page' title='FAQ' />
                <FAQArea style={true} />
                <FaqContactForm />
                <BrandHomeOne style={true} />
            </main>
            <FooterOne />
        </>
    );
};

export default FAQ;