import "./Loading.css";
const Loading = () => {
  return (
    <div className="LoadingContainer">
      <div className="lds-ripple">
        <div></div>

        <div></div>
      </div>
      <div className="LoadingText">L o a d i n g</div>
    </div>
  );
};

export default Loading;
