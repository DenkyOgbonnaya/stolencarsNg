import React, {useState, useRef} from "react";
import { removeCar } from "./api";

const RemoveCarComponent = () => {
    const[vin, setVin] = useState("");
    const[email, setEmail] = useState("");
    const[erroMessage, setErrorMessage] = useState("");
    const[isLoading, setIsLoading] = useState(false);
    const top = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        setErrorMessage("");
        setIsLoading(true)
        handleRemoveCar();
    }
    const handleRemoveCar = () => {
        removeCar(vin, email)
        .then(res => {
            if(res.status = 200){
                setIsLoading(false);
                alert(res.data.message);
            }else {
                setErrorMessage(res.data.message);
                setIsLoading(false);
                
                scrollToTop();
            }
            
        })
        .catch(err => {
            setErrorMessage("Internal error occoured, please try again!");
            setIsLoading(false);
            scrollToTop();
        })
        
    }
    const scrollToTop = () => {
        if(top.current)
            top.current.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <div className="wrapper">
            <h3>Remove car</h3>
            { erroMessage && <div ref={top} className="alert alert-danger"> {erroMessage} </div> }
            <form onSubmit={handleSubmit}>
            <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="vin" >Vin</label>
                            <input name="vin" required  onChange={e => setVin(e.target.value)} placeholder="enter vin" className="form-control" />
                        </div>
                    </div>
                    
                    
            </div>
            <div className="row">
            <div className="col">
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input name="email" required onChange={e => setEmail(e.target.value)} placeholder="email used to register car" className="form-control" />
                        </div>
                    </div>
            </div>
                <button className="btn btn-warning" disabled={isLoading}>
                    {isLoading ? <div className="spinner-border text-light spinner-border-sm" role="status"></div> : "Remove car"}
                </button>
            </form>
                <style jsx>{`
                    .wrapper {
                        padding:2%;
                    }
                `}</style>
        </div>
    )
}

export default RemoveCarComponent;