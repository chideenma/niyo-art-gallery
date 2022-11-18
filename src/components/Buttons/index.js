import "./index.css";

const Button = ({ type, text, StartIcon, EndIcon }) => {
  const ExploreButton = (text, StartIcon, EndIcon) => (
    <button type="button" className="explore-button">
      {StartIcon && <StartIcon />}
      <p>{text}</p>
      {EndIcon && <EndIcon />}
    </button>
  );

  const LoginButton = (text, StartIcon, EndIcon) => (
    <button type="button" className="login-button">
      {StartIcon && <StartIcon />}
      <p>{text}</p>
      {EndIcon && <EndIcon />}
    </button>
  );

  return (
    <div>
      {type === "explore"
        ? ExploreButton(text, StartIcon, EndIcon)
        : LoginButton(text, StartIcon, EndIcon)}
    </div>
  );
};

export default Button;
