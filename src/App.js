import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UnivList from "./pages/list";
import UnivDetail from "./pages/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route path="/univ" element={<UnivList />}></Route>
        <Route path="/univ/detail/:id" element={<UnivDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
