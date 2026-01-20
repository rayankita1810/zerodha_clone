import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />  {/* This renders child routes */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
