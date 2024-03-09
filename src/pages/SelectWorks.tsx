import Button from "../components/common/Button"
import CreateMenu from "../components/company/CreateMenu"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
const SelectWorks = () => {
  const industry = [ "飲食店", "サービス業", "小売業", "製造業", "IT業" ]
  return (
    <div>
        <CreateMenu contents="店名を入力" index={1} works="業種" worksname={industry}/>
        <button>
          <Link to="/selectposition">
          次へ
          </Link>
        </button>
    </div>
  )
}

export default SelectWorks
