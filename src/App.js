import "./App.css";
import Hooks from "./Components/Day_9/hooks";
import Hookscallback from "./Components/Day_9/hooks_callback";
import Hookscontext from "./Components/Day_9/hooks_context";
import Uselayeffect from "./Components/Day_9/hooks_uselayouteffect";
import Usereduser from "./Components/Day_9/hooks_usereduse";

function App() {
  return (
    <div className="App">

      {/* Route Concept */}

      {/* <BrowserRouter>
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
      </BrowserRouter> */}

      {/* <Api/> */}

      <Hooks/>
      <Hookscallback/>
      <Hookscontext/>
      <Usereduser/>
      <Uselayeffect/>

    </div>
  );
}

export default App;
