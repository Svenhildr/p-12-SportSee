import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Layout from "./routes/layout";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/profil/:userId" element={<Home />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
