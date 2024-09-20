import React, { useState } from "react";
import { Menu, Dropdown, Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/img/dotsitologo.png";
import ExampleImage from "../assets/img/logo.png";
import "../css/Navbar.css";

function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  // About Dropdown Menu
  const aboutMenu = (
    <div className="split-dropdown-content container">
      <div className="left-side">
        <Menu>
          <Menu.Item key="1">
            <Link to="/about">Who We Are</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about/ourleadership">Our Leadership</Link>
          </Menu.Item>
         
        </Menu>
      </div>
      <div className="right-side">
        <img src={ExampleImage} alt="Example" className="dropdown-image" />
        <div className="dropdown-text">Why Choose Us?</div>
      </div>
    </div>
  );



  return (
    <div className="navbar-container fixed-navbar">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Dotsito Logo" width="300" height="45" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {/* About Dropdown */}
          <Dropdown overlay={aboutMenu} trigger={["hover"]}>
            <Link className="ant-dropdown-link" to="/about">
              About
            </Link>
          </Dropdown>

          {/* Solutions Dropdown */}

          {/* Standard Links */}
          <Link className="ant-menu-link" to="/services">
            Services
          </Link>
        

          <Link className="ant-menu-link" to="/product">
          Product
          </Link>
          <Link className="ant-menu-link" to="/contact">
            Contact
          </Link>
          {/* <Link className="ant-menu-link" to="/blog">
            Blog
          </Link> */}
            <Link className="ant-dropdown-link" to="/careers">
              Careers
            </Link>
          <Link to="/recruitment" className="ant-dropdown-link"> Recruitment process </Link>

          
        </div>

        {/* Mobile Hamburger Button */}
        <Button
          className="menu-mobile"
          icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
          onClick={showDrawer}
        />
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        closeIcon={<CloseOutlined />}
      >
        <Dropdown overlay={aboutMenu} trigger={["hover"]}>
          <Link to="/about" className="ant-drawer-link">
            About
          </Link>
        </Dropdown>
        <Link to="/services" className="ant-drawer-link">
          Services
        </Link>

        <Link to="/product" className="ant-drawer-link">
          Product
        </Link>

        <Link to="/contact" className="ant-drawer-link">
          Contact
        </Link>
        {/* <Link to="/blog" className="ant-drawer-link">
          Blog
        </Link> */}
          <Link to="/careers" className="ant-drawer-link">
            Careers
          </Link>
          <Link to="/recruitment" className="ant-drawer-link"> Recruitment process </Link>

      </Drawer>
    </div>
  );
}

export default Navbar;