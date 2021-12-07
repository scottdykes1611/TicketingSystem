let error = false;

function updateAccount() {
    error = false;

    const firstName = getValue("firstName");
    const lastName = getValue("lastName");
    const depName = getValue("depName");
    const location = getValue("location");
    const password = getValue("password");

    if (error === true) {
        alert("Invalid account details");
        return;
    }

    const user = {
        firstName,
        lastName,
        depName,
        location,
        password
    };

    alert("Account updated")

    //A call to the database would be run to update the user
}

function getValue(id) {
    //gets the value from input and checks if value is present
    const element = document.getElementById(id);
    const value = element.value;

    if (value === undefined || value === "") {
        element.classList.add("error");
        error = true;
    } else {
        element.classList.remove("error");
    }

    return value;
}
