import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import './MyFooter.css';

const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer className="footer" style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src="favicon.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Celebs">Celebs</Link>
            </li>
            <li>
              <Link to="/Awards">Awards</Link>
            </li>
            <li>
              <Link to="/Vote-now">Vote Now</Link>
            </li>
            <li>
              <Link to="/Community">Community</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          
        <div className='social-icon'>
          {/* <a href="#" className="social-icon"> */}
            <FacebookOutlined style={{ fontSize: '24px', color: 'white' }} />
          {/* </a> */}</div>

          <div className='social-icon'>
          {/* <a href="#" className="social-icon"> */}
            <TwitterOutlined style={{ fontSize: '24px', color: 'white' }} />
          {/* </a> */}</div>
          {/* <a href="#" className="social-icon"> */}
          <div className='social-icon'>
            <InstagramOutlined style={{ fontSize: '24px', color: 'white' }} />
          {/* </a> */}</div>
          {/* <a href="#" className="social-icon"> */}
          <div className='social-icon'>
            <LinkedinOutlined style={{ fontSize: '24px', color: 'white' }} />
          {/* </a> */}</div>
        </div>

      </div>
      <div className="footer-bottom">
        <p style={{ color: 'white' }}>
          &copy; 2023 FilmInsider. All Rights Reserved.
        </p>
      </div>
    </Footer>
  );
};

export default MyFooter;
