import { Link } from "react-router-dom";
import "../styles/menu.css";
import database from "../images/database.png";
import analytics from "../images/analytics.png";
import monitor from "../images/monitor.png";

function UserManagement() {
  return (
    <div className="menu-body">
      <h1 className="title">VISITOR MANAGEMENT SYSTEM</h1>
      <div className="header-color">
        <div className="logo-placement">
          <div className="company-logo">
            <img src="" alt="placeholder" />
          </div>
        </div>
      </div>

      <section className="menu-options2">
        <p className="greeting">Hello Mx. User! Where to today?</p>
        <div className="logout-btn-placement">
          <Link className="links" to="/Hello_VMS_FrontEnd/">
            <p className="logout-btn">LOG OUT</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default UserManagement;