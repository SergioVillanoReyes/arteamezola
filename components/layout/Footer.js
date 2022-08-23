import React from "react";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
    return(
        <>
    <div className="container bg-secondary-light">
          <div className="rowToColumn">
            <div className="center">
                <p className="super-title m1">Hablemos de tu siguiente proyecto</p>
                <Link href="/contacto">
                  <a>
                  <Button type="secondary" title="Contactame" />              
                  </a>
                </Link>
            </div>
          </div>
      </div>
        <div className="footer">
            <div className="container">
                <div className="rowToColumn container-footer">
                    <div>
                        <p>&copy; Arte Amezola</p>
                    </div>
                    <div className="social-horizontal">
                        <img src="/img/f.png" alt="facebook" className="social-icons" />
                        <img src="/img/i.png" alt="facebook" className="social-icons" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;