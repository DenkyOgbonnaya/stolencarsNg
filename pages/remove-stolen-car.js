import HeaderComponent from "../components/header/header.component"
import RemoveCarComponent from "../components/removeCar/removeCar.component"
import FooterComponent from "../components/footer/footer.component"

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
const RemoveStolenCar = () => {
    return(
        <div className="wrapper">
            <Head>
                <title>Remove stolencar</title>
            </Head>
            <HeaderComponent></HeaderComponent>
            <RemoveCarComponent></RemoveCarComponent>
            <div className="footer">
                <FooterComponent></FooterComponent>
            </div>
            <style jsx>{`
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                }
                .footer {
                    margin-top: auto;
                }
            `}</style>
        </div>
    )
}

export default RemoveStolenCar;