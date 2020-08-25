import React from 'react';

const MainButton = ({ name, reference, classbtn, history }) => (
  <div>
    <button className={classbtn} type="button" onClick={()=> history.push(reference)}>
        {name} </button>
  </div>
);
export default MainButton;
