import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/body';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AddExpenditure from './pages/AddExpenditure';
import Routing from "./Routing";
import Expenditure from './pages/Expenditure';



function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Body />
      <AddExpenditure />
      <Expenditure />
      <Routing />
      </BrowserRouter>
    </div>

  
  )
};


export default App
