import React, {useState, useRef, useEffect} from "react";
import { reportCar, getStates } from "./api";
import Link from "next/link";

const ReportCarComponent = () => {
    const fileInput = useRef(null);
    const[make, setMake] = useState("");
    const[model, setModel] = useState("");
    const[vin, setVin] = useState("");
    const[plateNumber, setPlateNumber] = useState("");
    const[color, setColor] = useState("");
    const[dateStolen, setDateStolen] = useState("");
    const[placeStolen, setPlaceStolen] = useState("");
    const[stateStolen, setStateStolen] = useState("");
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[image, setImage] = useState(null);
    const[isLoading, setIsLoading] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");
    const[states, setStates] = useState([]);
    const top = useRef(null);
    
    //locationsng-api.hk/api/vi/states
   useEffect( ()=> {
       const getAllStates = () => {
           getStates()
           .then(res => {
               if(res.status === 200)
                setStates(res.data);
           })
           .catch(console.log())
       }
       getAllStates();
   }, [])
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleFileDrop = e => {
        e.preventDefault();
        e.stopPropagation();

        const imageFile = e.dataTransfer.files[0];
        onFileChange(imageFile);
        
    }
    const onFileChange = file => {
        //URL.revokeObjectURL(imageurl)
        setImage(file);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const credentials = setFormData();

        setIsLoading(true);
        setErrorMessage("");
        handleReport(credentials);
    }
    const handleReport = (credentials) => {
        reportCar(credentials)
        .then(res => {
            if(res.status === 201){
                alert(res.data.message);
                setIsLoading(false);
            }else {
                setErrorMessage(res.data.message);
                setIsLoading(false);
                scrollToTop();
            }
        })
        .catch(err => {
            setErrorMessage("Internal error occoured, please try again");
            setIsLoading(false);
            scrollToTop();
        })
        
    }
    const setFormData = () => {
        let formData = new FormData();
        formData.append("make", make);
        formData.append("model", model);
        formData.append("vin", vin);
        formData.append("plateNumber", plateNumber);
        formData.append("color", color);
        formData.append("dateStolen", dateStolen);
        formData.append("placeStolen", placeStolen);
        formData.append("stateStolen", stateStolen);
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("email", email);
        formData.append("image", image);

        return formData;
    }
    const scrollToTop = () => {
        if(top.current)
            top.current.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                { errorMessage && <div ref={top} className="alert aler-danger">{errorMessage}</div> }
                <h3>Car details</h3>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="make" >Car make</label>
                            <input name="make" value={make} required onChange={e => setMake(e.target.value)} placeholder="eg Toyota" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="model" >Car model</label>
                            <input name="model" required value={model} onChange={e => setModel(e.target.value)} placeholder="toyota camery" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="vin" >VIN/chasis number</label>
                            <input name="vin" required value={vin} onChange={e => setVin(e.target.value)} placeholder="VIN" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group" >
                            <label htmlFor="plateNumber" >Plate number</label>
                            <input name="plateNumber" required value={plateNumber} onChange={e => setPlateNumber(e.target.value)} placeholder="plate numer" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="color" > Car color</label>
                            <input type="text" required name="color" value={color} onChange={e => setColor(e.target.value)} placeholder="color" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="date" > Date stolen</label>
                            <input type="date" required name="date" value={dateStolen} onChange={e => setDateStolen(e.target.value)} className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="placeStolen" >Place stolen</label>
                            <input name="placeStolen" required value={placeStolen} onChange={e => setPlaceStolen(e.target.value)} placeholder="place stolen" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="stateStolen" >State stolen</label>
                            <select name="stateStolen" required value={stateStolen} onChange={e => setStateStolen(e.target.value)} className="form-control" >
                            <option>select state</option>
                            {states.map(state => <option key={state.name} value={state.name}>{state.name}</option> )}
                            </select>
                        </div>
                    </div>
                    
                </div>
                <h3>Owner details</h3>
                <p>We wont share or make your details public</p>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="firstname" >First name</label>
                            <input name="firstname" required value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="first name" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="lastname" >Last name</label>
                            <input name="lastname" required value={lastname} onChange={e => setLastname(e.target.value)} className="form-control" placeholder="lastname" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="email" >Email address</label>
                            <input type="email" required name="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>upload picture (optional)</label>
                            <div 
                                className="drop_zone"
                                onDragOver = {handleDragOver}
                                onDrop = {handleFileDrop}
                                onClick ={ () => fileInput.current.click()}
                            >
                                <span>click to select or drag and drop here...</span>
                                <input type="file" ref={fileInput} hidden onChange={e => onFileChange(e.target.files[0])} name="image" />
                            </div>
                            <div>Selected file: { image && image.name} </div>

                        </div>
                        
                        
                    </div>
                </div>
                <p>I have read and understood the <Link href="/terms-and-conditions"><a>terms & conditions</a></Link> </p>
                <button className="btn btn-warning" disabled={isLoading}>
                    {isLoading ? <div className="spinner-border text-light spinner-border-sm" role="status"></div> : "Report car"}
                </button>
            </form>
            <p>Disclaimer: This form is not a police report and can not be used in place of it. You are adviced to make a proper police report.</p>
            <style jsx>{`
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    padding:20px;

                }
                .drop_zone {
                    display: flex;
                    height: 200px;
                    width: 100%;
                    background: white;
                    background-image: url("/icons/import40.png");
                    background-repeat: no-repeat;
                    background-size: 100px;
                    background-position: center;
                    background-color: #ffffff;
                    cursor: pointer;
                    border: 2px dashed #ccc; 
                    border-radius: 6px;
                    margin-bottom: 25px;
                    background-position: center 28px;
                }
                .drop_zone>span {
                    margin: auto;
                }
                .product {
                    width: 40px;
                    height: 40px;
                    overflow: hidden;
                    border-radius: 4px;
                    display: inline-block;
                }
                
                .product img {
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default ReportCarComponent;