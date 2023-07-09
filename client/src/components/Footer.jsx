import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Social links</h3>
            <ul>
              <motion.li whileHover={{ scale: 1.5 }} className="facebook">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.facebook.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </motion.a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.5 }} className="youtube">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.youtube.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaYoutube />
                </motion.a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.5 }} className="instagram">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.instagram.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </motion.a>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Made by Puneeth © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
