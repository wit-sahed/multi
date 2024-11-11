import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import RootLayOut from './components/RootLayOut';


function App() {

  const myrouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Route>
  ))
  
  return (
    <>
      <RouterProvider router={myrouter}/>
    </>
  )
}

export default App
