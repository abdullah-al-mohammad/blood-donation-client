import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer/Footer';
import Navbar from '../component/Shared/Navbar/Navbar';

const Public = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Public;
