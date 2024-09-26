import React from 'react';
import A from './A';
import CharContext from './Charcontext';

const CharContainer = () => {
  return (
    <div>
      <CharContext.Provider value={{color : "blue", fontSize : "30px"}}>
        <A/>
      </CharContext.Provider>
    </div>
  );
};

export default CharContainer;