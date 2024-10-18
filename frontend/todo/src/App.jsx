import React from 'react'
import Navbar from './components/Navbar'
import Home from '../src/pages/Home'
import Aboutus from './pages/Aboutus'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Todo from './pages/Todo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path={"/aboutus"} element={<Aboutus/>}/>
      <Route path={"/home"} element={<Home/>}/>
      <Route path={"/signin"} element={<Signin/>}/>
      <Route path={"/signup"} element={<Signup/>}/>
      <Route path={"/todo"} element={<Todo/>}/>
      <Route path={"/"} element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App