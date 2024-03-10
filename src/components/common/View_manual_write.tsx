import Background_gray_vlarge from "./Background_gray_vlarge";

const View_manual_write = () => {
  return (
    <div>
      <Background_gray_vlarge
        clickAct={() => {
          console.log("クリックしました");
        }}
      />
    </div>
  );
};

export default View_manual_write;
