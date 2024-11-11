import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Firstpage from "./Components/Day_7/firstpage";
import Secondpage from "./Components/Day_7/secondpage";
import User from "./Components/Day_7/user";
import Firstnested from "./Components/Day_7/firstnested";
import Secondnested from "./Components/Day_7/secondnesred";
import Login from "./Components/Day_7/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"second"}>Second</Link>
          </li>
          <li>
            <Link to={"user/1"}>User 1</Link>
          </li>
          <li>
            <Link to={"user/2"}>User 2</Link>
          </li>
          <li>
            <Link to={"nested/first_nest"}>Page 1</Link>
          </li>
          <li>
            <Link to={"nested/second_nest"}>Page 2</Link>
          </li>
          <li>
            <Link to={"login"}>Login</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="second" element={<Secondpage />} />
          <Route path="user/:id" element={<User />} />

          <Route path="nested">
            <Route path="first_nest" element={<Firstnested />} />
            <Route path="second_nest" element={<Secondnested />} />
          </Route>

          <Route path="login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
