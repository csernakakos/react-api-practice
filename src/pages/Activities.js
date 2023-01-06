import { useEffect } from "react";
import useApiContext from "../hooks/use-api-context";
import Loader from "../components/Loader";
import "./Page.css";

export default function ActivitiesPage() {
    const {activity, fetchActivity, refetchActivity} = useApiContext();

    useEffect(() => {
        console.log("fetchActivity")
        fetchActivity();
    }, [fetchActivity]);

    return (
        <div className="page">
            <h1>Activities</h1>
            <h2>Find something fun to do</h2>

            <div className="container">
                {activity ? (
                    <>
                        <div className="card">
                            <h3>{activity.activity} <span>| {activity.type}</span></h3>
                            {activity.participants === 1 ? (
                                <p>{activity.participants} person required.</p>
                            ) : (
                                <p>{activity.participants} people required.</p>
                            )}
                            <p>Price: {activity.price}</p>
                        </div>
                    </>
                ) : (<Loader />)}
            </div>

            <div className="button-container"> 
                <button className={`primary ${!activity ? "disabled" : ""}`} onClick={() => {refetchActivity()}}>New activity</button>
            </div>
        </div>
    )
}