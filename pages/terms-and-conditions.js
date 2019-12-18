import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import HeaderComponent from "../components/header/header.component"
import FooterComponent from "../components/footer/footer.component"

const TermsAndCondition = () => {
    return(
        <div className="wrapper">
            <Head>
                <title>Terms and conditions</title>
            </Head>
            <HeaderComponent></HeaderComponent>
            <div className="tc">
                <h3>Terms && Conditions</h3>
                <h6>Accessing, Browsing or using StolenCars, indicates you have read, understood and agreed to the following terms and conditions:</h6>
                <ol>
                    <li>We do not carry out verification of information submited to our database, and thus we shall not be held accountable for any errorneouse information submited, or damage it may cause.</li>
                    <li>We are not affiliated to any law enforcement agency, and therefore can not carry out investigation about Auto Theft.</li>
                    <li>Auto theft information submitted to our database is not a police report and can't be used in place of it. You are advised to carry out a formal police report for your stolencar.</li>
                    <li>We shall not be held responsible for any action you may undertake based on our report, and and we are hereby released from any risk or damages that may have been caused by our report</li>
                    <li>Your personal information submitted to our site, such as name and email address will not be made public.</li>
                    
                </ol>
            </div>
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
                .tc {
                    padding:20px;
                }
            `}</style>
        </div>
    )
}

export default TermsAndCondition;