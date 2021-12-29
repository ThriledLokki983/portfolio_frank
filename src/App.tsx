import { Route, Routes } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Layout from "./components/Layout/layout.component";
import About from "./components/About/about.component";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/about" element={<h1>About</h1>} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
