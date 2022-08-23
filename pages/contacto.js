import React from "react";
import Layout from "../components/layout";
import Button from "../components/Button";

const Contact = () => {

    return (
        <Layout>
        <div className="slider">
            <div className="container-slider h15">
                <div className="rowToColumn w80 m-auto">
                    <div className="m2 w60" />
                </div>
            </div>
        </div>
            <div className="container">
                <div className="m-auto center p5-0">
                    <div className="p5-0 w100">
                        <input type="text" placeholder="Nombre completo"  className="input" />
                        <input type="text" placeholder="E-mail"  className="input" />
                        <input type="text" placeholder="Teléfono"  className="input" />
                        <textarea placeholder="Escriba un mensaje" className="textarea">

                        </textarea>
                        <div className="w100">
                            <Button title="Enviar" type="secondary" />
                        </div>
                    </div>
                </div>
                <div className="center m2">
                    <p className="text">Arq. Gerardo E. Amezola C.</p>
                    <p className="text">Calle Álamo Carolina #8909 fraccto. Alamos de Senecu.</p>
                    <p className="text">Cd. Juarez Chih. Mex.</p>
                    <p className="text">Cel. 656 6 260048</p>
                </div>
                <div className="center m2">
                    <p className="text">13653 Lancashire St.</p>
                    <p className="text">El Paso tx. 79928</p>
                    <p className="text">Ph. (915) 3567609</p>
                </div>
                <div className="center m2">
                    <p className="text">gamezola9@hotmail.com</p>
                    <p className="text">www.arteamezola.com</p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;