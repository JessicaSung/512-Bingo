var passwordHash = require('password-hash');

var password = "prettyKItty8";

var hashedPassword = passwordHash.generate(password);
console.log(hashedPassword);

console.log(passwordHash.verify('prettyKItty8', hashedPassword));
