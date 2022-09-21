import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        
        
      </Routes>
      <Routes>
        <Route path="/" element = {<Cart/>}/>
        
        
      </Routes>

      {/* <div>
        <Route path = "/" exact>
          <Home/>
          </Route>
          <Route path = "/cart" exact>
          <Cart/>
          </Route>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
