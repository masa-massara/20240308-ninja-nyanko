import { useState } from 'react'
import CreateMenu from './components/company/CreateMenu'
import CheckModal from './components/company/CheckModal'
import DetailManual from './components/common/DetailManual'
import CreateQuiz from './components/staff/CreateQuiz'
import SelectWorks from './pages/SelectWorks'
import SelectPosition from './pages/SelectPosition'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddPosition from './pages/AddPosition'
import TopPage from './pages/TopPage'
function App() {
  const [count, setCount] = useState(0)
  const industry = [ "飲食店", "サービス業", "小売業", "製造業", "IT業" ]
  const position = [ "店長", "ホールスタッフ", "キッチンスタッフ", "サービススタッフ", "その他"]
  return (
    <>
        {/* <CreateMenu contents="店名を入力" index={1} works="業種" worksname={industry}/>
        <CheckModal position="店長"/>
        <DetailManual title="タイトル"  description='詳細'/>
        <CreateQuiz stage={position}/> */}

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
          <Route path="/selectposition" element={<SelectPosition />}/>
          <Route path="/toppage" element={<TopPage />} />
        </Routes>
      </div>
    </Router>



      <div>
        <a href="https://vitejs.dev" target="_blank">
          
        </a>
        <a href="https://react.dev" target="_blank">
          
        </a>
      </div>
      
    </>
  )
}

export default App
