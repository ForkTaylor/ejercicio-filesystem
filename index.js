//Imports de los módulos
//fs y path
const fs = require('fs/promises');
const path = require('path');

const getUsers = async() => {
    
    try {
        //Leer el archivo
        const pathUsers = path.resolve("users.json");
        const users = await fs.readFile(pathUsers, {encoding: "utf8"});
        //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
        return JSON.parse(users)

    } catch (error) {

        return error;

    }
    
};

const addUser = async (userObj) => {

    try {
        //leer el archivo 
        const users = await getUsers();

        //agregar el usuario en el arreglo
        users.push(userObj);

        //sobreescribir el arreglo en el archivo
        const pathUsers = path.resolve("users.json");
        await fs.writeFile(pathUsers, JSON.stringify(users));

        //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
        //que acabas de agregar en el arreglo
        return userObj;

    } catch (error) {

        return error;

    }
};

const clearUsers = async () => {

    try {
        //Vaciar el arreglo y sobreescribir el archivo
        const pathUsers = path.resolve("users.json");
        await fs.writeFile(pathUsers, JSON.stringify([]));

        //Si el proceso se realizó correctamente tendrás que regresar true
        return true;

    } catch(erorr) {
        
        return erorr;

    };

}

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};

