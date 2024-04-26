import React from "react";

const Card = ({ data }) => {
  return (
    <div className="mx-5">
      <h5 className="mb-2 text-2xl font-bold  text-gray-900">{data.title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {data.subtitle}
      </p>
    </div>
  );
};

export default Card;
