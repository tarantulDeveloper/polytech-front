import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import ContactPage from "./Pages/contact/ContactPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
