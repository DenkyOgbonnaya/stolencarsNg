import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import HomeComponent from "../components/home/home.component"
import FooterComponent from '../components/footer/footer.component';

const Home = () => {
    return(
        <div>
            <Head>
                <title>Stolencars Nigeria</title>
            </Head>
            <HomeComponent></HomeComponent>
            <FooterComponent />
        </div>
    )
}

export default Home;