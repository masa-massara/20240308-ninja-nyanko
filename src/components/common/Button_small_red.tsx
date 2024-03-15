const Button_small_red = ({ clickAct }: Props) => {
  return (
    <div className="button_small_color">
      <button className="red" onClick={clickAct}>
        追加
      </button>
    </div>
  );
};

type Props = {
  clickAct: () => void;
};

export default Button_small_red;
