import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
