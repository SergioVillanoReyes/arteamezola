import Layout from "../components/layout";
import SliderCom from "../components/Slider";
import Button from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <SliderCom />
      <div className="container">
          <div className="rowToColumn p5-0">
              <div className="p2  txtLeftToCenter">
                <p className="title">Arquitecto</p>
                <p className="sub-title">Universidad Autonoma de Ciudad Juárez México 1982</p>
                <p className="text">Buscar una comunicación visual entre diseñador y cliente, mostrando de una manera clara y precisa el espacio.</p>
                <p className="text">Logrando CONVENCER y VENDER</p>
                <Link href="/curriculum">
                  <a>
                  <Button type="secondary" title="Mi Curriculum" />              
                  </a>
                </Link>
              </div>
              <div className="p2">
                <img src="/img/myimage.jpg" alt="me" className="br15 w100 m-auto"/>
              </div>
          </div>
      </div>
    </Layout>
  )
}
