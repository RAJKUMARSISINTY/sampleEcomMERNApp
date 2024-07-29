import React from "react";

function Cards({ item }) {
  console.log("console hello", item.name);
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline">&#x20A8; {item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 hover:text-white">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
