const { Router } = require("express"); // Import Router method only from express
const { signUp, listUser, login, updateUser, deleteUser  } = require("./controllers") //import only signUp from controllers file
const { hashPass, comparePass, tokenCheck } = require("../middleware");
const userRouter = Router(); //create a router that can have endpoints added to it

userRouter.post("/user", hashPass, signUp); //defining a post request on /user path, that calls the signUp controller
userRouter.post("/login", comparePass, login); // defining a post request on /login path, that calls the login controller
userRouter.get("/token", tokenCheck, login); //defining a post request on /token path, that calls both token and login
userRouter.get("/user/:username", listUser); 
userRouter.patch("/user", updateUser); // defining a patch request on /user path
userRouter.delete("/user/:username", deleteUser); // defining a delete request on /user path
userRouter.post("/login", comparePass, login); //defining a post request on /login path, that calls the login controller

module.exports = userRouter;