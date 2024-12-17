import { Link } from "react-router-dom";
import React, { useState } from "react";

import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo-costs.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false); // Controle do menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Altera o estado ao clicar no hamburger
    };

    return (
        <nav className={styles.navbar}>

            <Container>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="Logo Costs"></img>
                </Link>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={`${styles.list} ${menuOpen ? styles.active : ""}`}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projects</Link></li>
                    <li className={styles.item}><Link to="/company">Company</Link></li>
                    <li className={styles.item}><Link to="/contact">Contact</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;