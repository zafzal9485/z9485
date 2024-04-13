//This program has been made to check if a particular username is availible for registering or not.
var currentUsers = ["ahmad", "ali", "amir", "almeer", "altaf"];
var newUsers = ["KHAN", "akbar", "Ahmad", "aMIr", "sheikh"];
newUsers.forEach(function (newUsers) {
    var newUserlower = newUsers.toLowerCase();
    var userNameTaken = currentUsers.some(function (currentUsers) { return currentUsers.toLowerCase() === newUserlower; });
    if (userNameTaken) {
        console.log("".concat(newUsers, " needs to choose another username as this one is taken."));
    }
    else {
        (console.log("".concat(newUsers, " is an available username.")));
        currentUsers.push(newUsers);
    }
});
console.log("The following is the updated list of the current users: ");
console.log(currentUsers);
