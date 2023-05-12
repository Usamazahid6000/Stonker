import "./App.css";
import Loginpage from "./Component/Loginpage";
import Signup from "./Component/Signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Protected from "./Component/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<Loginpage />}></Route>
          <Route exact path="/signup" component={<Signup />}></Route>
          <Route exact path="/" component={<Protected />}>
          <Route exact path="/dashboard" component={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
