import React, { useState } from 'react'
import { Button, Menu, Modal, notification } from 'antd-v3';
import Drawers from './drawer';
import BarChart from './barchart.js';
import Drop from './Drop';



function AppHeader(props) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



return (
    <div className='container-fluid'>
    <div className='header'>
    <div className="logo" />
    <Menu
      mode="horizontal"
      style={{marginRight:180}}
    >
      <Menu.Item><span key="1">Shop |</span></Menu.Item>
      {/* <Menu.Item><span key="2">|</span></Menu.Item> */}
      <Menu.Item><span key="3" id='ant-menu-item'><a onClick={showModal} style={{color:'gray'}}>Visualize</a></span></Menu.Item>
      
           <Drawers
                shoppingCart={props.cart.shoppingCart}
                myCart={props.setCart}
            />
    </Menu>
    <Modal  style={{height:'220px'}}title="Available products in Inventory"visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
    {/* <BarChart /> */}
    <Drop />
    <Button size="small" className='ant-btn atn-btn-secondary' onClick={handleOk} style={{float:'right',width:'100px',marginTop:'-5px',backgroundColor:'lightgray'}}>Ok</Button>
    </Modal>
    </div>
    </div>
  )
}


export default AppHeader