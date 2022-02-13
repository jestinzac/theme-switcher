import "./App.scss";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState({
    size: "md",
    color: "blue",
    background: "light",
  });

  const { size, background, color } = theme;

  const onChange = (event) => {
    const { name, value } = event.target;
    setTheme((prevState) => ({ ...prevState, [name]: value }));
  };
  
  return (
    <main
      data-theme-size={size}
      data-theme-color={color}
      data-theme-background={background}
      className="size background color"
    >
      <div className="wrapper flow">
        <h1>
          Theme <span className="color-primary">switcher</span>
        </h1>
        <h3>Some sample text</h3>
        <h3 className="color-primary">Some sample coloured text</h3>
        <form onChange={onChange}>
          <h2>Font size: </h2>
          <div className="theme-font-size">
            <label className="color-primary" htmlFor="xs" style={{ fontSize: "0.8rem" }}>
              <b>Aa</b>
            </label>
            <input type="radio" name="size" id="xs" value="xs" />
            <input type="radio" name="size" id="sm" value="sm" />
            <input type="radio" name="size" id="md" value="md" defaultChecked />
            <input type="radio" name="size" id="lg" value="lg" />
            <input type="radio" name="size" id="xl" value="xl" />
            <label className="color-primary" htmlFor="xl" style={{ fontSize: "1.3rem" }}>
              <b>Aa</b>
            </label>
          </div>
          <h2>Color:</h2>
          <div className="theme-color">
            <ColourInput color="#1da1f2" value="blue"  defaultChecked />
            <ColourInput color="#ffad1f" value="yellow"  />
            <ColourInput color="#e0255e" value="red"  />
            <ColourInput color="#794bc3" value="purple"  />
            <ColourInput color="#f45e22" value="orange"  />
            <ColourInput color="#17bf63" value="green"  />
          </div>
          <h2>Background:</h2>
          <div className="theme-background">
            <BackgroundInput
              backgroundColor="#fff"
              color="#000"
              value="light"
              label="Light"
              defaultChecked
            />
            <BackgroundInput backgroundColor="#15202b" color="#fff" value="dim" label="Dim" />
            <BackgroundInput backgroundColor="#000" color="#d9d9d9" value="dark" label="Dark" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;

const ColourInput = ({ color, value, defaultChecked = false }) => (
  <div>
    <label htmlFor={value} className="theme-color-input">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill={color} />
      </svg>
      <input type="radio" id={value} name="color" value={value} defaultChecked={defaultChecked} />
      {/* <Icon /> */}
    </label>
  </div>
);

const BackgroundInput = ({ backgroundColor, color, value, label, defaultChecked }) => (
  <label
    className="theme-background-input"
    style={{ backgroundColor, color, border: `1px solid ${color}` }}
    htmlFor={value}
  >
    <span>
      <input
        type="radio"
        id={value}
        name="background"
        value={value}
        defaultChecked={defaultChecked}
      />
      <b>{label}</b>
    </span>
  </label>
);


