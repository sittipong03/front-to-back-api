import prisma from "../config/prisma.js"
import { createError } from "../utils/createError.utils.js"
import bcrypt, { hash } from "bcryptjs"
import jwt from "jsonwebtoken"



export const register = async (req, res , next) => {
    // TODO
    /*
    0. validate with yup
    1. Check body
    2. Check Email in DB
    3. Ecrypt Password -> bcryptjs
    4. write to DB -> prisma
    5. Response 
    */
    try {
        // step 1 check body
        console.log(req.body)
        const { email, password, name } = req.body
        // step 2 check email
        const user = await prisma.user.findFirst({
            where: {email : email}
        })
        console.log(user)
        if(user){ //เช็คว่ามี user แล้วหรือเปล่า
            createError(400,"Email already exist")
        }

        //step 3 Encrypt password
        const hashPassword = bcrypt.hashSync(password , 10) // hashSync จะ ไม่ต้อง async await เหมือน hash ปกติ
        console.log(hashPassword)

        //step 4 write to DB
        const result = await prisma.user.create({
            data : {
                email : email,
                password : hashPassword,
                name : name
            }
        })
        //step 5 response
        res.json({ message: `Register ${result.name} Success` })

    } catch (error) {
        next(error)
    }
}

export const login = async (req, res ,next) => {
    // TODO
    /*
    1. validate body
    2. Check body
    3. Check Email in DB
    4. Check password
    5. Create token
    6. Response 
    */
   try {
    //step 2 check body
    const {email , password} = req.body

    //step 3 check email
    const user = await prisma.user.findFirst({
        where : {email : email}
    })
    if(!user){
        createError(400 , "Email or Password is Invalid!!!")
    }

    //step 4 check password 
    const checkPassword = bcrypt.compareSync(password , user.password)
    if(!checkPassword){
        createError(400 , "Email or Password is Invalid!!!")
    }
    //step 5 generate token

    const payload = {
        id : user.id,
        role : user.role
    }
    const token = jwt.sign( payload , process.env.SECRET_KEY , {expiresIn : "1d"})

    res.json({ 
        message: `Welcome ${user.name}` ,
        payload : payload,
        token : token
    })
   } catch (error) {
    next(error)
   }
    
}