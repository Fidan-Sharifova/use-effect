import React from 'react'

const Search = ({setSearch,data}) => {
    const handleSearch=(e)=>{
     
        if(e.target.value==""){
            setSearch([...data])
            
        }else{
            let Search=e.target.value.trim().toLowerCase() 
    
            let searched=data.filter(myData=>myData.name.trim().toLowerCase().includes(Search))
            setSearch([...searched])
        }

    }
  return (
   <div>
    <input type="text" placeholder='sEARCH..'  onChange={handleSearch}/>
   </div>
  )
}

export default Search