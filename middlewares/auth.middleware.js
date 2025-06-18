export const authCheck = (req ,res , next) => {
    if(true){
    console.log("this is auth check middleware")
    next()
    }
}