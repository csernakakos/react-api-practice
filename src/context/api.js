import { getData } from "../api/activity";
import { createContext, useEffect, useState, useCallback } from "react";

const ApiContext = createContext();


function ApiProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [activity, setActivity] = useState(null);


    const fetchActivity = useCallback(() => {
        if (!activity) {
            setIsLoading(true);
            setTimeout(() => {
                getData("http://www.boredapi.com/api/activity/", setActivity);
                setIsLoading(false);
            }, 900);
        }
        
    }, []);

    const refetchActivity = () => {
        setActivity(() => {
            return null;
        });
        setIsLoading(true);
            setTimeout(() => {
                getData("http://www.boredapi.com/api/activity/", setActivity);
                setIsLoading(false);
            }, 900);
    }


    const valuesToShare = {
        isLoading,
        activity,
        fetchActivity,
        setActivity,
        refetchActivity,
    }

    return (
        <ApiContext.Provider value={valuesToShare}>
            {children}
        </ApiContext.Provider>
    )
}

export { ApiProvider };
export default ApiContext;