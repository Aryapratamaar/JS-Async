const userDB = { username: "joko", password: "rahasia", role: "admin" };

//cek status login untuk menjalankan getRole & getMenu
let loginStatus = false;

//#region No.1 
function loginUser(inputUsername, inputPassword, callback) {
  setTimeout(() => {
    if(inputUsername === "joko" && inputPassword === "rahasia"){
        loginStatus = true;
        callback(userDB);
    }
    else{
        console.log("username atau password salah");
    }
  }, 500);
}

loginUser("joko", "rahasia", function (user) {
    console.log("UserDB :",user);
    console.log("login sukses");
});

//#endregion


//#region No.2
function getRole(user, callback) {
    setTimeout(() => {
        if(loginStatus === true){
            callback(user.role);
        }
    }, 500);
}

getRole(userDB, function (user) {
    console.log("Role User :",user);
});

//#endregion


//#region No.3
function getMenu(user, callback) {
    let menu = "Dashboard"

    setTimeout(() => {
        if(loginStatus === true){
            if(userDB.role === "admin"){
                menu = menu + " " + user.role;
                callback(menu);
            }
            else{
                callback(menu); 
            }
        }
    }, 500);
}

getMenu(userDB, function(user){
    console.log(user);
});

//#endregion