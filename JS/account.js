let error = false;

//this would be fetched from the database
const user = {
    firstName: "John",
    lastName: "Doe",
    depName: "Accounting",
    location: "Room 3B",
    password: "password"
};

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

    alert("Account updated");

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

function displayDetails() {
    const findAndDisplay = (name) => {
        const element = document.getElementById(name);

        element.value = user[name];
    };

    const names = [
        "firstName",
        "lastName",
        "depName",
        "location",
        "password"
    ];

    names.forEach((name) => findAndDisplay(name));
}

displayDetails();
