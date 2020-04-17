import React from "react";

let currentYear = new Date().getFullYear();

function Footer() {
    return(
    <footer>
        <p>Copyright Helios Web {currentYear}</p>
    </footer>)
}

export default Footer;