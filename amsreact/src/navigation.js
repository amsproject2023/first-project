import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./ams1header";
import AboutUs from "./ams3about";
import App from "./App";

const Navigation = ()  => {
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/about" element={<AboutUs/>}/>
        </Routes>
        </BrowserRouter>
        </>



    );
}
export default Navigation;