import logo from "./logo.svg";
import "./App.css";
import SetTheme from "./utils/themes";
import Theme from "./utils/theme";
import { THEMES } from "./utils/constants";
import WebPageView from "./containers/browse/browseView";

const App = () => {
  // initializations
  SetTheme(THEMES.DARK);
  // TODO: Initialize user preference shortcut keys

  return <WebPageView />;
};

export default App;

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
