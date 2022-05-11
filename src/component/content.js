import React, { useState, Fragment } from "react";
import { Button, Card, Row, Col,InputNumber } from "antd-v3";


const { Meta } = Card;

export default function CartList(props) {
  const [addToCart, setAddToCart] = useState({
    list: props.list
  });
    const [defaultZ, setdefaultZ] = useState(0)
  const zeroQ=(v,i)=>{
    addToCart.list[i].quantity=v
    setdefaultZ(defaultZ+1)
  }
  const[disable,setdisable]=useState(false)
  
  console.log(addToCart.list);
  return (
    <Fragment>
        <div className="container-fluid" >
        <Row gutter={30}>
          {addToCart.list.map((item,ind) => (
            <Col xs={20} sm={16} md={12} lg={8}  xl={5}  style={{marginLeft:'50px',height:'120px',width:'250px',display:'inline-block',marginBottom:'300px'}} key={item.id}>
              <Card
                hoverable
                actions={[
                <InputNumber size="small"  defaultValue={0} block style={{width:'49px',height:'32px',marginLeft:-40,border:'1px solid black',marginTop:'2px'}} 
                onChange={(e)=>{zeroQ(e,ind)}}/>,
              <>{ind===0||defaultZ===0?<Button size="big" block disabled="true" onClick={() => props.update({item:item})} className="btn-add" style={{height:'35px',color:'white',backgroundColor:'black',width:130,marginLeft:-50}}>
              Add/Update cart</Button>:<Button size="big" block onClick={() => props.update({item:item})} className="btn-add" style={{height:'35px',color:'white',backgroundColor:'black',width:130,marginLeft:-40}}>
                  Add/Update cart</Button>}</> ,
                ]}style={{ width: 200,marginTop:15,height:100,display:"inline-block",border:'none'}}
                
                cover={<img alt="example" src={item.filename} />}
                extra={ind===0 ?  <div  style={{backgroundColor:'black',height:'30px',width:'100px',marginLeft:'70px',color:'white',borderRadius:4,textAlign:'center',padding:'5px 5px',marginBottom:'30px'}} >Out of Stock</div> : ind%2===0 ?<div style={{backgroundColor:'green',height:'30px',width:'60px',marginLeft:'110px',color:'white',borderRadius:4,textAlign:'center'}}>New</div> :<div style={{backgroundColor:'orange',height:'30px',width:'60px',marginLeft:'110px',color:'white',borderRadius:4,textAlign:'center'}}>Hot</div>  }
              >
                <Meta title={item.title} description={<h3>${item.price} </h3>}  className='color' bodyStyle/>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
}