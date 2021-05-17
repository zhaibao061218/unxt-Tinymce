export default function ({ route, req, res, redirect, $cookies }) {
    let UserId = $cookies.get("UserId") || 0;
    if(UserId == 0){
        //跳转至登入页
        redirect('/user/login')
    }
}