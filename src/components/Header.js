import React from "react";

function Header({ handlePrint }) {
  return (
    <div>
      <section className="flex flex-col items-center justify-center xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3 ">
            Invoicer
          </h1>
        </div>
        {/* <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button
                onClick={handlePrint}
                className="bg-gray-500 px-8 py-1 rounded shadow border-2 border-gray-500 text-white font-bold hover:bg-transparent hover:text-gray-500 transition-all duration-300"
              >
                Print
              </button>
            </li>
            <li className="bg-blue-500 mx-2 py-1 px-8 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Download
            </li>
            <li className="bg-green-500 px-8 py-1 rounded shadow border-2 border-green-500 text-white font-bold hover:bg-transparent hover:text-green-500 transition-all duration-300">
              Send
            </li>
          </ul>
        </div> */}
      </section>
    </div>
  );
}

export default Header;
