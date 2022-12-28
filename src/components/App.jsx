import { GeneralGrid } from "./GeneralGrid";
import styles from "./App.module.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

export function App() {
    return (
        <Router>
            <header>
                <h1 className={styles.title}>Movies</h1>
                <Link to="/movie">Movie</Link>
                <Link to="/">Home</Link>
            </header>
            <main>
                <Routes>
                    <Route path="/movie" element="Movie" />
                    <Route path="/" element={<GeneralGrid />} />
                </Routes>
            </main>
        </Router>
    );
}