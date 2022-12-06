
import './App.css';

import { Home } from './component/Home';
import { Navbar, NavigationBar } from './component/NavigationBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './component/About';
import { AddUser } from './component/AddUser';
import { UpdateUser } from './component/UpdateUser';
import { View } from './component/View';


function App() {
  return (
    <div>

   <NavigationBar/>

   <Routes>
   <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/adduser/:id' element={<AddUser/>}></Route>
    <Route path='/view/:id' element={<View/>}></Route>
   
   </Routes>
    
  
  
    </div>
  );
}

export default App;
