import { Link } from 'react-router-dom';
import './Sider.css';

const Sider = () => {


    return (
        <>
            <aside>
                <Link to="/">
                    {" "}
                <div className="logo"></div>
                </Link>
                <div className="Sidercont">
                    <Link to="/orderconfirmation" className="sider-item">
                        <img src="images/check_circle_outline.png" alt="Home Icon" />
                        <span className="home">Order Confirmation</span>
                    </Link>
                    <Link to="/addmenu" className="sider-item">
                        <img src="images/circle-plus.png" alt="Home Icon" />
                        <span className="home">Add Menu</span>
                    </Link>
                    <a href="#" className="sider-item">
                        <img src="images/cog.png" alt="Home Icon" />
                        <span className="home">Settings</span>
                    </a>
                    <Link to="/" className="sider-item">
                        <img src="images/logout.png" alt="Home Icon" />
                        <span className="home">Logout</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}

export default Sider;

