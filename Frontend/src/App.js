import "./App.css";
import LoginScreen from "./screens/authPages/LoginScreen";
import SignupScreen from "./screens/authPages/SignupScreen";
import MensPage from "./screens/mainUsersPages/MensPage";
import WomensPage from "./screens/mainUsersPages/WomensPage";
import BabyCollection from "./screens/mainUsersPages/BabyCollection";
import HomePage from "./screens/mainUsersPages/HomePage";
import AdminPanel from "./screens/adminPanel/AdminPanel";
import ProductDetails from "./screens/mainUsersPages/ProductDetails";
import ShoppingCart from "../src/screens/mainUsersPages/ShoppingCart";
import ProductsAdmin from "../src/screens/adminPanel/components/ProductsAdmin";
import AddProductAdmin from "./screens/adminPanel/components/AddProductAdmin";
import OrdersAdmin from "../src/screens/adminPanel/components/OrdersAdmin";
import UsersAdmin from "../src/screens/adminPanel/components/UsersAdmin";
import Footer from "./components/generalComponents/Footer";
import UperFooter from "./components/generalComponents/UperFooter";
import MyOrder from "./components/generalComponents/MyOrder";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/order" element={<MyOrder />} />
          <Route path="/signup" element={<SignupScreen />} />

          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<HomePage />} />

          <Route path="/mens" element={<MensPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />

          <Route path="/womens" element={<MensPage />} />
          <Route path="/womens/:productid" element={<ProductDetails />} />

          <Route path="/baby-collection" element={<MensPage />} />
          <Route
            path="/baby-collection/:productid"
            element={<ProductDetails />}
          />

          <Route path="/admin" element={<AdminPanel />}>
            <Route path="" element={<ProductsAdmin />} />
            <Route path="products" element={<ProductsAdmin />} />
            <Route path="orders" element={<OrdersAdmin />} />
            <Route path="add-product" element={<AddProductAdmin />} />
            <Route path="users" element={<UsersAdmin />} />
          </Route>
          <Route path="/footer" element={<Footer />} />
          <Route path="/upfooter" element={<UperFooter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
