import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import './App.css';
import NavigationMenu from './pages/navigation-menu';
import CustomerList from './pages/customer/customer.list';

function App() {
  return (
    <Router>
    <div>
      <NavigationMenu />
      <Switch>
        <Route path="/customers" element = { <CustomerList />}>
        </Route>
        <Route path="/sale-orders">
          {/* <SaleOrder /> */}
        </Route>
        <Route path="/sale-order-items">
          {/* <SaleOrderItems /> */}
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
