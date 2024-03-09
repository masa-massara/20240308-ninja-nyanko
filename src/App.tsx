import AddPosition from "./pages/AddPosition";
import CheckCreate from "./pages/CheckCreate";
import SelectWorks from "./pages/SelectWorks";
import SelectPosition from "./pages/SelectPosition";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import TopPage from "./pages/TopPage";
function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/selectworks">業種選択</Link>
              </li>
            </ul>
          </nav>

          {/* 各ページへのルート設定 */}
          <Routes>
            <Route path="/addposition" element={<AddPosition />} />
            <Route path="/selectworks" element={<SelectWorks />} />
            <Route path="/selectposition" element={<SelectPosition />} />
            <Route path="/toppage" element={<TopPage />} />
            <Route path="/checkcreate" element={<CheckCreate />} />
            
          </Routes>
        </div>
      </Router>

      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
    </>
  );
}

export default App;
