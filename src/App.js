import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import ViewAllVistors from './components/ViewAllVistors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddVisitor/>} />
        <Route path='/viewall' element={<ViewAllVistors/>} />
      </Routes>
    </BrowserRouter>
    


  );
}

export default App;
