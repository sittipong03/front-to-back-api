import express, { json } from "express"
import cors from "cors"
import morgan from "morgan"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"


const PORT = 8000
const app = express()

// basic middlewares
app.use(cors()) // Allow cross domains
app.use(morgan('dev')) // morgan for manage error , show log
app.use(express.json()) // for read body


// Routing GET , POST , PUT , PATCH , DELETE

app.use("/api", userRouter)
app.use("/auth" , authRouter)

// app.get("/" , (req , res )=>{
//     //code body
//     res.json({ msg : "connect"})
// })



// start server
app.listen(PORT, () => console.log(`running server http://localhost:${PORT}`)
)
