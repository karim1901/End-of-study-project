import React from "react";
import BestEmployeeList from "./BestEmployeeList";


function BestEmployees({bestEmployee}){
    return <div className="bestEmployees">
        <p>The Best Employees</p>
        <BestEmployeeList bestEmployee={bestEmployee}/>
    </div>
}

export default BestEmployees