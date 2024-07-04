import React, {useState, useEffect} from 'react';
import {Button} from 'antd';
import BarGraph from './BarGraph';
import { generate_List } from './generate_List';

const Dashboard = () => {

    const url = 'http://localhost:8000/'

    const [dashBoardData, setDashBoardData] = useState({
        'industry': "AI Industry"
    })

    const fetchAllDashboardData = async () => {
        try {
            const allData = await fetch(url+'dashboard/data')
            const response=await allData.json()
            console.log(response,"hii");
            setDashBoardData(response)
        }
        catch(e){
            console.log("Error during fetching data. Please try again.")
        }
    }
    useEffect(()=>{

         fetchAllDashboardData()
     },[])
     console.log(dashBoardData,"dashboarddata");
  
    const x_variables=['end_year','country','topic','region'];
    const y_variables=['intensity','likelihood','relevance']; 
        
    return (
        <div style={{ width: '50%'}}>
          {/* <Button>{dashBoardData['industry']}</Button> */}
          {x_variables.map((x_item) => (
            y_variables.map((y_item) => {
              const [data,labels]= generate_List(dashBoardData, x_item, y_item); // Destructuring assignment should be enclosed in parentheses
              return (
                <div key={`${x_item}-${y_item}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                  <BarGraph data={data} labels={labels} x_axis_label={x_item} y_axis_label={y_item} />
                </div>
              );
            })
          ))}
        </div>
      );      
}

export default Dashboard;