import Link from "next/link";

const FooterComponent = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="main-footer">
                    <div className="row">
                        <div className="col">
                            <section className="about">
                                <div className="sub_header_logo">
                                <img src="/icons/taxi.png" alt="logo" height="50px" width="50px" />
                                    <span>Stolen</span>
                                    <span>cars</span>
                                </div>
                                <div> Number one electronic database for stolen cars in Nigeria.</div>
                                <div className="footer_social_icons"> 
                                    <a href="/#"> <img src="/icons/fb_ic10px.png" alt="facebook"/> </a>
                                    <a href="/#"> <img src="/icons/twitter_ic15px.png" alt="twitter"/> </a>
                                    <a href="/#"> <img src="/icons/whatsapp_ic15px.png" alt="whatsapp"/> </a>
                                </div>
                            </section>
                        </div>
                        <div className="col">
                            <section className="menu">
                                <h6>MENU</h6>
                                <ul className="sub_header_nav">
                                    <li> <a href ="/">Home</a></li>
                                    <li> <a href ="/services">Report car</a></li>
                                    <li> <a href ="/products">Decode vin</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="col">
                            <section className="contact">
                                <h6>CONTACT INFO</h6>
                                <p>denkyogb@gmail.com</p>
                                <p>07069797882</p>
                            </section>
                        </div>
                    </div>
        
        
                </div>
            </div>
            <footer>
                <span> (c) Dennis Ogbonnaya {new Date().getFullYear()}    All Rights Reserved</span>
                <span> <Link href ="/terms-and-conditions"><a >Terms and Conditions</a></Link>  </span>
        
            </footer>
    <style jsx>{`
        .footer-container {
            display: flex;
            flex-direction: column;
            color: #ccc;
            align-items: center;
            background: #162252;
            font-size: 12px;
            padding:10px;
            margin-top: auto;
        }
        .main-footer {
            column-count: 2;
        }
        footer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: #212121;
            padding: 5px 50px 5px 50px;
            color: #ccc;
            font-size: 12px;
        }
        .sub_header_nav li a {
            color: #ccc;
        }
        .sub_header_nav li a:hover {
            color: crimson;
            text-decoration: none;
        }
        footer span a {
            color: #ccc;
        }
        footer span a:hover {
            color: crimson;
            text-decoration: none;
        }
        section {
            margin-right: 10px;
        }
        .main-footer {
            display: flex;
            flex-direction: row;
        }
        .about {
            width: 200px;
        }
        .sub_header_logo :nth-child(2) {
            color: crimson;
        }
        .sub_header_logo {
            font-weight: bold;
            font-size: 30px;
        }
        .sub_header_nav {
            list-style: none;
            padding: 0;
        }
        .footer_social_icons a {
            margin-left: 10px;
        }
    `}</style>
        </div>
    )
}

export default FooterComponent;