import React from "react";

function MainDeatils({ name, address }) {
  return (
    <div>
      <section className="mt-5 flex flex-col items-end justify-end ">
        <h2 className="uppercase font-bold text-4xl mb-1">{name}</h2>
        <p>{address}</p>
      </section>
    </div>
  );
}

export default MainDeatils;
