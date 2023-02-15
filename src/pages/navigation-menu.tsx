import { NavLink } from 'react-router-dom';
import './../style/navigation-menu.css';

const NavigationMenu = () => {
  return (
    <nav className="horizontal-menu">
      <ul>
        <li>
          <NavLink to="/customers">Customer List</NavLink>
        </li>
        <li>
          <NavLink to="/sale-orders">Sale Order</NavLink>
        </li>
        <li>
          <NavLink to="/sale-order-items">Sale Order Items</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
