import { createError } from "../utils/createError.utils.js"
import prisma from "../config/prisma.js"

export const listUser = async (req, res, next) => {
    try {
        const user = await prisma.user.findMany({
            omit : { // omit คือเอา อันที่ไม่อยากให้ fetch ออก
                password : true
            }
        })
        res.json({ 
            message: " this is List all user" ,
            result :  user // key ควรจะต้องเหมือนกันทั้งระบบ เพื่อให้ได้ค่าเดียวกันตอนเรียกบน frontend
        })
    } catch (error) {
        next(error)
    }

}

export const updateRoleUser = async (req, res, next) => {
    try {
        // 1. read params => id & body => user
        const {id} = req.params
        const {role} = req.body
        console.log( id , role )

        // 2. update to DB
        const user = await prisma.user.update({
            where : {
                id: Number(id) // string to number ตรงนี้
            },
            data : {
                role : role
            }
        })
        res.json({ messege: ` Update Role ${user.name}` })
    } catch (error) {
        next(error)

    }

}

export const deleteUser = async (req, res, next) => {
    try {
        // 1, read params => id
        const { id } = req.params
        const user = await prisma.user.delete({
            wherer : {id : Number(id)}
        })
        res.json({messege: "Delete success" })
    } catch (error) {
        next(error)
    }

}

export const getMe = async (req , res ,next ) => {
    try {
        const {id} = req.user
        console.log(id)
        const user = await prisma.user.findFirst({
            where : { id : Number(id)},
            omit : { password : true}
        })
        res.json({result: user })
        
    } catch (error) {
        next(error)
        
    }
}


export const readUser = (req, res) => {
    res.json({ messege: " this is read user" })
}

export const createUser = (req, res) => {
    res.json({ messege: " this is create user" })

}

