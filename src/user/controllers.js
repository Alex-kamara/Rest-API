const jwt = require('jsonwebtoken');
const User = require("./model");

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create(req.body); //req.body is an object that contains k/v pairs that match my user model
        const token = jwt.sign({id: newUser._id}, process.env.SECRET); //sign method creates a token with object payload hidden in it
        console.log(token)
        res.send({ user: newUser, token });
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};

exports.login = async (req, res) => {
    try {
        // const user = await User.findOne({
        //     username: req.body.username,
        //     password: req.body.password,
        // });
        console.log("In login" + req.user);
        if (!req.user) {
            throw new Error("Incorrect credentials");
        } else {
            res.send({ user: req.user });
        }
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};

exports.listUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            throw new Error("No user found");
        } else {
            res.send({ user });
        }
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};

// R - Read
// FindAll Users - request, response
exports.findAll = async (req, res) => {
    // This this - because im a sensible developer
    try {
      // find User object in body
    const users = await User.find(req.body);
      // If User is in db
    if (!users) {
        // Throw this at ya
        throw new Error("User not found");
        //  else send the user responce
    } else {
        res.send({ users });
    }
      // sensible developer
    } catch (error) {
    console.log(error);
    res.send({ error });
    }
};

  // R - findUser - one user {parameters}
exports.findUser = async (req, res) => {
    // try this - sensible developer
    try {
      // a const dev var findOne({ parameters })
    const users = await User.findOne({ username: req.params.username });
      // if User in not in db
    if (!users) {
        // User doesnt match password err
        throw new Error("Incorrect credentails");
        // does match send user
    } else {
        res.send({ users });
    }
      //  Sensible dev
    } catch (error) {
    console.log(error);
    res.send({ error });
    }
};

  // U - Update a users - request, response
exports.updateUser = async (req, res) => {
    // try ...
    try {
      // dev const var userEdit - User object in body and user obect updates
    const userEdits = await User.updateOne(
        req.body.filterObj,
        req.body.updateObj
    );
      // rsen user objecj as response
    res.send({ user: userEdits });
      //  catch ...
    } catch (error) {
    console.log(error);
    res.send({ error });
    }
};

  // D - Delete a User, request, response
exports.deleteUser = async (req, res) => {
    // trey ...
    try {
      // const dev var delete one metjod with parameters {userObj}
    const removeUser = await User.deleteOne({ username: req.params.username });
      // send userObject as response
    res.send({ user: removeUser });
      //  catch err sensible dev etc etc
    } catch (error) {
    console.log(error);
    res.send({ error });
    }
};