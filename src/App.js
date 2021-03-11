import React,{useState,useEffect} from 'react'
import {Products,Navbar} from "./components/";
import {commerce} from './lib/commerce'
const App= ()=> 
{
  const [products,setProducts]= useState([]);

  const fetchProduct = async () =>
  {
    const {data} =await commerce.products.list();
    setProducts(data);
  }

  useEffect(() => {
    fetchProduct();
  }, [])
  console.log(products);
  return (
    <div>
    <Navbar/>
   <Products/>
   </div>
  );
}

export default App;
