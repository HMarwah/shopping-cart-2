import './App.css';
import 'antd-v3/dist/antd-v3.css';
import { useEffect, useState } from 'react';
import CartList from './component/content';
import { Layout,notification } from 'antd-v3';
import { list } from './component/data';
import AppHeader from './component/header';
import { BrowserRouter } from 'react-router-dom';



const { Header,Content } = Layout;


function App() {

const [cart, setCart] = useState({
    shoppingCart: []
  });

useEffect(() => {
  console.log(cart.shoppingCart);
}, [cart.shoppingCart])


  const updateField = (e) => {
    console.log(e);

    const cartProduct=cart.shoppingCart.findIndex((p,i)=>{
      return p.item.id === e.item.id
    })
  
    if(cartProduct >= 0){
      // cart.shoppingCart[cartProduct].item.quantity = cart.shoppingCart[cartProduct].item.quantity+1
      setCart({
        ...cart,
        shoppingCart: [...cart.shoppingCart],
      });
    }else{
      setCart({
        ...cart,
        shoppingCart: [...cart.shoppingCart,e],
      });
    }
    notification.destroy();
    notification.success({
      
      message:`${e.item.description}  has been added.`,
      className:'custom-class',
      placement:'topLeft',
      style:{
        duration:1,
        marginLeft:190,
        width:500,
        height:60,
        backgroundColor:'lightgreen',
        color:'white'
      },
    });

  };

return (
  <Layout className='mainLayout'>
    <Header >
      <AppHeader cart={cart} setCart={setCart}/>
    </Header>
    <Content>
       <CartList update={updateField} list={list} />
     </Content>
  </Layout>
  
   );
}

export default App;