import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then(res =>
      setData(res.data)
    );
  }, []);

  const handleDelete = (id) => {
    let target=data.find(data=>data.id==id)
    let indexOfTarget=data.indexOf(target)
    data.splice(indexOfTarget,1)
    setData([...data])
  };

  return (
    <div className='table'>
      <table className='table_products'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((myDatas) => (
            <tr key={myDatas.id}>
              <td>{myDatas.id}</td>
              <td>{myDatas.name}</td>
              <td>{myDatas.unitPrice}</td>
              <td>
                <button className='delete_btn' onClick={() => handleDelete(myDatas.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
