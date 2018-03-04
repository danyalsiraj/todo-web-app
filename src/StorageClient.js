function saveAuthToken(authToken,rememberMe){
  console.log("asdasdasd",rememberMe);
  if(rememberMe){
    window.localStorage.todoAccessToken=authToken
  }else{
    window.sessionStorage.todoAccessToken=authToken
  }
}
function deleteAuthToken(){
    window.localStorage.removeItem('todoAccessToken')
    window.sessionStorage.removeItem('todoAccessToken')
}
module.exports={
  saveAuthToken,
  deleteAuthToken
}
