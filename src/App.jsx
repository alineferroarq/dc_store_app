
import './App.css'
import { MenuBar } from '../componets/header/MenuBar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../componets/footer/footer';


function App() {
  return (
    <>
    {/* <home /> */}
    <MenuBar />
    <Outlet />
    <Footer />
   </>
  );
}

export default App
