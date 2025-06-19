import { createError } from "../utils/createError.utils.js"
import jwt from "jsonwebtoken"

export const authCheck = (req ,res , next) => {
    try {
        // TODO list
        /*
        1. check header
        2. split token bearer
        3. verify token JWT
        4. create req.user
        */
        
        // 1. check header
        const header = req.headers.authorization // bearer token
        // console.log(header)
        if(!header){
            createError(401 , "Token is missing!!")
        }

        // 2. split token        
        const token = header.split(' ')[1] // ส่งมาเป็น "bearer [token] เลยต้อง split ช่องว่างออก"
        // console.log(token)

        // 3. verify token
        jwt.verify(token , process.env.SECRET_KEY , (error , decode) => { // decode = payload ที่ใส่มา จาก json respose ของ auth , function ข้างหลัง คือ ส่วนที่จะ return ออกมาคือ error, decode
            // console.log(error)
            // console.log(decode)
            if(error){
                createError(401 , "Token is invalid")
            }

            //4. create req.user
            req.user = decode
            next()
        })

        
    


    } catch (error) {
        next(error)
    }
}