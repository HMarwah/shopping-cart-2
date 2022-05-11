import { CaretDownOutlined, DownCircleTwoTone, DownloadOutlined, DownSquareOutlined } from '@ant-design/icons';
import { Select} from 'antd-v3';
import React,{ useState } from 'react';
import BarChart from './barchart'
import Table from './Table';


const { Option } = Select;
function Drop(){
   const [tabPosition, setTabPosition] = useState({
     position:'top',
     isTable:false
   })
  const changeTabPosition = tabPosition => {
    setTabPosition( {
      position:'bottom',
      isTable:true
    } );
  };

  const changeBarChart=tabPosition=>{
    setTabPosition({
      position:'top',
      isTable:false
    })
  }


  return<>
  <div>
  <div style={{ marginBottom: 5 }}>
    
          <Select
            value={tabPosition.position}
            // onChange={changeTabPosition}
            // dropdownMatchSelectWidth={false}
            icon={<DownSquareOutlined />}
          //  Icon={<CaretDownOutlined />} 
          >
            <Option value="top" onClick={changeBarChart}>Barchart</Option>
            <Option value="bottom" onClick={changeTabPosition}>Table</Option>
           
          </Select>
          {tabPosition.isTable ? <Table /> : <BarChart />}
         
        </div>

  </div>
</>
}

export default Drop