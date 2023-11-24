import React from "react";

function Table({ list, total, setTotal }) {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100">
            <td className="font-bold">Discription</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, discription, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{discription}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div>
        <h2 className="text-gray-800 text-4xl font-bold mb-5 flex items-end justify-end">
          Rs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

export default Table;
