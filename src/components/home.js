import React from 'react';

const Home = () => {
  return (
    <div>
      <span>Home component</span>
      <button
        onClick={() => {
          console.log('Hello World');
        }}
      >
        Text me
      </button>
    </div>
  );
};

export default Home;
