import axios from 'axios'
import React, { useState } from 'react'

const AddForm = ({ data,setData }) => {

    const [newData,setNewData]=useState({
        name:"",
        unitPrice:""
    })


    const handleAdd=(e)=>{
        e.preventDefault()
        axios.post("https://northwind.vercel.app/api/products",newData).then(res=>{
            setData([...data,res.data])
            setNewData({
                name:"",
                unitPrice:"" 
            })
        })

    }
    return (
        <form  onSubmit={handleAdd} >
            <input type="text" placeholder='Name..' value={newData.name} onChange={(e)=>setNewData({...newData,name:e.target.value})} />
            <input type="text" placeholder='Price..' value={newData.unitPrice} onChange={(e)=>setNewData({...newData,unitPrice:e.target.value})} />
            <button type='submit'>Add</button>

        </form>
    )
}

export default AddForm