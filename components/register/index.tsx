
import React from 'react';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import RegisterArea from './RegisterArea';

const Register = () => {
    return (
        <>            <main>
                <Breadcrumb top_title="Register" title="Register" />
                <RegisterArea />
            </main>
        </>
    );
};

export default Register;