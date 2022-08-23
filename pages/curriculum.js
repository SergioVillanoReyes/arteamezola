import React from "react";
import Layout from "../components/layout";

const Resume = () => {

    return (
        <Layout>
        <div className="slider">
            <div className="container-slider">
                <div className="rowToColumn w80 m-auto">
                    <div className="m2 w60">
                        <img src="/img/cv.jpg" alt="me" className="br15 w100 m-auto"/>
                    </div>
                    <div>
                        <p className="sub-title c-white">Arq. Gerardo E. Amezola C.</p>
                        <p className="text">Arquitecto egresado de la Universidad Autonoma de Ciudad Juárez Chihuahua México en 1982</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
          <div className="rowToColumn p5-0">
              <div className="p2  txtLeftToCenter">
              <img src="/img/cv1.jpg" alt="me" className="br15 w100 m-auto"/>
              </div>
              <div className="p2">
                <img src="/img/cv2.jpg" alt="me" className="br15 w100 m-auto"/>
              </div>
          </div>
      </div>
        </Layout>
    );
};

export default Resume;