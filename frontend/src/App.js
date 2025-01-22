
import './App.css';
import Nav from './component/navbar';
import Lawyers from './component/lawyers-com';
import Payment from './component/payment';
import Appointment from './component/appointment';
import { BrowserRouter} from 'react-router-dom';
import {Routes,Route} from "react-router-dom";
import History from './component/appointment-history';
import { useDispatch } from 'react-redux';
function App() {
  
  return (
   <>
   <BrowserRouter> 
   <Nav></Nav>
  
   {/* <Home></Home> */}
   <Routes>
    <Route path="/" element={ <Lawyers></Lawyers>}></Route>
    <Route path="/book_appointment" element={ <Appointment></Appointment>}></Route>
    <Route path='/payment' element={<Payment></Payment>}></Route>
    <Route path="/appointment_history" element={<History></History>}></Route>
    </Routes>
   </BrowserRouter> 
   </>
  );
}

export default App;
