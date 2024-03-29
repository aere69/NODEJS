const path = require('path');

//path to the root directory
//The process.mainModule property provides an alternative way of retrieving require.main. 
//The difference is that if the main module changes at runtime, require.main may still refer 
//to the original main module in modules that were required before the change occurred. 
//Generally, it's safe to assume that the two refer to the same module.
module.exports = path.dirname(require.main.filename);
