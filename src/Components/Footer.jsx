import React from "react";

function Footer() {
    var d = new Date();
    return <footer><p>Copyright ⓒ {d.getFullYear()}</p></footer>;
}

export default Footer;