import Loader from "../components/Loader";

export default function EmojisPage() {
    return (
        <div className="page">
            <h1>Emojis</h1>
            <h2>Use EmojiHUB</h2>

            <div className="container">
                {false ? (
                    <>
                        <p>...</p>
                    </>
                ) : (<Loader />)}
            </div>

            <div className="button-container"> 
                <button className={`primary`} onClick={() => {}}>...</button>
            </div>
        </div>
    )
}