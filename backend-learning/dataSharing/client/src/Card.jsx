import React from "react";

const Card = ({ data }) => {
  return (
    <div className="mx-5  p-5 mt-5 bg-rose-400 rounded-lg shadow-x">
      <h5 className="mb-2 text-2xl font-bold  text-gray-900">{data.title}</h5>
      <p className="font-normal text-white">
        {data.subtitle}
      </p>
    </div>
  );
};

export default Card;
