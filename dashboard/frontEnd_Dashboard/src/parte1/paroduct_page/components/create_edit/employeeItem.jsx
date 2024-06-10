
function EmpoloyeeItem({employee}){
    return (
        <div className="employeeItem">
            <p>{employee.firstName[0]}{employee.lastName[0]}</p>
            <p>{employee.firstName } {employee.lastName}</p>
        </div>
    )
}

export default EmpoloyeeItem;