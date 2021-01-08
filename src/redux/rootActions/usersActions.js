const selectUser =(user) =>{
console.log("Your clicked on user: ",user.first)
    return{
       type:'USER_SELECTED',
       payload:user
    }
}

export default selectUser