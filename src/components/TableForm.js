import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";

function TableForm({
  discription,
  setDiscription,
  quantity,
  price,
  amount,
  setQuantity,
  setPrice,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!discription || !quantity || !price) {
      alert("Please Fill In All Inputs");
    } else {
      const newItem = {
        id: uuidv4(),
        discription,
        quantity,
        price,
        amount,
      };
      setDiscription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setList([...list, newItem]);
      setIsEditing(false);
      console.log(total);
    }
  };

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };
    calculateAmount(amount);
  }, [discription, amount, price, quantity, setAmount]);

  //   calculate total amounts items in table

  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  //   Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDiscription(editingRow.discription);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };
  // delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="discription">Item Discription</label>
          <input
            type="text"
            name="discription"
            id="discription"
            placeholder="Item discription"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="Quantity"
              id="Quantity"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-8 py-1 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-5"
        >
          {isEditing ? "Edit Item" : "Add Item"}
        </button>
      </form>

      {/* table items */}
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
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <CiEdit className="text-green-700 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div>
        <h2 className="text-gray-800 text-4xl font-bold mb-5 flex justify-end items-end">
          Rs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

export default TableForm;
