import Dashboard from './dashboard'
import BarGraph from './BarGraph'
import SideBar from './SideBar';
import ComponentDemo from './ComponentDemo';


function App() {
  
  return (<>
  <div>
    <ComponentDemo/>
  </div>
  <div style={{display:'flex',flexDirection:'row'}}>
  <div style={{width:'20%'}}>
    {/* <label>SideBar</label> */}
    <SideBar/>
  </div>
  <div style={{width:'80%',alignContent:'center'}}>
  <Dashboard/>
  </div>
  </div>
  </>)
   }

export default App;
