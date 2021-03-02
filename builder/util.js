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

// kebab-case（短横线命名）转换 big camel-cased (大驼峰式)
function cpNameTransfer(name) {
    if(!isNaN(name) || !isNaN(name[0])){
        console.log('error: 组件名必须是非数字并且第一个字符不能为数字');
        return
    }   
    let nameArr = [];
    if (name.indexOf("-") >= 0) {
        nameArr = name.split("-");
        for (let i = 0; i < nameArr.length; i++) {
            nameArr[i] = nameArr[i].substring(0, 1).toUpperCase() + nameArr[i].substring(1);
        }
    } else {
        nameArr[0] = name.substring(0, 1).toUpperCase() + name.substring(1);
    }
    return nameArr.join("");
}

// big camel-cased (大驼峰式) 转换 kebab-case（短横线命名）
function bigCamelCaseToKebabCase(name) {
    if(!isNaN(name) || !isNaN(name[0])){
        console.log('error: 组件名必须是非数字并且第一个字符不能为数字');
        return
    }  
    var temp = name.replace(/[A-Z]/g, function (match) {	
		return "-" + match.toLowerCase();
  	});
  	if(temp.slice(0,1) === '-'){ //如果首字母是大写，去掉最前面的横线
  		temp = temp.slice(1);
  	}
	return temp;
}

module.exports = {
    dirListInDir,
    rmdirSync,
    cleanEmptyInArray,
    cpNameTransfer,
    bigCamelCaseToKebabCase
};