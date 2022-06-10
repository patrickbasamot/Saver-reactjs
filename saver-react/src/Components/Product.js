import React, {useEffect} from "react";

function Product(props){
    async function FetchData(){
        const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
       const response = await fetch(url);
       const data = await response.json();
        console.log(data)
        }   
 useEffect(()=>{
     FetchData();
 })   
    return(
        <div>
        <h1>Product Component,{props.productName}</h1>

        </div>
    );
}

export default Product