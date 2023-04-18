// import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer2 from "./components/Footer2";
import About from "./components/About";
import "./App.css";
import SideMenu from "./components/SideMenu";
import { useState } from "react";

function App() {
  const [isSideMenu, setIsSideMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="app custome-bg-base text-[black] border-[red] dark:border-[white] dark:custome-bg-dark dark:text-white h-[100vh]">
        <Nav onclickhumburger={() => setIsSideMenu((prev) => !prev)} />
        <SideMenu onclickcancel={setIsSideMenu} sidemenustate={isSideMenu} />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
        <Footer2 />
      </div>
    </BrowserRouter>
  );
}

export default App;
