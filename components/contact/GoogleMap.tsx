
import React from 'react';
import ProgressBar from '../progress/progress'

const GoogleMap = () => {
    return (
        <>
            <section className="map-area ">
            <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="w-50">
        <h1 className="text-center text-success fw-bold mb-4">
          En cours
        </h1>
        <ProgressBar targetProgress={70} />
      </div>
    </div>
           
            </section>
        </>
    );
};

export default GoogleMap;