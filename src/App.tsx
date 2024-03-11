import CheckCreate from "./pages/CheckCreate";
import SelectWorks from "./pages/SelectWorks";
import SelectPosition from "./pages/SelectPosition";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import TopPageArbeit from "./pages/TopPageArbeit";
import TopPageCompany from "./pages/TopPageCompany";
import Quizmenu from "./pages/Quizmenu";
import { createContext, useState } from "react";
import AddPosition from "./pages/AddPosition";
import View_add_manual_third from "./pages/View_add_manual_third";
import View_manual_list from "./pages/View_manual_list";
import { AuthContextProvider } from "./context/AuthContext";

type PlaceContextType = {
  place: string;
  setPlace: React.Dispatch<React.SetStateAction<string>>;
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  industry: string;
  setIndustry: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setJson: React.Dispatch<React.SetStateAction<any>>;
};

export const PlaceContext = createContext<PlaceContextType>(
  {} as PlaceContextType
);

function App() {


  // 業種
  const [place, setPlace] = useState("");
  // ポジション
  const [position, setPosition] = useState("");
  // 店舗名
  const [industry, setIndustry] = useState("");
  // JSON
  const [json, setJson] = useState("");

  return (
    <>
      <PlaceContext.Provider
        value={{
          place,
          setPlace,
          position,
          setPosition,
          industry,
          setIndustry,
          json,
          setJson,
        }}
      >
        <AuthContextProvider>
        <div>
          {/* 各ページへのルート設定 */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/works" element={<SelectWorks />} />
              <Route path="/works/position" element={<SelectPosition />} />
              <Route
                path="/works/position/addposition"
                element={<AddPosition position="レジ" />}
              />
              <Route path="/checkcreate" element={<CheckCreate />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/arbeit" element={<TopPageArbeit />} />
              <Route path="/arbeit/selectquiz" element={<Quizmenu />} />
              <Route path="/company" element={<TopPageCompany />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/thirdl" element={<View_add_manual_third />} />
              <Route path="/list" element={<View_manual_list />} />

            </Routes>
          </BrowserRouter>
        </div>
        </AuthContextProvider>
      </PlaceContext.Provider>
    </>
  );
}

export default App;
