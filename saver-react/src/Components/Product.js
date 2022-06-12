import React, {useEffect,useState} from "react";

function Product(props){

    //States  
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    // const [value, setValue] = useState('');

 useEffect( ()=>{
  async function fetchData(){
  const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
   setProducts(data);
   setLoading(false);
  }
  fetchData();
     },[])  
 
// const changeEvent = event =>{
//   setValue(event.target.value);
// }


function Buffer(){
  return(
    <img className="buffer-img" src="https://http.cat/102" alt="Processing"/>
  )
}

function Item(props){
  return(
  <div className="grid-container">
    {
    products.map((item, i) => {
       return(
        <div className="product" key={item.id}>
          <img src={item.image_link} alt={item.name}/>
          <div>
          <h3>{item.name}</h3>
          <a href={item.product_link}>Check Product</a>
          </div>
        </div>
          )
        }
      )
    }
    </div>
  )
}

function BufferProduct(){
  return(
    <div >
      {loading ? <Buffer /> : <Item product_link={products.product_link}/> }
      </div>
  )
}
   
    return(
        <div >
  
  

    <BufferProduct />
     
       {/* <ul>
        {products.map((item, i) => {
          return (
          <div>
        <h1>{item.name}</h1>
          <li key={i}>{item.name}</li>
          </div>
          )
        })}
      </ul> */}

   {/* {products && <h1>{products.name}</h1> } */}
   {/* <input
        type="text"
        id="message"
        name="message"
        onChange={changeEvent}
        value={value}
      />

      <h2>Message: {value}</h2> */}

        </div>
    );
}

export default Product