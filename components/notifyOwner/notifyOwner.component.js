import React, {useState, useRef, useEffect} from "react";
import { notifyOwner } from "./api";
import { getStates } from "../reportCar/api";

const NotifyOwnerComponent = ({vin}) => {
    const[state, setState] = useState("");
    const[location, setLocation] = useState("");
    const[seller, setSeller] = useState("");
    const[info, setInfo] = useState("");
    const[erroMessage, setErrorMessage] = useState("");
    const[isLoading, setIsLoading] = useState(false);
    const top = useRef(null);
    const[states, setStates] = useState([])
    
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


    const handleSubmit = e => {
        e.preventDefault();

        setErrorMessage("");
        setIsLoading(true)
        handleNotification();
    }
    const handleNotification = () => {
        notifyOwner(vin, {state, location, seller, info})
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
            <h3>Notify Car owner</h3>
            { erroMessage && <div ref={top} className="alert alert-danger"> {erroMessage} </div> }
            <form onSubmit={handleSubmit}>
            <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="state" >State seen</label>
                            <select name="state" required value={state} onChange={e => setState(e.target.value)} className="form-control" >
                            <option>select state</option>
                            {states.map(state => <option key={state.name} value={state.name}>{state.name}</option> )}
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="location" >Location seen</label>
                            <input name="location" required  onChange={e => setLocation(e.target.value)} placeholder="where was it seen" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="seller" >Sellers name (optional)</label>
                            <input name="seller"  onChange={e => setSeller(e.target.value)} placeholder="seller name" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="info">Additional info (optional)</label>
                            <textarea name="info" onChange={e => setInfo(e.target.value)} className="form-control" placeholder="provide additional information that could lead to the recovery of this vehicle"></textarea>
                        </div>
                    </div>
                </div>
                <button className="btn btn-warning" disabled={isLoading}>
                    {isLoading ? <div className="spinner-border text-light spinner-border-sm" role="status"></div> : "Send"}
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

export default NotifyOwnerComponent;