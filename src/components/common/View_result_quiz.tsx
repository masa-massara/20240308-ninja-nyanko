import Header from "./Header"

const View_result_quiz = () => {
  return (
    <div>
      <Header />
      <div>
        <p>名前</p>
        <></>
      </div>
      <div>
        <p>ポジション</p>
        <></>
      </div>
      <table>
        <thead>
            <tr>
                <th>name</th>
                <th>position</th>
                <th>data</th>
                <th>score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>hiromu</th>
                <td>kitchen</td>
                <td>2024/01/01</td>
                <td>90</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default View_result_quiz
