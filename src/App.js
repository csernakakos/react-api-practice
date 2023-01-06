import { ApiProvider } from "./context/api";
import { ActivitiesPage, ColorsPage, EmojisPage, HomePage } from "./pages/index";
import Route from "./components/Route";
import NavBar from "./components/NavBar.js";
import "./App.css";

export default function App() {
    return (<div className="app">
        
        <NavBar />

        <main>
            <Route path="/"><HomePage /></Route>

            <ApiProvider>
                <Route path="/activities"><ActivitiesPage /></Route>
                <Route path="/colors"><ColorsPage /></Route>
                <Route path="/emojis"><EmojisPage /></Route>
            </ApiProvider>
        </main>
    </div>)
}