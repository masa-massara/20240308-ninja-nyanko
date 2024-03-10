import DivQuizResult from "./DivQuizResult"
import Header from "./Header"

const ViewQuizResult = () => {
  return (
    <div>
        <Header />
        <p className="pPercent">100<span>%</span></p>
        <p className="pComment">Congratulations!</p>
        <input type="range" className="inputRangeQuizResult"></input>

        <DivQuizResult />
    </div>
  )
}

export default ViewQuizResult
