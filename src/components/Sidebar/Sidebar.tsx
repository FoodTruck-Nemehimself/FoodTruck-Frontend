import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside>
      <Link to="/">
        {" "}
        <div className="logo"></div>
      </Link>
      <div className="cont">
        <Link to="/customerdashboard" className="sidebar-item">
          <img src="images/home.png" alt="Home Icon" />
          <span className="home">Home</span>
        </Link>
        <Link to="/menupage" className="sidebar-item">
          <img src="images/menu.png" alt="Menu Icon" />
          <span className="home">Menu</span>
        </Link>
        <a href="#" className="sidebar-item">
          <img src="images/bullseye-arrow.png" alt="Home Icon" />
          <span className="home">Track Order</span>
        </a>
        <Link to="orderhistory" className="sidebar-item">
          <img src="images/history.png" alt="Home Icon" />
          <span className="home">Order History</span>
        </Link>
        <a href="#" className="sidebar-item">
          <img src="images/cog.png" alt="Home Icon" />
          <span className="home">Settings</span>
        </a>
        <Link to="/customerlogin" className="sidebar-item">
          <img src="images/logout.png" alt="Home Icon" />
          <span className="home">Logout</span>
        </Link>
      </div>
      <div className="updates">
        <p>Upgrade your Account to get a free Voucher</p>
        <button className="btn" type="submit">
          AddToCart
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
