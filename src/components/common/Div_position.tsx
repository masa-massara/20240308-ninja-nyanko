type DivPositionProps = {
  position: string;
};

const Div_position = (props: DivPositionProps) => {
  return (
    <div className="div_position">
      <p className="p_position">{props.position}</p>
    </div>
  );
};

export default Div_position;
