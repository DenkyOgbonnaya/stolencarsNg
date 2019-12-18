import React, {useState} from 'react';
import HeaderComponent from '../header/header.component';
import CarInfoComponent from './carInfo.component';
import { searchCar } from '../reportCar/api';
import Router from "next/router"
const HomeComponent = () => {
    const[vin, setVin] = useState("");
    const[carInfo, setCarInfo] = useState("");
    const[notStolen, setNotStolen] = useState("");
    const[isLoading, setIsLoading] = useState(false);

    const handleSearch = e => {
        e.preventDefault();
        
        if(vin){
            setNotStolen("");
            setIsLoading(true);
            setCarInfo("");

            handleCarSearch();
        }
            
    }
    const handleCarSearch = () => {
        searchCar(vin)
        .then(res => {
            if(res.status === 200){
                setCarInfo(res.data.car);
                setIsLoading(false);
            }else {
                setNotStolen(res.data.message);
                setIsLoading(false);
            }
        })
        .catch(err => {
            setNotStolen("An error occoured while verifying your car. please try again!");
                setIsLoading(false);
        })
    }
    return(
        <div className="home_container">
            <section className="head">
                <div className="header">
                <HeaderComponent></HeaderComponent>
                </div>
                
                <div className="search_field">
                    <h6>Ready to buy that car...?</h6>
                    <p>Use our system to verify the theft status in seconds!</p>
                    <form className="form-inline" onSubmit={handleSearch}>
                        <input type="text" name="vin" onChange = { e => setVin(e.target.value)} placeholder="enter VIN here" className="form-control" />
                        <button type="search" className="btn btn-warning" disabled={isLoading}>
                            {isLoading ? "Verifying..." : "Verify"}
                        </button>
                    </form>
                </div>
            </section>
            {notStolen && <div className="jumbotron">
                <h3>Car not reported stolen!</h3>
                    <p>{notStolen}</p>
                </div>}
            {carInfo && <CarInfoComponent carInfo={carInfo}></CarInfoComponent>}
            
            <section>
                <div className="description">
                    <h2>How it works</h2>
                    <div className="card_main">
                        <div className="card">
                            <svg height="100pt" viewBox="0 0 256 256" width="150pt" 
                            xmlns="http://www.w3.org/2000/svg"><rect fill="#e0ebfc" height="240" rx="8" 
                            width="185" x="21.705" y="8"/><path d="m198.705 250h-169a10.011 10.011 0 0 1 -10-10v-224a10.011 10.011 0 0 1 10-10h169a10.011 10.011 0 0 1 10 10v224a10.011 10.011 0 0 1 -10 10zm-169-240a6.006 6.006 0 0 0 -6 6v224a6.006 6.006 0 0 0 6 6h169a6.006 6.006 0 0 0 6-6v-224a6.006 6.006 0 0 0 -6-6z" 
                            fill="#3762cc"/><path d="m93.216 27.5a1.47 1.47 0 0 1 -1.809-.849l-1.767-4.358a1.471 1.471 0 0 0 -1.829-.842l-12.568 4.2a1.472 1.472 0 0 0 -.892 1.961l2.171 5.218c5.09 7.031 6.037 13.324 6.036 20.843 0 3.526.348 10.418-4.464 18.459-1.544 2.579-2.138 5.852.595 11.61a24.9 24.9 0 0 0 13.786 12.441l20.685 7.857a2.951 2.951 0 0 0 2.09 0l20.685-7.857a24.9 24.9 0 0 0 13.78-12.439c2.735-5.759 2.138-9.033.6-11.61-4.546-7.6-4.465-13.954-4.465-18.459 0-7.181.756-13.549 6.037-20.843l2.172-5.218a1.472 1.472 0 0 0 -.892-1.961l-12.568-4.2a1.472 1.472 0 0 0 -1.83.842l-1.769 4.354a1.471 1.471 0 0 1 -1.811.848l-18.26-5.827a8.826 8.826 0 0 0 -5.357 0z" 
                            fill="#ffea92"/><path d="m92.985 45.089a2 2 0 0 1 -1.37-3.457 32.953 32.953 0 0 1 45.176 0 2 2 0 1 1 -2.738 2.914 28.956 28.956 0 0 0 -39.7 0 1.993 1.993 0 0 1 -1.368.543z" fill="#eaa97d"/><circle cx="114.205" cy="68.484" fill="#eaa97d" r="22.586"/><path d="m115.881 55.3 3.1 6.283a1.868 1.868 0 0 0 1.407 1.022l6.934 1.008a1.869 1.869 0 0 1 1.036 3.188l-5.017 4.891a1.867 1.867 0 0 0 -.538 1.654l1.184 6.905a1.869 1.869 0 0 1 -2.712 1.971l-6.2-3.26a1.872 1.872 0 0 0 -1.74 0l-6.2 3.26a1.87 1.87 0 0 1 -2.713-1.971l1.185-6.905a1.867 1.867 0 0 0 -.538-1.654l-5.018-4.892a1.869 1.869 0 0 1 1.036-3.188l6.933-1.012a1.869 1.869 0 0 0 1.408-1.022l3.1-6.283a1.869 1.869 0 0 1 3.353.005z" fill="#e0ebfc"/><path d="m114.205 106.231a4.922 4.922 0 0 1 -1.756-.323l-20.684-7.854a26.777 26.777 0 0 1 -14.877-13.454c-2.626-5.531-2.782-9.693-.505-13.5a29.76 29.76 0 0 0 4.183-16.752v-.678c0-7.306-.942-13.141-5.625-19.63a1.989 1.989 0 0 1 -.262-.45l-2.179-5.212a3.472 3.472 0 0 1 2.1-4.626l12.569-4.2a3.482 3.482 0 0 1 4.317 1.987l1.583 3.9 17.89-5.682a10.756 10.756 0 0 1 6.569 0l17.8 5.677 1.582-3.9a3.48 3.48 0 0 1 4.316-1.986l12.569 4.2a3.474 3.474 0 0 1 2.1 4.627l-2.161 5.225a2.023 2.023 0 0 1 -.274.467c-4.693 6.509-5.613 12.125-5.613 19.613v.236c0 4.306 0 10.2 4.179 17.194 2.277 3.8 2.121 7.965-.505 13.5a26.772 26.772 0 0 1 -14.875 13.452l-20.686 7.855a4.942 4.942 0 0 1 -1.755.314zm-35.928-74.392c5.213 7.287 6.286 14.006 6.286 21.837v.656a33.806 33.806 0 0 1 -4.752 18.829c-1.084 1.811-1.849 4.382.687 9.726a22.786 22.786 0 0 0 12.687 11.426l20.685 7.856a.943.943 0 0 0 .67 0l20.686-7.856a22.785 22.785 0 0 0 12.682-11.426c2.536-5.344 1.771-7.915.687-9.726-4.752-7.941-4.749-14.747-4.748-19.251v-.234c0-8.055 1.055-14.531 6.286-21.837l1.861-4.474-11.558-3.859-1.58 3.894a3.488 3.488 0 0 1 -4.273 2l-18.263-5.825a6.826 6.826 0 0 0 -4.142 0l-18.357 5.825a3.483 3.483 0 0 1 -4.267-2l-1.58-3.893-11.559 3.86z" fill="#3762cc"/><g fill="#a4c9ff"><rect height="27.667" rx="6" width="140" x="44.205" y="115.333"/><rect height="15" rx="7.5" width="140" x="44.205" y="158"/><rect height="15" rx="7.5" width="140" x="44.205" y="186"/><rect height="15" rx="7.5" width="140" x="44.205" y="214"/></g><path d="m156.1 186.594-17.669-17.674-9.438 23.2a3 3 0 0 0 3.909 3.91z" fill="#e0ebfc"/><path d="m213.356 94.738h14.995a5 5 0 0 1 5 5v13.881a0 0 0 0 1 0 0h-24.995a0 0 0 0 1 0 0v-13.881a5 5 0 0 1 5-5z" fill="#a4c9ff" transform="matrix(.707 .707 -.707 .707 138.352 -125.654)"/><path d="m133.414 131.808h94.621v24.998h-94.621z" fill="#f9a7a7" transform="matrix(.707 -.707 .707 .707 -49.107 170.058)"/><path d="m132.878 182.572-3.885 9.55a3 3 0 0 0 3.909 3.91l9.551-3.885z" fill="#4671c6"/><path d="m156.108 188.6a2 2 0 0 1 -1.414-.586l-17.677-17.678a2 2 0 0 1 0-2.828l66.911-66.9a2 2 0 0 1 2.828 0l17.674 17.674a2 2 0 0 1 0 2.828l-66.908 66.907a2 2 0 0 1 -1.414.583zm-14.849-19.68 14.849 14.85 64.08-64.079-14.846-14.846z" fill="#3762cc"/><path d="m131.741 198.265a5.016 5.016 0 0 1 -4.6-6.9l9.437-23.2a2 2 0 0 1 3.267-.66l17.674 17.675a2 2 0 0 1 -.661 3.266l-23.2 9.437a5.069 5.069 0 0 1 -1.917.382zm7.406-25.8-8.3 20.41a1 1 0 0 0 1.3 1.3l20.411-8.3z" fill="#3762cc"/><path d="m223.016 121.691a2 2 0 0 1 -1.414-.586l-17.674-17.674a2 2 0 0 1 0-2.828l9.814-9.815a7 7 0 0 1 9.9 0l10.6 10.6a7.009 7.009 0 0 1 0 9.9l-9.816 9.815a2 2 0 0 1 -1.41.588zm-14.846-19.674 14.846 14.846 8.4-8.4a3 3 0 0 0 0-4.243l-10.6-10.6a3.073 3.073 0 0 0 -4.243 0z" fill="#3762cc"/></svg>
                            <br />
                            <p className="card_title">Report your stolen car</p>
                        </div>
                        <div className="card">
                           <svg height="150pt" viewBox="0 0 512 512" width="150pt" xmlns="http://www.w3.org/2000/svg"><path d="m179.164062 311.625 21.207032 21.210938-39.296875 39.292968-21.207031-21.207031zm0 0" fill="#32393f"/><path d="m317.027344 0c-107.386719 0-194.972656 87.585938-194.972656 194.972656 0 107.382813 87.585937 194.972656 194.972656 194.972656 107.386718 0 194.972656-87.589843 194.972656-194.972656 0-107.386718-87.585938-194.972656-194.972656-194.972656zm0 0" fill="#7c8388"/><path d="m63.625 511.925781-63.625-63.621093 129.261719-129.191407 63.625 63.625zm0 0" fill="#7c8388"/><path d="m512 194.972656c0 107.382813-87.585938 194.972656-194.972656 194.972656v-389.945312c107.386718 0 194.972656 87.585938 194.972656 194.972656zm0 0" fill="#575f64"/><path d="m482.003906 194.972656c0 90.886719-74.089844 164.976563-164.976562 164.976563-90.886719 0-164.976563-74.089844-164.976563-164.976563 0-90.886718 74.089844-164.976562 164.976563-164.976562 90.886718 0 164.976562 74.089844 164.976562 164.976562zm0 0" fill="#e0f4ff"/><path d="m482.003906 194.972656c0 90.886719-74.089844 164.976563-164.976562 164.976563v-329.953125c90.886718 0 164.976562 74.089844 164.976562 164.976562zm0 0" fill="#bbdcff"/><path d="m243.964844 224.96875h29.996094v44.992188h-29.996094zm0 0" fill="#575f64"/><path d="m363.949219 224.96875h29.996093v44.992188h-29.996093zm0 0" fill="#32393f"/><path d="m392.015625 164.976562h-149.976563l29.996094-59.992187h89.984375zm0 0" fill="#bbdcff"/><path d="m392.015625 164.976562h-74.988281v-59.992187h44.992187zm0 0" fill="#9abadb"/><path d="m371.320312 89.988281h-108.585937l-44.992187 89.984375h198.570312zm-104.984374 59.992188 14.996093-29.996094h71.390625l14.996094 29.996094zm0 0" fill="#ed3e3c"/><path d="m416.3125 179.972656h-99.285156v-29.992187h50.691406l-14.996094-29.996094h-35.695312v-29.996094h54.292968zm0 0" fill="#d62f2d"/><path d="m212.042969 149.980469v89.984375h209.898437v-89.984375zm0 0" fill="#ff5e5b"/><path d="m317.027344 149.980469h104.914062v89.984375h-104.914062zm0 0" fill="#ed3e3c"/></svg>
                            <br />
                            <p className="card_title">Get searched by a potential buyer</p>
                        </div>
                        <div className="card">
                            <svg height="150pt" viewBox="0 0 58 58" width="150pt" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="009---message-alert" fill-rule="nonzero"><path id="Shape" d="m43.62 9.49h-.01c-2.5680286-5.77145649-8.2930006-9.49023228-14.61-9.49023228s-12.0419714 3.71877579-14.61 9.49023228h-.01v.01l-14.38 10.5v34c0 2.209139 1.790861 4 4 4h50c2.209139 0 4-1.790861 4-4v-34z" fill="#f3d55b"/><path id="Shape" d="m57.19 56.41c-.7535327 1.0028755-1.9355811 1.592047-3.19 1.59h-50c-1.25441889.002047-2.43646727-.5871245-3.19-1.59l24.51-17.91.84.61c1.7063673 1.1899396 3.9736327 1.1899396 5.68 0l.84-.61z" fill="#f0c419"/><path id="Shape" d="m4 39c-.55228475 0-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1s1 .4477153 1 1v10c0 .5522847-.44771525 1-1 1z" fill="#f5efca"/><path id="Shape" d="m4 46c-.55228475 0-1-.4477153-1-1v-3c0-.5522847.44771525-1 1-1s1 .4477153 1 1v3c0 .5522847-.44771525 1-1 1z" fill="#f5efca"/><path id="Shape" d="m58 20-25.32 18.5-.84.61c-1.7063673 1.1899396-3.9736327 1.1899396-5.68 0l-.84-.61-25.32-18.5h13.5c1.8273824 7.0656455 8.201872 12.0012471 15.5 12.0012471s13.6726176-4.9356016 15.5-12.0012471z" fill="#f29c1f"/><path id="Shape" d="m45 16c.0001756 6.5213287-3.9575231 12.3902039-10.0035402 14.8342593-6.046017 2.4440554-12.9703568.9741596-17.5020678-3.7153312-4.5317111-4.6894908-5.7638574-11.660064-3.114392-17.6189281v-.01h.01c2.5680286-5.77145649 8.2930006-9.49023228 14.61-9.49023228s12.0419714 3.71877579 14.61 9.49023228h.01c.9143013 2.0482833 1.3846123 4.266924 1.38 6.51z" fill="#2980ba"/><path id="Shape" d="m35 13 .0000272 6h-12.0000272v-6c.0012998-2.7029662 1.8118011-5.07054488 4.42-5.78 1.0329141-.29331416 2.1270859-.29331416 3.16 0 1.0081756.26683658 1.9265979.79855476 2.66 1.54 1.1308021 1.12061008 1.7648139 2.6480021 1.76 4.24z" fill="#f3d55b"/><path id="Shape" d="m37 21v1c0 .5522847-.4477153 1-1 1h-14c-.5522847 0-1-.4477153-1-1v-1c.0032948-1.1032019.8967981-1.9967052 2-2h12c1.1032019.0032948 1.9967052.8967981 2 2z" fill="#f0c419"/><path id="Shape" d="m32 24c0 1.6568542-1.3431458 3-3 3s-3-1.3431458-3-3c-.0021256-.3415766.0588994-.6806042.18-1h5.64c.1211006.3193958.1821256.6584234.18 1z" fill="#f29c1f"/><path id="Shape" d="m31 6c.0032961.44267535-.144905.87316424-.42 1.22-1.0329141-.29331416-2.1270859-.29331416-3.16 0-.275095-.34683576-.4232961-.77732465-.42-1.22 0-1.10456947.8954305-1.99999992 2-1.99999992s2 .89543045 2 1.99999992z" fill="#f0c419"/></g></g></svg>
                        <br />
                            <p className="card_title">Get notified by email</p>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="services">
                <div className="service_description">
                    <h3>ABOUT US</h3>
                    <p>stolencars is a car theft reporting site, were users can easily report their stolen cars any where in Nigeria for free. 
                        The information provided makes it hard for your car to be resold easily, as potencial buyers can easily check if the car they are 
                        interested in buying has been reported stolen, and you will be swiftly contacted when your car comes up.
                    </p>
                    <button className="btn btn-primary" onClick={ ()=> Router.push("/decode-vin")}>Decode vin</button>
                    <button className="btn btn-outline btn-outline-warning" onClick={ ()=> Router.push("/report-stolen-car")}>Report car</button>
                </div>
                <img src="/images/car.jpg"  />
            </section>
            
    <style jsx>{`
        .home_container {
            display: flex;
            flex-direction: column;
            
        }
        .head {
            background: url("/images/carm.jpg") no-repeat
        }
        .header {
            position: fixed;
            width: 100%;
            z-index: 2;
        }
        .intro {
            padding: 70px 20px 20px 20px;
        }
        .search_field {
            background: #162252;
            color:#ffffff;
            width: 100%;
            padding:20px;
            opacity: 0.9;
            margin-top: 14%;
        }
        .description {
            margin-top: 3%;
            
        }
        .card_main {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-top: 3%;
            border: none;
        }
        .card: {
            display: flex;
            flex:1;
            flex-direction: coloumn;
            flex-basis:30%;
            border: none;
            background: #1464F4;
        }
        .card>svg {
            width:100px;
            height:100px;
            margin:auto;
        }
        .card_title {
            font-weight: bold;
            margin:auto;
            padding: 5px;

        }
        .card_title {
            color: blue;
        }
        .description>h2 {
            color: #1464F4;
            padding: 20px;
        }
        .services {
            margin-top: 5%;
            background: whitesmoke;
            padding: 20px;
        }
        .service_description>h3 {
            color: #1464F4;
        }
        .services img {
            width: 100%;
            height: 400px;
            margin-bottom: 5px;
        }
        .jumbotron>h3 {
            color: red;
        }
        @media only screen and (min-width: 65.625em) {
            .search_field {
                margin-top: 5%;
            }
            .card_main {
                display: flex;
                flex-direction: row;
            }
            .services {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                padding: 0;
            }
            .service_description {
                width: 20%;
                padding:5px;
            }
            .services img {
                width: 30%;
                height: 400px;
            }
        }
    `}</style>
        </div>
    )
}

export default HomeComponent;