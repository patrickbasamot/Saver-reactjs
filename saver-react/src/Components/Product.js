import React, {useEffect,useState} from "react";

function Product(props){

   
    const [products, setProducts] = useState([]);
 useEffect(()=>{
     FetchData();
 })   

 async function FetchData(){
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
   const response = await fetch(url);
   const data = await response.json();
    console.log(data)
    setProducts(data)
    }   
    return(
        <div>
        <h1>Product Component,{props.productName}</h1>
  


       <ul>
        {products.map((item, i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
        </div>
    );
}

export default Product