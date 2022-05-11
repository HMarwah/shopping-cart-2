import React, { Fragment, useState, useEffect } from "react";
import {  Button, Row, Col, Badge,Popover, notification } from "antd-v3";
import { CloseOutlined, ShoppingOutlined } from "@ant-design/icons";




export default function Drawers(props) {
  const [addedList, setAddedList] = useState({
    shoppingCartList: props.shoppingCart,
    drawerVisible: false
  });
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    total();
  }, [addedList.shoppingCartList]);

  const total = () => {
    let totalVal = 0;
    console.log(addedList.shoppingCartList.length);
    for (let i = 0; i < addedList.shoppingCartList.length; i++) {
      totalVal += addedList.shoppingCartList[i].item.price * addedList.shoppingCartList[i].item.quantity;
  }
  console.log(totalVal);
  setTotalPrice(totalVal);
  };
  

  const handleRemove = (id,e) => {
    const arr = addedList.shoppingCartList.filter((item) => item.item.id !== id);
    // console.log(arr);
    // setAddedList({
    //    ...addedList,
    //    shoppingCartList:arr
    // });
    props.myCart({
      ...props.shoppingCart,
      shoppingCart:arr
    })
    notification.destroy();
    notification.warn({
      message:`${e.item.description}  has been removed.`,
    className:'custom-class',
   
    placement:'topLeft',
    duration:2,
    style:{
       duration:1,
        marginLeft:190,
       width:500,
       height:60,
       backgroundColor:'pink',
       },
     });
     
  };

  useEffect(() => {
    setAddedList({
      shoppingCartList: props.shoppingCart
    });
    console.log(addedList.shoppingCartList);
  }, [props.shoppingCart]);


  function update() {
    console.log("Get Update");
    setAddedList({
      ...addedList,
      drawerVisible: true
    });
  }


  console.log("shoppingCartList", addedList.shoppingCartList);

  
   const DescriptionItem=({ title, content, url,price ,quantity})=>(
    <> 
    <p
     style={{
       marginLeft: 8,
       color: "rgba(0,0,0,0.85)"
     }}
     className="cart-data"
   >

    {title} 

   </p>
   <h3>{quantity} x ${price}</h3>
   </>
   )
     

  const ImageItem = ({ title, content, url,price ,quantity}) => (
  
      <img src={url} alt="example" width="50" height="50" className="cart-data"/>
     
  );
  

  const content = (
  <>
   {addedList.drawerVisible ?<div>{addedList.shoppingCartList.map((item,index) => (
        <Row key={item.item.id} id="ant-row">
          <Col style={{marginLeft:15}} id="ant-col">
            <ImageItem
               url={item.item.filename}
            />
          </Col>
          <Col  style={{marginLeft:15}} id="ant-col">
            <DescriptionItem 
            title={<h4 style={{color:'blue'}}>{item.item.title}</h4>}
            price={item.item.price}
            quantity={item.item.quantity} />
          </Col >
          <Col   style={{marginLeft:15}} id="ant-col">{addedList.shoppingCartList.length === 0 ? 'empty' : (
      
            <CloseOutlined type="primary"
            style={{ margin: 5 }}
            onClick={() => handleRemove(item.item.id,item)} />
      )}</Col>
      </Row>
      ))}
      
      <div>
      <Row>
      <Col>
      <h3 >Subtotal:</h3>
      <h4 style={{textAlign:'right', marginTop:'-35px',color:'red'}}>{totalPrice}$</h4>
      </Col>
      <Col>
      <p></p>
      </Col>
      </Row></div>
      </div> :''}
      </>
  );
  
  return (
  <Fragment>
   <Badge
          showZero
          count={addedList.shoppingCartList.length}
          style={{
            backgroundColor: "blue",
            marginTop:'25px',
            color:'white'
          }}
        >
        <Popover content={content} title={addedList.shoppingCartList.length===0 ? 'No products in the cart' : ''} >
        <ShoppingOutlined onMouseOver={update} style={{ fontSize: '32px', color: 'black',marginLeft:'10px' }}  />
        </Popover>      
        </Badge>
  </Fragment>

  );
}