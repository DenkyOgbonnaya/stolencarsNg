import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import React from "react"
import HeaderComponent from "../../components/header/header.component"
import NotifyOwnerComponent from "../../components/notifyOwner/notifyOwner.component"
import FooterComponent from "../../components/footer/footer.component"
import {useRouter} from "next/router"

const NotifyCarOwner = () => {
    const router = useRouter();
    return(
        <div className="wrapper">
            <Head>
                <title>Notify car owner</title>
            </Head>
            <HeaderComponent></HeaderComponent>
            <NotifyOwnerComponent vin={router.query.vin} ></NotifyOwnerComponent>
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
export default NotifyCarOwner;