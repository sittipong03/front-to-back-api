


export const listUser = (req, res )=>{
    res.json({ message : " this is List all user"})
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