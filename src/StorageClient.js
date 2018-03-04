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
function getAuthToken(){
  return   window.localStorage.todoAccessToken || window.sessionStorage.todoAccessToken
}
module.exports={
  saveAuthToken,
  deleteAuthToken,
  getAuthToken
}
