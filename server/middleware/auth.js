import jwt from "jsonwebtoken"; //


//wants to like a post
// clicks the like button => auth middleware (next) => like controller...
const secret = 'test';

const auth = async (req, res, next) => { //next means do something and move to the next thing
  try {
    const token = req.headers.authorization.split(" ")[1]; //this gets the token 
    const isCustomAuth = token.length < 500; //is it our own auth or google. < 500 is our own, > 500 is googles

    let decodedData;

    if (token && isCustomAuth) {       //custum auth
      decodedData = jwt.verify(token, secret); //this verifyl the user
      req.userId = decodedData?.id; //store the user's id if working with our auth token
      
    } else {
      decodedData = jwt.decode(token); // 
      req.userId = decodedData?.sub; // sub is for google's name that differeienvt each user idk 
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;