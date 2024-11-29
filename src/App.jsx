import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Layout from "./routes/layout";
import ErrorPage from "../src/Views/ErrorPage/ErrorPage";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/profil/:userId" element={<Home />} errorElement={<ErrorPage />} />
                        <Route path="*" element={<ErrorPage />}></Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
