const jwt = require('jsonwebtoken')

const value = {
    name : "chitresh",
    accountnumber : 1231234
}

//creating a token from this
// (value,signing key)

// this token has been generated using this secret , and hence this token can
// only be verified by this secret
const token = jwt.sign(value,"secret");
console.log(token)

//the long string is important