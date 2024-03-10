import DivBoolean from "./DivBoolean"
import DivQuizResultText from "./DivQuizResultText"
import Div_arbeit_manual_parts from "./Div_arbeit_manual_parts"

const DivQuizResult = () => {
    return (
        <>
        <p className="pQuestionNo">Q1</p>
            <div className="divResultFlex">
                <DivQuizResultText />
                <DivBoolean />
            </div>
        </>
    )
}

export default DivQuizResult
