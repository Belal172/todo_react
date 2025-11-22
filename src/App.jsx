import { useDispatch } from "react-redux";
import Header from "./Header";
import Product from "./Product";
import { clearAllItem } from "./rtx/slice";
import { BrowserRouter, Routes,Route } from "react-router";
import CartList from "./CartList";

//import './App.css'
function App() {
  const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <Header />

      

        <Routes>
          <Route path="/" element={<Product/>}></Route>
           <Route path="/cart-list" element={<CartList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
