import { createError } from "../utils/createError.utils.js"


export const listUser = (req, res , next )=>{
    try {
        // 1. check email
        if(true){
            createError(400, "Email already exist!!!" )
            // throw new Error("Email already exist!!!")
        }else{
            throw new Error("Password is In valid !!!!")
        }

        res.json({ message : " this is List all user"})
    } catch (error) {
        next(error)
    }
    
}


export const readUser = (req , res) =>{
    res.json({ messege : " this is read user"})
}

export const createUser = (req , res) =>{
    res.json({ messege : " this is create user"})

}

export const updateRoleUser = (req , res ) =>{
    const {id} = req.params
    console.log(id)
    res.json({ messege : " this is update user"})
}

export const deleteUser = (req , res ) =>{
    const {id} = req.params
    console.log(id)
    res.json({ messege : " this is delete user"})
}