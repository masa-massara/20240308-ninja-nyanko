import AddPosition from "./pages/AddPosition";
import CheckCreate from "./pages/CheckCreate";
import SelectWorks from "./pages/SelectWorks";
import SelectPosition from "./pages/SelectPosition";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import TopPageArbeit from "./pages/TopPageArbeit";
import TopPageCompany from "./pages/TopPageCompany";

function App() {
  return (
    <>
      <div>
        {/* 各ページへのルート設定 */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/addposition" element={<AddPosition />} />
            <Route path="/selectworks" element={<SelectWorks />} />
            <Route path="/selectposition" element={<SelectPosition />} />
            <Route path="/checkcreate" element={<CheckCreate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/arbeit" element={<TopPageArbeit />} />
            <Route path="/company" element={<TopPageCompany />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
    </>
  );
}

export default App;
