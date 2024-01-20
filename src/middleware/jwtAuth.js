import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  try{
    const { jwtToken } = req.cookies;
    jwt.verify(jwtToken, "CodingNinjas2016", (err, decoded) => {
      if (err) res.status(401).json({ success: false, msg: "login to continue" });
      else {
        const userPayload = decoded;
        req.userId = userPayload.userId;
        next();
      }
    });
  }catch(err){
    console.log(err);
    console.log("Hi");
    res.status(401).json({ success: false, msg: "login to continue" })
  }
};

export default jwtAuth;
