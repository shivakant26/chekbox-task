import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

const Home = () => {
  const { state, setState } = useContext(MyContext);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState("Hello from MyComponent!")}>
        Change Text
      </button>
    </div>
  );
};

export default Home;
