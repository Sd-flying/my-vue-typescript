/**
 * 校验 包括中文字、英文字母、数字和下划线
 * 登录账号校验
 */
export function validateAccount(rule, value, callback) {
    let acount = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
    if (value && (!(acount).test(value))) {
        callback(new Error('账号不符合规范'))
    } else {
        callback()
    }
}

/**
 * IP地址校验
 */
// export function ipAddress(rule, value, callback) {
//   if (value && '...' === value) {
//     callback(new Error('请输入IP地址'))
//   }
//   if (value && !(/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/).test(value)) {
//     callback(new Error('IP地址不符合规范'))
//   } else {
//     callback()
//   }
// }

/**
 * 手机号码校验
 */
export function phoneNumber(rule, value, callback) {
    if (value && (!(/^[1][34578]\d{9}$/).test(value) || !(/^[1-9]\d*$/).test(value) || value.length !== 11)) {
        callback(new Error('手机号码不符合规范'))
    } else {
        callback()
    }
}

/**
 * 电话号码校验
 */
export function telephoneNumber(rule, value, callback) {
    if (value && (!(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/).test(value))) {
        callback(new Error('电话号码不符合规范'))
    } else {
        callback()
    }
}

/**
 * 邮箱校验
 */
export function emailValue(rule, value, callback) {
    let temp = /^[\w.-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/
    // let tempOne = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
    if (value && (!(temp).test(value))) {
        callback(new Error('邮箱格式不符合规范'))
    } else {
        callback()
    }
}

/**
 * 身份证号码校验
 */
export function idCard(rule, value, callback) {
    if (value && (!(/\d{17}[\d|x]|\d{15}/).test(value) || (value.length !== 15 && value.length !== 18))) {
        callback(new Error('身份证号码不符合规范'))
    } else {
        callback()
    }
}

/**
 * 正整数校验
 */
export function integerP(rule, value, callback) {
    if (value && !(/^[1-9]\d*$/).test(value)) {
        callback(new Error('只能填写正整数'))
    } else {
        callback()
    }
}

/**
 * 正数校验
 */
export function integerP2(rule, value, callback) {
    if (value && !(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/).test(value)) {
        callback(new Error('只能填写正整数或小数'))
    } else {
        callback()
    }
}

/**
 * 负整数校验
 */
export function integerN(rule, value, callback) {
    if (value && !(/^-[1-9]\d*$/).test(value)) {
        callback(new Error('只能填写负整数'))
    } else {
        callback()
    }
}

/**
 * 英文字符校验
 */
export function enText(rule, value, callback) {
    // let a = '',
    //   arr = value.split(" ")
    // for (let i = 0; i < arr.length; i++) { //删除行内空格
    //   a += arr[i];
    // }
    if (value && !(/^[A-Za-z]+$/).test(value)) {
        callback(new Error('只能填写英文字符'))
    } else {
        callback()
    }
}

/**
 * 中文字符英文字符校验
 */
export function ChEnText(rule, value, callback) {
    if (value && !(/^[A-Za-z0-9]+$/).test(value)) {
        callback(new Error('只能填写数字和英文字符'))
    } else {
        callback()
    }
}

/**
 * 中文字符校验
 */
export function cnText(rule, value, callback) {
    // let a = '',
    //   arr = value.split(" ")
    // for (let i = 0; i < arr.length; i++) { //删除行内空格
    //   a += arr[i];
    // }
    if (value && (/[^\u4e00-\u9fa5]/).test(value)) {
        callback(new Error('只能填写中文字符'))
    } else {
        callback()
    }
}

/**
 * 只能输入英文或者数字
 */
export function enOrnunText(rule, value, callback) {
    if (value && !(/^[A-Za-z0-9]+$/).test(value)) {
        callback(new Error('只能填写英文或者数字'))
    } else {
        callback()
    }
}

/**
 * 20位数字国标编码校验，且为正整数
 */
export function validateDeviceNo(rule, value, callback) {
    if (value && !(/^[1-9]\d*$/).test(value)) {
        callback(new Error('只能填写正整数'))
    } else {
        if (!/^[0-9]{20}$/.test(value)) {
            callback(new Error('请输入20位数字的编码！'));
        } else {
            callback();
        }
    }
}

/**
 *校验电脑Mac地址
 *以xx-xx-xx-xx-xx-xx的形式输入（xx为16进制数字）
 */
export function validateMac(rule, value, callback) {
    let temp = /[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}/;
    if (!temp.test(value)) {
        callback(new Error('请输入xx-xx-xx-xx-xx-xx形式的MAC地址！'));
    } else {
        callback();
    }
}

/**
 * 校验地址代码或者分组代码
 */
export function validateCode(rule, value, callback) {
    let num = /^[1-9]\d*$/
    if (value && !(num).test(value)) {
        callback(new Error('只能填写正整数'))
    } else {
        let codeLen = value.toString().length
        console.log(codeLen)
        if (codeLen > 0 && codeLen % 3 !== 0) {
            callback(new Error('输入的长度必须是3的倍数'))
        } else if (codeLen > 18) {
            callback(new Error('输入的长度不能超过18位,请重新输入'))
        } else {
            callback()
        }
    }
}

/**
 * 校验字符长度
 */
export function validateLength(rule, value, callback) {
    let codeLen = value.toString().length
    if (codeLen > 18) {
        callback(new Error('输入的长度不能超过20位,请重新输入'))
    } else {
        callback()
    }
}

/**
 * 校验简要案情的字数不超过50个
 */
export function simpleCase(rule, value, callback) {
    let codeLen = value.toString().length
    if (codeLen < 50) {
        callback(new Error('字数不能少于50个,请重新输入'))
    } else {
        callback()
    }
}

/**
 * 校验简要案情的字数不超过5个
 */
export function maxFive(rule, value, callback) {
    let codeLen = value.toString().length;
    if (codeLen > 5) {
        callback(new Error('字数不能超过5个,请重新输入'))
    } else {
        callback()
    }
}

/**
 * 数字 ,两位
 */
export function validateTwoNum(rule, value, callback) {
    let temp = /^[1-9]{2}$/;
    if (!temp.test(value)) {
        callback(new Error('请输入两位正整数！'));
    } else {
        callback();
    }
}

/**
 * 校验经度是否符合规范
 *
 */
export function checkLongitude(rule, value, callback) {
    let longrg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
    if (!longrg.test(value)) {
        callback(new Error('经度整数部分为0-180,小数部分为0到6位!'));
    } else {
        callback();
    }
}

/**
 * 校验纬度是否符合规范
 *
 */
export function checkLatitude(rule, value, callback) {
    var latreg = /^(-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
    if (!latreg.test(value)) {
        callback(new Error('纬度整数部分为0-90,小数部分为0到6位!'));
    } else {
        callback();
    }
}

/**
 * 设置只能输入数字，其他的按键屏蔽
 */
export function numberValidate(e) {
    let patt = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
    if (!patt.test(e.key)) {
        if ((e.keyCode === 8) || (e.keyCode === 10) || (e.keyCode === 190)) {
            e.returnValue = true;
            return false
        }
        e.returnValue = false;
    }
}

