import Loader from "../components/Loader";

export default function ColorsPage() {
    return (
        <div className="page">
            <h1>Colors</h1>
            <h2>Use the Colormind API</h2>

            <div className="container">
                {false ? (
                    <>
                        <p>...</p>
                    </>
                ) : (<Loader />)}
            </div>

            <div className="button-container"> 
                <button className={`primary`} onClick={() => {}}>New colors</button>
            </div>
        </div>
    )
}