// import AddPosition from "./pages/AddPosition";
import CheckCreate from "./pages/CheckCreate";
import CreateQuiz from "./pages/CreateQuiz";
import DetailManager from "./pages/DetailManager";
import DetailPart from "./pages/DetailPart";
import ManualListManager from "./pages/ManualListManager";
import ManualListPart from "./pages/ManualListPart";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SelectWorks from "./pages/SelectWorks";
import SelectPosition from "./pages/SelectPosition";
import TopPageCompany from "./pages/TopPageCompany";
import TopPageArbeit from "./pages/TopPageArbeit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div>
        {/* 各ページへのルート設定 */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/detailmanager" element={<DetailManager />} />
            <Route path="/detailpart" element={<DetailPart />} />
            <Route path="/result" element={<Result />} />
            <Route path="/works" element={<SelectWorks />} />
            <Route path="/works/position/" element={<SelectPosition />} />
            {/* <Route path="/works/position/addposition" element={<AddPosition />} /> */}
            <Route path="/works/position/addposition/checkcreate" element={<CheckCreate />} />
            <Route path="/Company" element={<TopPageCompany />} />
            <Route path="/Company/manuallistmanager" element={<ManualListManager />} />
            <Route path="/Arbeit" element={<TopPageArbeit />} />
            <Route path="/Arbeit/manuallistpart" element={<ManualListPart />} />
            <Route path="/Arbeit/createquiz" element={<CreateQuiz />} />
            <Route path="/Arbeit/createquiz/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
