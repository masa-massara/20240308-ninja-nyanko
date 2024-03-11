import ButtonQuiz from "./ButtonQuiz"

const ViewQuiz = () => {
    return (
        <div className='div_bg_gradient'>
            <div className='divViewQuiz'>
                <p className='quizNum'>第２問</p>
                <div className='background_gray_inset'>
                    <div className="middle">

                    </div>

                </div>
                <div className="divTime">
                    <p className="pTime">TIME</p>
                    <form>
                        <input type="range"></input>
                    </form>
                </div>
                <div className='background_gray_inset'>
                    <div className="large">
                        <ButtonQuiz />
                        <ButtonQuiz />
                        <ButtonQuiz />
                        <ButtonQuiz />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewQuiz