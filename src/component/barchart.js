import React,{useState} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Button } from 'antd-v3';


const options = {
  chart: {
    type: 'column',
    
  },
  title:{
    text:'product visualization',
    align:'top',
    x:120,
    y:4,
  },
  xAxis: {
    type: 'category',
    text:'product'
  },
  plotOptions: {
    column: {
        pointPadding:  -0.9,
        borderWidth: 0,
    
    }
  },
  legend:{
    layout:'horizontal',
     verticalAlign: 'above',
     align:'top',
     x:20,
     y:14,
     squareSymbol:true,
     symbolRadius:1,
     symbolWidth:4
  },  
  series: [{
    name: 'Duffle-Bag',
    color: 'red',
    data: [{name: 'Duffle-Bag', y: 100}]
  }, {
    name: 'Travel-pouch',
    color: 'blue',
    data: [{name: 'Travel-pouch', y: 200}]
  }, {
    name: 'Duffle-plates',
    color: 'orange', 
    data: [{name: 'Duffle-plates', y: 300}]
  }, {
    name: 'Duffle-bag',
    color: 'green', 
    data: [{name: 'Duffle-bag', y: 400}]
  },
 ]
}

function BarChart() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    return <div>
        <HighchartsReact highcharts={Highcharts} options={options} button={Button}/>
    
    </div>
}

export default BarChart