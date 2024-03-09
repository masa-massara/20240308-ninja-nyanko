import { useState } from 'react'
import CreateMenu from './components/company/CreateMenu'
import CheckModal from './components/company/CheckModal'
import DetailManual from './components/common/DetailManual'
import CreateQuiz from './components/staff/CreateQuiz'
function App() {
  const [count, setCount] = useState(0)
  const industry = [ "飲食店", "サービス業", "小売業", "製造業", "IT業" ]
  const position = [ "店長", "ホールスタッフ", "キッチンスタッフ", "サービススタッフ", "その他"]
  return (
    <>
        <CreateMenu contents="店名を入力" index={1} works="業種" worksname={industry}/>
        <CheckModal position="店長"/>
        <DetailManual title="タイトル"  description='詳細'/>
        <CreateQuiz stage={position}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          
        </a>
        <a href="https://react.dev" target="_blank">
          
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
