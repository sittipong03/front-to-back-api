export const createError = (code, msg) => {
  // code body
  // เป็นการสร้าง instance obj ใหม่จาก class error แล้วเติมสมาชิกที่ชื่อ code เข้าไปใน obj เพื่อไปแสดงด้วย
  const error = new Error(msg);
  error.code = code;
  throw error;
};


    

// from this
// throw เหมือนกับ return เป็นการโยนค่าออกไปซักที่นึงอันนี้คือโยนเข้าไปที่คลาส error ที่มี
    // try {
    //     // 1. check email
    //     if(false){
    //         throw new Error("Email already exist!!!")
    //     }else{
    //         throw new Error("Password is In valid !!!!")
    //     }

    //     res.json({ message : " this is List all user"})
    // } catch (error) {
    //     next(error)
        
    // }
