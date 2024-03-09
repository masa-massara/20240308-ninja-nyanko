import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const TopPage = () => {
  return (
    <div>
    <h2>Arbeit Manual</h2>
    <button>
      マニュアルを閲覧
    </button>
    <button>
      <Link to="/selectworks">  マニュアルを作成</Link>
    </button>
    <button>
      個人成績
    </button>
    </div>
  )
}

export default TopPage
