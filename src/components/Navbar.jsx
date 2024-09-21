import React, { useState } from "react";
import { Menu, Dropdown, Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/img/dotslogo.png";
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
    <Menu>
      <Menu.Item key="1">
        <Link to="/about" onClick={onClose}>
          Who We Are
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/about/ourleadership" onClick={onClose}>
          Our Leadership
        </Link>
      </Menu.Item>
      {/* <Menu.Item key="2">
        <Link to="/about/life" onClick={onClose}>
          life @ Dotsito
        </Link>
      </Menu.Item> */}
    </Menu>
  );

  return (
    <div className="navbar-container fixed-navbar">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={onClose}>
            <img src={Logo} alt="Dotsito Logo" width="300" height="45" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {/* About Dropdown for Desktop with Down Arrow Icon */}
          <Dropdown overlay={aboutMenu} trigger={['hover', 'click']}>
            <span className="ant-dropdown-link">
              About <DownOutlined />
            </span>
          </Dropdown>

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
          <Link className="ant-dropdown-link" to="/careers">
            Careers
          </Link>
          <Link to="/recruitment" className="ant-dropdown-link">
            Recruitment process
          </Link>
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
        {/* About Dropdown for Mobile */}
        <Dropdown overlay={aboutMenu} trigger={['click']}>
          <div className="ant-drawer-link">
            About <DownOutlined />
          </div>
        </Dropdown>

        <Link to="/services" className="ant-drawer-link" onClick={onClose}>
          Services
        </Link>
        <Link to="/product" className="ant-drawer-link" onClick={onClose}>
          Product
        </Link>
        <Link to="/contact" className="ant-drawer-link" onClick={onClose}>
          Contact
        </Link>
        <Link to="/careers" className="ant-drawer-link" onClick={onClose}>
          Careers
        </Link>
        <Link to="/recruitment" className="ant-drawer-link" onClick={onClose}>
          Recruitment process
        </Link>
      </Drawer>
    </div>
  );
}

export default Navbar;
