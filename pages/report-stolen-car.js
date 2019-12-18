import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import HeaderComponent from "../components/header/header.component"
import ReportCarComponent from "../components/reportCar/reportCar.component"
import FooterComponent from "../components/footer/footer.component"

const ReportStolenCar = () =>{
    return(
        <div className="wrapper">
            <Head>
                <title>Report stolen car</title>
            </Head>
            <HeaderComponent></HeaderComponent>
            <ReportCarComponent></ReportCarComponent>
            <div className="footer">
                <FooterComponent></FooterComponent>
            </div>

            <style jsx>{`
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    height:100vh;
                }
                .footer {
                    margin-top: 0;
                }
            `}</style>
        </div>
    )
}

export default ReportStolenCar;