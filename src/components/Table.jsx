import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddForm from './AddForm';
import Search from './Search';

function Table() {
  const [data, setData] = useState([]);
  const [search, setSearch]= useState([])

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then(res =>
  {
    setData(res.data)
    setSearch(res.data)
  }
    );
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`).then((res)=>{
      setData((prev)=>prev.filter(data=>data.id !== id))
    })


  };
  return (

<>
<Search data={data} search={search} setSearch={setSearch} />
<AddForm data={data}  setData={setData} />

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
          {search.map((myDatas) => (
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

</>
  );
}

export default Table;
