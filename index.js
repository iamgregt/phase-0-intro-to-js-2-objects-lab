let employee = {
    "name": "Greg",
    "streetAddress": "Curtis St"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployees = {...employee};
    newemployees[key] = value;

    return newemployees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    let dEmployee = {...employee};
    delete dEmployee[key];
    return dEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}