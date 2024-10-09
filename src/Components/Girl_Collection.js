import React from 'react'

const Gents = (props) => {
  const { img } = props;
  
  return (
      <div className='boyImgs'>
      <img src={img} alt="Gents Collection" />
      </div>
  );
};

function Girl_Collection() {
  return (
    <div>
    <h2>Gents Fashion</h2>
    <div className='flex'>
    <Gents img={"assets/Woman/1.jpg"} />
    <Gents img={"assets/Woman/2.jpg"} />
    <Gents img={"assets/Woman/3.jpg"} />
    <Gents img={"assets/Woman/4.jpg"} />
    <Gents img={"assets/Woman/5.jpg"} />
    <Gents img={"assets/Woman/6.jpg"} />
    </div>
</div>
  )
}

export default Girl_Collection