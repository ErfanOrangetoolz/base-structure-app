export const CheckAuth = () => {
    /* need to implement cookie */
    return null;
}

/* 
first check user basic info (token, package expire info) into reducer,
    if available then return true,
    else need to check into cookie,
        if available then return true
default return false
*/
/* 
basic info for user:
    token,
    package expire date,
    remain user,
    remain client,
    remain data,
    user info: name, email, number, image, employee id
*/