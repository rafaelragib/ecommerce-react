import React,{useState,useEffect} from 'react'
import {Products,Navbar,Cart} from "./components/";
import {commerce} from './lib/commerce'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const App= ()=> 
{
  const [products,setProducts]= useState([]);
  const [cart,setCart]=useState([]);

  const fetchProduct = async () =>
  {
    const {data} =await commerce.products.list();
    setProducts(data);
  }

  const fetchCart=async()=>
  {
    const data =await commerce.cart.retrieve();
    setCart(data);
  }

  const handleAddToCart = async(productId,quantity) =>
  {
    const {cart} =await commerce.cart.add(productId,quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async(productId,quantity) =>
  {
    const {cart} =await commerce.cart.update(productId,{quantity});
    setCart(cart);
  }

  const handleRemoveFromCart = async(productId) =>
  {
    const {cart} =await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async() =>
  {
    const {cart} =await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, [])

  console.log(cart);
  return (
    <div>
      <Router>
        <Navbar totalItems={cart.total_items}/>
        <Switch>
          <Route exact path="/ecommerce-react/">
            <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/ecommerce-react/cart">
            <Cart 
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </Router>
   
    
    
   </div>
  );
}

export default App;
