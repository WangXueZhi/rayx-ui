const fs = require("fs");

// 文件操作

/**
 * 返回指定目录中文件夹列表
 * @param {String} dir 目录路径
 * @param {function} cb 删除后回调
 * @return 目录列表数组
 */
const dirListInDir = function (pattern) {
    let pa = fs.readdirSync(pattern);
    let dirList = [];
    pa.forEach(function (ele, index) {
        var info = fs.statSync(pattern + "/" + ele);
        if (info.isDirectory() && ele != "Common") {
            dirList.push(ele)
        }
    })
    return dirList;
}

/**
 * 删除非空目录
 * @param {String} pattern 目录路径
 */
const rmdirSync = (function () {
    function iterator(url, dirs) {
        var stat = fs.statSync(url);
        if (stat.isDirectory()) {
            dirs.unshift(url);//收集目录
            inner(url, dirs);
        } else if (stat.isFile()) {
            fs.unlinkSync(url);//直接删除文件
        }
    }
    function inner(path, dirs) {
        var arr = fs.readdirSync(path);
        for (var i = 0, el; el = arr[i++];) {
            iterator(path + "/" + el, dirs);
        }
    }
    return function (dir, cb) {
        cb = cb || function () { };
        var dirs = [];

        try {
            iterator(dir, dirs);
            for (var i = 0, el; el = dirs[i++];) {
                fs.rmdirSync(el);//一次性删除所有收集到的目录
            }
            cb()
        } catch (e) {//如果文件或目录本来就不存在，fs.statSync会报错，不过我们还是当成没有异常发生
            e.code === "ENOENT" ? cb() : cb(e);
        }
    }
})();

// 数组

/**
 * 清除一个数组中值为空的项
 * @param {Array} array 
 * @return 处理后的数组
 */
const cleanEmptyInArray = function (array) {
    let [...newArray] = array;
    const count = newArray.length;
    for (let i = count - 1; i >= 0; i--) {
        if (newArray[i] === "" || newArray[i] === null || newArray[i] === undefined) {
            newArray.splice(i, 1);
        }
    }
    return newArray;
}

module.exports = {
    dirListInDir,
    rmdirSync,
    cleanEmptyInArray
};