import React from "react";
import { Routes, Route } from "react-router-dom";
import AddExpenditure from "./pages/AddExpenditure";
import Expenditure from "./pages/Expenditure";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<AddExpenditure/>} />
            <Route path="/" element={<Expenditure/>} />
           
        </Routes>
    )
};

export default Routing;