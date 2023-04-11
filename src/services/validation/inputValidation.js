export function onlyNumberKey(text) {
              
    // Only ASCII character in that range allowed
    if (!text.match(/^\d+/)) return false;
    return true;
}

export function validatePassWord(pwd) {
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(pwd)){
        // valid password
        return {status: "success"};
    } else {
        return {status: "warning", msg: "Mật khẩu phải có độ dài tối thiểu là 7 chữ\nbao gồm chữ hoa, chữ thường,\nsố và kí hiệu đặc biệt"}
    }
}