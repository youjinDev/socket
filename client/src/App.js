import "./App.css";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogInModal from "./components/LogInModal";
import Chat from "./components/Chat";
import io from "socket.io-client";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={LogInModal} />
        <Route path="/chat" component={Chat} />
      </Router>
    </>
  );
};

export default App;
