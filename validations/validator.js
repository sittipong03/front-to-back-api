// validate with yup
//////////////////////////////////
////
//// this is middleware 
////
//////////////////////////////////


import { object, ref, string } from "yup"

export const registerSchema = object({
    email: string().email("Incorrect Email").required("Please enter Email"),
    name: string().min(3, "Name ต้องมากกว่า 3 ตัวอักษร"),
    password: string().min(6, "Password ต้องมากกว่า 6 ตัวอักษร"),
    confrimPassword: string().oneOf([ref("password"), null], "Password ไม่ตรงกัน")
})

export const loginSchema = object({
    email: string().email("Incorrect Email").required("Please enter Email"),
    password: string().min(6, "Password ต้องมากกว่า 6 ตัวอักษร"),
})

export const validate = (schema) => async (req, res, next) => { // finction ที่เรียก function 

    try {
        // console.log("this is validate" , req.body)
        await schema.validate(req.body, { abortEarly: false })
        next()
    } catch (error) {
        // ถ้า log error จะถูกเก็บอยู่ในรูปแบบของ array ที่ชื่อ errors  
        //       value: '123',
        //       path: 'confrimPassword',
        //       type: 'oneOf',
        //       params: [Object],
        //       errors: [Array],/////
        //       inner: [],
        //       [Symbol(Symbol.toStringTag)]: 'Error'
        //     }
        //   ],
        //   [Symbol(Symbol.toStringTag)]: 'Error'}
        // ตรงนี้เป็นการ map error / join error ออกมาเพื่อเรียงไว้ใส่ error ตอนแจ้งกลับ

        const errMsg = error.errors.map((item) => item)
        const errTxt = errMsg.join(",")
        console.log(errTxt)
        const mergerError = new Error(errTxt)
        next(mergerError)
    }

}