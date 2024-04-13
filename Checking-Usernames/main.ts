//This program has been made to check if a particular username is availible for registering or not.

const currentUsers = ["ahmad","ali","amir","almeer","altaf"];
const newUsers = ["KHAN","akbar","Ahmad","aMIr","sheikh"];
newUsers.forEach(newUsers =>{
    let newUserlower = newUsers.toLowerCase();
    let userNameTaken = currentUsers.some(currentUsers => currentUsers.toLowerCase() === newUserlower);
    if(userNameTaken){
        console.log(`${newUsers} needs to choose another username as this one is taken.`)
    }
    else{
    (console.log(`${newUsers} is an available username.`));
    currentUsers.push(newUsers);
    }
    
})
console.log("The following is the updated list of the current users: ");
console.log(currentUsers);