import React from 'react';
import ProgressBar from '../progress/progress';

const GoogleMap = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa'
  };

  const innerContainerStyle: React.CSSProperties = {
    width: '50%'
  };

  const headingStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#28a745',
    fontWeight: 'bold',
    marginBottom: '1rem'
  };

  return (
    <section style={{ margin: '0', padding: '0' }}>
      <div style={containerStyle}>
        <div style={innerContainerStyle}>
          <h1 style={headingStyle}>En cours</h1>
          <ProgressBar targetProgress={70} />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
