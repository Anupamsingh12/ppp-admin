import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import MyModal from './Components/Modal/Modal';
import TableComponent from './Components/Table/Table';
import Login from './Components/Modal/Login';
import Details from './Components/Cards/Details';
import Home from './Layouts/Home';
import Footer from './Components/Footer/Footer';
import PageNotFound from '../src/Components/Errors/NotFound'
function App() {

return (
  <div className="App">
      <Router>
    < div style = {{position:'sticky',top:0,zIndex:1}}>
      <Header/>
    </div>
    <div className="content">
       <ToastContainer />
      <Routes>
        <Route path="/"  element={<Home/>} /> Home component
        <Route path="/lost"  element={<PageNotFound/>} /> {/* Home component */}
        <Route path="/login"  element={<Login/>} /> {/* Home component */}
        <Route path="/admin/list"  element={<TableComponent/>} /> {/* Home component */}
        <Route path="/post/:id" element={<Details/>} /> {/* About component */}
      </Routes>
    </div>
      </Router>
  </div>
  );
}

export default App;
