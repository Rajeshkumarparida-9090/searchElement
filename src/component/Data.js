import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DataContext from "./DataContext";

const Data = ()=>{
    const {setData, data} = useContext(DataContext)
    const [searchVal, setSearchVAl] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
                console.log("res===", res)
                setData(res?.data?.products)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const handelValue = (e) =>{
        setSearchVAl(e.target.value)
        console.log("searchVal", e.target.value) 
    }
 
    useEffect(() => {
        if (!searchVal.trim()) {
            setFilteredData(data);
            return;
        }
        const filtered = data.filter((element) =>
            element.title.toLowerCase().includes(searchVal.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchVal, data]);
        
    
    return(
        <>
        <input type="serch" onChange={(e)=>handelValue(e)} />
        {filteredData?.map((element, index)=>{
            return(
                <div key={index}>
                    <img src={element?.thumbnail} alt="IMG" />
                    <p>Title:-{element?.title}</p>
                    <p>Price:-{element?.price}</p>
                </div>
            )
            
                
            
        })}
        
        </>
    )
}
export default Data;
