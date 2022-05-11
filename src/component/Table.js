import { Table } from 'antd-v3';

const columns = [
  
  {
    title: <b >{'product details'}</b>,
    dataIndex: 'product',
    key: 'product',
    render: text => < em style={{color:'black'}}>{text}</em>,
  },

  {
    title:<b>{'price'}</b> ,
    dataIndex: 'price',
    key: 'price',
    render: text => <em style={{color:'black'}}>{text}</em>,

  },
  ,
 
];

const data = [
  {
    key: '1',
    product: 'Duffel-Bag',
    price: 100,
  
  },
  {
    key: '2',
    product: 'Travel-Multi-Pouch',
    price: 200,
  
  },
  {
    key: '3',
    product: 'Travel-Flower-Bag',
    price: 300,

  },
  {
    key: '4',
    product: 'Ethnic-Shoulder-Bag',
    price: 400,

  },
  {
    key: '5',
    product: 'Dinner-Plates',
    price: 500,

  },
  {
    key: '6',
    product: 'Dinner-Fruit',
    price: 600,

  },{
    key: '7',
    product: 'Dinner-Flower',
    price: 700,

  },{
    key: '8',
    product: 'Dinner-Angel',
    price: 800,

  },
];

export default () => <Table columns={columns} dataSource={data} bordered style={{marginTop:'50px'}}/>;