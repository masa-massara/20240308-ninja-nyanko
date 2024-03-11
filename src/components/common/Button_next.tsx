import { useNavigate } from "react-router-dom";


const Button_next = (props: Props) => {

  const handleNavigate = () => {
    navigate(props.urlSuffix)
  }

  const navigate = useNavigate();
  return (
    <div className="button_next">
      <button className="next" onClick={handleNavigate}>次へ</button>
    </div>
  );
};

type Props = {
  urlSuffix:string;
}

export default Button_next;
