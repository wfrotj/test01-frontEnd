import { Link } from "react-router-dom";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu-body">
      <h1 className="title">VISITOR MANAGEMENT SYSTEM</h1>
      <div className="logo-placement">
        <div className="company-logo">
          COMPANY <br />
          LOGO
        </div>
      </div>
      <section className="menu-options">
        <Link to="/Hello_VMS_FrontEnd/menu/visitor_database">
          <div className="visitor-database">Visitors Database</div>{" "}
        </Link>
        <Link to="/Hello_VMS_FrontEnd/menu/monitoring">
          <div className="monitoring-mode">Monitoring Mode</div>
        </Link>
        <Link to="/Hello_VMS_FrontEnd/menu/analytics">
          <div className="analytics">Analytics</div>
        </Link>
      </section>
      <p className="greeting">Hello Mx. User! Where to today?</p>
      <div className="logout-btn-placement">
        <Link to="/Hello_VMS_FrontEnd/">
          <p className="logout-btn">LOG OUT</p>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
