import React from "react";

function Notes({ notes }) {
  return (
    <div>
      <section className="mb-5 mt-10">
        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
    </div>
  );
}

export default Notes;
