import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import DecodeVinComponent from '../components/decodeVin/decodeVin.component';
import HeaderComponent from '../components/header/header.component';
import FooterComponent from '../components/footer/footer.component';

const DecodeVin = () => {
    
    return (
        <div className="wrapper">
            <Head>
                <title>Decode vin</title>
            </Head>
            <HeaderComponent></HeaderComponent>
            <DecodeVinComponent></DecodeVinComponent>
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

export default DecodeVin;