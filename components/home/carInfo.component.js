import Link from "next/link";

const CarInfoComponent = ({carInfo}) => {
    return(
        <div>
            <div className="jumbotron">
                <h3>Theft Alert! The vehicle you searched for is reported stolen on our database.</h3>
                <p>If you intend to buy this car, it is important you thoroughly check the Custom and car documents 
                    and make sure it is original. You should also make sure the name on all vehicle document matches 
                    the sellers name or prove car was bought from original owner.</p>
            </div>
            <section className="services">
                <div className="service_description">
                    <h3>Car and Theft Details</h3>
                    <table className="table table-responsive  W-75">
                <tbody>
                    <tr>
                        <td>Make</td>
                        <td> {carInfo.make || "-"}</td>
                    </tr>
                    <tr>
                        <td>model</td>
                        <td>{carInfo.model || "-"}</td>
                    </tr>
                    <tr>
                        <td>VIN</td>
                        <td>{carInfo.vin || "-"}</td>
                    </tr>
                    <tr>
                        <td>Plate Number</td>
                        <td>{carInfo.plateNumber || "-"}</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>{carInfo.color || "-"}</td>
                    </tr>
                    <tr>
                        <td>Date Stolen</td>
                        <td>{new Date(carInfo.dateStolen).toDateString()}</td>
                    </tr>
                    <tr>
                        <td>Place Stolen </td>
                        <td>{carInfo.placeStolen || "-"}</td>
                    </tr>
                    <tr>
                        <td>State Stolen</td>
                        <td>{carInfo.stateStolen || "-"}</td>
                    </tr>

                </tbody>
            </table>
                </div>
                {carInfo.image ? <img src={carInfo.image}  /> : <img src="/images/car.jpg"  />}
                
            </section>
            <div className="jumbotron notify">
                <h3>Take Action!</h3>
                <p>If after going through the car documents, and you have doubt the seller is 
                    the actual owner of the car. You may wish to <b>report to your local Police</b> or  
                    <Link href={`/notify-owner/${carInfo.vin}`}><a>notify the owner</a></Link>
                    (the car registerer).</p>
            </div>
            <style jsx>{`
        .home_container {
            display: flex;
            flex-direction: column;
            
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
            color: red
        }
        @media only screen and (min-width: 65.625em) {
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
export default CarInfoComponent;