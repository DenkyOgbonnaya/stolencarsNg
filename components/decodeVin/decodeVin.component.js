import React, {useState} from "react";
import VinInfoComponent from "./vinInfo.component";
import { decodeVin } from "./api";

const DecodeVinComponent = () => {
    const[vin, setVin] = useState("");
    const[vinInfo, setVinInfo] = useState("");
    const[errorMessage, setErrorMessage] = useState("");
    const[isDecoding, setIsDecoding] = useState(false);

    const handleDecode = (e) => {
        e.preventDefault();

        setIsDecoding(true);
        setErrorMessage("");
        if(vin){
            decodeVin(vin)
            .then( res => {
                if(res.status === 200){
                    setInterval(() => {
                        setVinInfo(res.data.vinInformation);
                        setIsDecoding(false)
                    }, 4000);
                }else {
                    setErrorMessage(res.data.message);
                    setIsDecoding(false);
                }
            })
            .catch(err => {
                setErrorMessage("An error occoured while decoding your VIN please try again");
                    setIsDecoding(false);
            })
            
        }

    }
    return (
        <div className="decode_container">
            <div className="decode">
                    {errorMessage && <div className="alert alert-info">{errorMessage}</div>}
                    <h6>Decode Vehicle Identification Number for  free!</h6>
                    <p>Enter VIN to get basic car information</p>

                    <form className="form-inline" onSubmit={handleDecode}>
                        <input type="text" name="vin" onChange = { e => setVin(e.target.value)} placeholder="enter VIN" className="form-control" />
                        <button type="search" className="btn btn-warning" disabled={isDecoding}>
                            {isDecoding ? "Decoding..." : "Decode"}
                        </button>
                    </form>
                    <br />
                    {isDecoding && <div className="spinner-border text-warning"> </div>}
                    {vinInfo && <VinInfoComponent vinInfo={vinInfo}></VinInfoComponent>}
            </div>
            <img src="/images/car.jpg"  />
            <style jsx>{`
                .decode_container {
                    padding: 20px;
                    margin-top: 3%;
                }
                .btn {
                    margin-top: 5px;
                }
                .decode {
                    
                    padding:20px;
                }
                h6 {
                    color:blue;
                }
                .decode_container img {
                    width: 100%;
                    height: 400px;
                    margin-bottom: 5px;
                }
                @media only screen and (min-width: 65.625em) {
                    .decode_container {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        padding: 0;
                        margin-top: 5%;
                    }
                    .btn {
                        margin-top: 0px;
                    }
                    .decode {
                        width: 20%;
                        padding:5px;
                    }
                    .decode_container img {
                        width: 30%;
                        height: 400px;
                    }
                }
            `}</style>
        </div>
    )
}

export default DecodeVinComponent;