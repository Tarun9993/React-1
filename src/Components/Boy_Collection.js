import React from 'react';

const Gents = (props) => {
    const { img } = props;
    
    return (
        <div className='boyImgs'>
        <img src={img} alt="Gents Collection" />
        </div>
    );
};

function Boy_Collection() {
  return (
    <div>
        <h2>Gents Fashion</h2>
        <div className='flex'>
        <Gents img={"assets/Men/1.jpg"} />
        <Gents img={"assets/Men/2.jpg"} />
        <Gents img={"assets/Men/3.jpg"} />
        <Gents img={"assets/Men/4.jpg"} />
        <Gents img={"assets/Men/5.jpg"} />
        <Gents img={"assets/Men/6.jpg"} />
        </div>
    </div>
  );
}

export default Boy_Collection;
