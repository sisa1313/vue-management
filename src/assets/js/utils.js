// 定义全局函数
export default {
  install (Vue, options) {
    // 验证域名
    Vue.prototype.judgingDomainName = function () {
      let host = document.domain
      let port = window.location.port
      let obj = {}
      if (host.indexOf('suixingbsb') !== -1 || port === '8062') {
        return obj
      } else {
        return obj
      }
    }
    // 验证登录名
    Vue.prototype.isLoginName = function (str) {
      var pattern =  /^[a-zA-Z0-9_]{6,20}$/
      return pattern.test(str)
    }
    // 验证手机号
    Vue.prototype.isCellphone = function (str) {
      var pattern =  /^(?:(?:(?:13[0-9])|(?:14[57])|(?:15[0-35-9])|(?:17[35-8])|(?:18[0-9]))\d{8})|(?:170[057-9]\d{7})$/
      return pattern.test(str)
    }
    // 验证固话
    Vue.prototype.isFixedTelephone = function (str) {
      var pattern =  /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/
      return pattern.test(str)
    }
    // 验证固话 + 手机号
    Vue.prototype.isTelephone = function (str) {
      var pattern =  /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/
      return pattern.test(str)
    }
    // 验证密码长度
    Vue.prototype.isPassword = function (str) {
      var pattern = /^[a-zA-Z0-9_]{6,20}$/
      return pattern.test(str)
    }
    // 验证邮箱
    Vue.prototype.isEmail = function (str) {
      var pattern = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      return pattern.test(str)
    }
    //  验证邮编
    Vue.prototype.isPostCode = function (str) {
      var pattern = /^[0-9][0-9]{5}$/
      return pattern.test(str)
    }
    //  验证正整数
    Vue.prototype.isPositiveInt = function (str) {
      var pattern = /^[1-9]\d*$/
      return pattern.test(str)
    }
    //  验证整数
    Vue.prototype.isParseInt = function (str) {
      var pattern = /^[0-9]\d*$/
      return pattern.test(str)
    }
    //  正浮点数
    Vue.prototype.positiveFloat = function (str) {
      var pattern = /^(?!0+(\.0+)?$)\d+(\.\d+)?$/
      return pattern.test(str)
    }
    //  非负浮点数
    Vue.prototype.notMinusFloat = function (str) {
      var pattern = /^\d+(\.\d+)?$/
      return pattern.test(str)
    }
    //  非负浮点数(带空格)
    Vue.prototype.notMinusFloatN = function (str) {
      if (str === '') {
        return true
      } else {
        var pattern = /^\d+(\.\d+)?$/
        return pattern.test(str)
      }
    }
    //  百分比2位小数
    Vue.prototype.isPercentage2 = function (str) {
      var pattern = /^(((\d|[1-9]\d)(\.\d{1,2})?)|100|100.0|100.00)$/
      return pattern.test(str)
    }
    //  护照
    Vue.prototype.isPassport = function (str) {
      var pattern = /^[a-zA-Z0-9]{3,21}$/
      return pattern.test(str)
    }
    //  港澳通行证和台胞证
    Vue.prototype.isHKMacao = function (str) {
      var pattern = /^[a-zA-Z0-9]{5,21}$/
      return pattern.test(str)
    }
    //  港澳通行证和台胞证
    Vue.prototype.isTaiwan = function (str) {
      var pattern = /^[a-zA-Z0-9]{5,21}$/
      return pattern.test(str)
    }
    //  获取URL问号后的参数值
    Vue.prototype.getQueryString = function (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) {
        return unescape(r[2])
      }
      return null
    }
    // 15位和18位身份证号码的正则表达式
    Vue.prototype.isIDCard = function (idCard) {
      var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
      // 如果通过该验证，说明身份证格式正确，但准确性还需计算
      if (regIdCard.test(idCard)){
        if(idCard.length==18){
          var idCardWi = new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
          var idCardY = new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
          var idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
          for(var i=0;i<17;i++){
            idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
          }
          var idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
          var idCardLast=idCard.substring(17);//得到最后一位身份证号码
          //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
          if(idCardMod==2){
            if(idCardLast=="X"||idCardLast=="x"){
              return true;
            }else{
              return false;
            }
          }else{
            //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
            if(idCardLast==idCardY[idCardMod]){
              return true;
            }else{
              return false;
            }
          }
        }
      }else{
        return false;
      }
    }
    // 验证字母数字中文
    Vue.prototype.isLetterNumChar = function (str) {
      var pattern =  /^[a-zA-Z0-9\u4e00-\u9fa5]+$/
      return pattern.test(str)
    }
    // 验证字母数字
    Vue.prototype.isLetterNum = function (str) {
      var pattern =  /[a-zA-Z0-9]/
      return pattern.test(str)
    }
    //验证字符
    Vue.prototype.illegalChar = function (str) {
      var pattern=/[`~!@#\$%\^\&\*\(\)_\+<>\?:"\{\},\.\\\/;'\[\]]/im
      if(pattern.test(str)){
        return false
      }
      return true
    }
    // 选择排序
    Vue.prototype.selectionSort = function (arr) {
      var len = arr.length
      var minIndex, temp
      for (var i = 0; i < len - 1; i++) {
        minIndex = i
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j                  //将最小数的索引保存
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
      }
      return arr
    }
    // 数组去重
    Vue.prototype.unique = function (arr) {
      const seen = new Map()
      return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
    }
    // 对象数组深拷贝
    Vue.prototype.objDeepCopy = function (source) {
      var sourceCopy = source instanceof Array ? [] : {}
      for (var item in source) {
          sourceCopy[item] = typeof source[item] === 'object' ? this.objDeepCopy(source[item]) : source[item]
      }
      return sourceCopy
    }
    Vue.prototype.trimArray = function (array, name){
      var newList = array.filter((v) => {
        return !v[name]
      })
      return newList
    }
    // 对象转url
    Vue.prototype.urlencode = function (data) {
      var result = []
      for (var key in data){
        var value = value !== '' ? data[key] : ''
        result.push(key + '=' + value)
      }
      return result.join('&')
    }
    // 服务器报错
    Vue.prototype.errorResponse = function (error) {
      if (error.status === 401) {
        this.$message.error('服务器超时, 请重新登录')
        setTimeout(() => {
          this.$router.push({path: '/'})
        }, 3000)
      } else if (error.status === 400) {
        this.$message.error('参数错误, 请联系工程师')
      } else if (error.status === 500) {
        this.$message.error('服务器出错, 请稍后重试')
      } else if (error.status === 504) {
        this.$message.error('客户端请求超时, 请稍后重试')
      }
    }
    Vue.prototype.sessionGet = function (item) {
      return JSON.parse(sessionStorage.getItem(item))
    }
    Vue.prototype.sessionSet = function (item, obj) {
      sessionStorage.setItem(item, JSON.stringify(obj))
    }
    Vue.prototype.sessionRemove = function (item) {
      sessionStorage.removeItem(item)
    }
    Vue.prototype.sessionClear = function () {
      sessionStorage.clear()
    }
    Vue.prototype.setCookie = function (name, value, days) {
        var d = new Date
        d.setTime(d.getTime() + 24*60*60*1000*days)
        window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString()
    }
    Vue.prototype.getCookie = function (name) {
        var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
        return v ? v[2] : null
    }
    Vue.prototype.deleteCookie = function (name) {
        this.setCookie(name, '', -1)
    }
    // 获取员工个人信息
    Vue.prototype.userGetJson = function () {
      // 往localstorage中存值
      let token = this.sessionGet('token')
      this.$http({
        url: '/ees-ent/ent/staff/get',
        method: 'POST',
        body: {endCode: 'ENT'},
        headers: {'x-auth-token': token}
      }).then(function (response) {  // 请求成功回调
        if (response.data.retCode === '200') {
          let data = response.data.data
          this.sessionSet('userId', data.userId)  // 用户ID
          this.sessionSet('userName', data.userName)  // 用户名称
          this.sessionSet('mobile', data.mobile)  // 手机号
          this.sessionSet('userStatus', data.userStatus)  // 用户状态
          this.sessionSet('parentOrgIds', data.parentOrgIds)  // 机构路径
          this.sessionSet('orgId', data.org.orgId)  // 机构编号
          this.sessionSet('orgNo', data.org.orgNo)  // 机构编号orgNo
          this.sessionSet('orgCode', data.org.orgCode)  // 机构缩写
          this.sessionSet('orgName', data.org.orgName)  // 机构信息
          this.sessionSet('deptId', data.dept.deptId)  // 部门ID
          this.sessionSet('deptName', data.dept.deptName)  // 部门名称
          let roleNameArr = []
          if (data.sysUserRoles.length !==0) {
            data.sysUserRoles.forEach((v) => {
              roleNameArr.push(v.roleName)
            })
          }
          this.sessionSet('roleNameStr', roleNameArr.toString())  // 部门名称
        }
      }, function (error) {
        // 请求失败回调
        this.errorResponse(error)
      })
    }
    // 查询企业业务代码
    Vue.prototype.queryBusinessCode = function () {
      // 从localstorage中取值
      let token = this.sessionGet('token')
      this.$http({
        url: '/ees-mst/mst/code/org',
        method: 'POST',
        headers: {'x-auth-token': token}
      }).then(function (response) {  // 请求成功回调
        if (response.data.retCode === '200') {
          let data = response.data.data
          this.sessionSet('LOAN_STATUS', data.LOAN_STATUS)  // 借款状态
          this.sessionSet('LOAN_USE', data.LOAN_USE)  // 借款用途
          this.sessionSet('REIM_STATUS', data.REIM_STATUS)  // 报销状态
          this.sessionSet('REIM_TYPE', data.REIM_TYPE)  // 报销类别
          this.sessionSet('REIM_ITEM', data.REIM_ITEM)  // 费用科目
          this.sessionSet('APPLY_TYPE', data.APPLY_TYPE)  // 事项类型
          this.sessionSet('ADMIN_LVL', data.ADMIN_LVL)  // 行政级别
          this.sessionSet('USER_STATUS', data.USER_STATUS)  // 用户状态
          this.sessionSet('TRANS_STATUS', data.TRANS_STATUS)  // 支付状态
          this.sessionSet('REIM_ITEM', data.REIM_ITEM)  // 报销项目
          this.sessionSet('PROCESS_STATUS', data.PROCESS_STATUS)  // 流程状态
          this.sessionSet('ACCOUNT_TYPE', data.ACCOUNT_TYPE)  // 账户性质
          this.sessionSet('CURRENCY_CODE', data.CURRENCY_CODE)  // 币种
          this.sessionSet('ACCOUNT_STATUS', data.ACCOUNT_STATUS)  // 账户状态
          this.sessionSet('PRODUCT', data.PRODUCT)  // 产品线
          this.sessionSet('PROJECT', data.PROJECT)  // 项目名称
          this.sessionSet('CUSTOMER', data.CUSTOMER)  // 客户名称
          this.sessionSet('CONTRACT', data.CONTRACT)  // 合同名称
          this.sessionSet('INVOICE_TYPE', data.INVOICE_TYPE)  // 发票类型
          this.sessionSet('MODULE_TYPE', data.MODULE_TYPE)  // 模块名称
          this.sessionSet('FUNC_TYPE', data.FUNC_TYPE)  // 模块名称
          this.sessionSet('SEAT_CLASS', data.SEAT_CLASS)  // 飞机座舱
          this.sessionSet('SEAT_CLASS_FLT', data.SEAT_CLASS_FLT)  // 飞机座舱
          this.sessionSet('TRAIN_CLASS', data.TRAIN_CLASS)  // 火车座位
          this.sessionSet('INVOICE_TYPE', data.INVOICE_TYPE)  // 发票种类
          this.sessionSet('INVOICE_SUBJECT', data.INVOICE_SUBJECT)  // 发票摘要
          this.sessionSet('INVOICE_STATE', data.INVOICE_STATE)  // 发票状态
          this.sessionSet('INSURANCE_TYPE', data.INSURANCE_TYPE)  // 航空保险类型
          this.sessionSet('LOGISTIC_COMPANY', data.LOGISTIC_COMPANY)  // 物流公司代码
          this.sessionSet('ORDER_STATE_TYPE', data.ORDER_STATE_TYPE)  // 酒店订单状态
          this.sessionSet('APPLY_RECORD_TYPE', data.APPLY_RECORD_TYPE)  // 消费类型代码
          this.sessionSet('PAY_WAY', data.PAY_WAY)  // 支付方式代码
          this.sessionSet('TRANS_TYPE', data.TRANS_TYPE)  // 交易类型
          this.sessionSet('EXPENSE_SUBJECT', data.EXPENSE_SUBJECT)  // 科目类型
          this.sessionSet('EXPENSE_TYPE', data.EXPENSE_TYPE)  // 消费类型
          this.sessionSet('NODE_EXECUTOR_ID', data.NODE_EXECUTOR_ID)  // 审批人类型
          this.sessionSet('NODE_EXECUTOR_TYPE', data.NODE_EXECUTOR_TYPE)  // 审批岗类型
          this.sessionSet('AGENT_STATUS', data.AGENT_STATUS)  // 代理状态
          this.sessionSet('SEX', data.SEX)  // 性别
          this.sessionSet('BIZ_BLOCK', data.BIZ_BLOCK)  // 业务块
        } else {
          this.$message.error(response.data.retMsg)
        }
      }, function (error) {
        // 请求失败回调
        this.errorResponse(error)
      })
    }
    // 批量导出绝对路径
    Vue.prototype.batchDeriveAbsolutePath = function () {
      // 从localstorage中取值
      let token = this.sessionGet('token')
      this.$http({
        url: '/ees-mst/mst/config/get',
        method: 'POST',
        emulateJSON: true,
        body: {code: 'SYS_REPORT_SERVER_PATH'},
        headers: {'x-auth-token': token}
      }).then(function (response) {  // 请求成功回调
        if (response.data.retCode === '200') {
          this.sessionSet('batchDeriveAbsolutePath', response.data.data)  // 批量导出绝对路径
        } else {
          this.$message.error(response.data.retMsg)
        }
      }, function (error) {
        // 请求失败回调
        this.errorResponse(error)
      })
    }
    // 地区码键值对
    Vue.prototype.areaCodeName = function () {
      // 往localstorage中存值
      let token = this.sessionGet('token')
      this.$http({
        url: '/ees-mst/mst/mstArea/queryCodeAndName',
        method: 'POST',
        body: {},
        headers: {'x-auth-token': token}
      }).then(function (response) {  // 请求成功回调
        if (response.data.retCode === '200') {
          let data = response.data.data
          this.sessionSet('AREA', data.AREA)
        }
      }, function (error) {
        // 请求失败回调
        this.errorResponse(error)
      })
    }
    // 判断参数不存在使用占位符替代
    Vue.prototype.notNV = function (obj, deli, path) {
      var bean = obj
      var args = path.split('.')
      for(var i=0;i<args.length;i++){
        var prop = args[i]
        var val = bean[prop]
        if(!val || val === 0 || val === '0'){
          return deli
        }
        bean = val
      }
      return bean
    }
    // 判断是专用发票还是普通发票
    Vue.prototype.parseCode = function (code) {
      var acat = { Amount: "合计金额", SummaryAmount: "价税合计金额" }
      var alxd = function (a) {
        var b
        var c = "99"
        var b1, b2
        var codes = new Array(
            '144031539110',
            '131001570151',
            '133011501118',
            '111001571071',
            '111001471071',
            '111001471072',
            '111001571072',
            '111001671071',
            '111001671072')
        if (a.length == 12) {
          b1 = a.substring(0, 1)
          b2 = a.substring(10, 12)
          b = a.substring(7, 8)
          if (a.substring(1, 5) == "3100") {
            if (a.substring(7, 10) == "701") {
              c = "10"
              return c
            }
          } else if (a.substring(1, 3) == "33") {
            if (b2 == "18") {
              c = "10"
              return c
            }
          } else if (a.substring(1, 5) == "4403") {
            if ((a.substring(5, 7) == "15" && a.substring(7, 9) == "39")
              || (a.substring(5, 7) == "16" && a.substring(10, 12) == "11")) {
              c = "10"
              return c
            }
          }
          for (var i = 0; i < codes.length; i++) {
            if (a == codes[i]) {
              c = "10"
              return c
            }
          }
          if (c == "99" && b1 == "0" && b2 == "11") {
            c = "10"
            return c
          }
          if (c == "99") {
            if (b == "2") {
              c = "03"
              return c
            } else {
              c = "11"
              return c
            }
          }
        } else if (a.length == 10) {
          b = a.substring(7, 8)
          if (b == 1 || b == 5) {
            c = "01"
          } else if (b == 6 || b == 3) {
            c = "04"
          } else if (b == 7 || b == 2) {
            c = "02"
          }
        }
        return c
      }
      var flag = alxd(code)
      var suc = true
      //查验必填参数
      var isSetAmount = false
      var isSetVCode = false
      var amountCat = acat.Amount
      if (flag == '01' || flag == '02' || flag == '03') {
        isSetAmount = true
        amountCat = acat.Amount
      } else if (flag == '04' || flag == '10' || flag == '11') {
        isSetVCode = true
      } else {
        //99
        suc = false
      }
      return { Success: suc, MustSet: { IsSetAmount: isSetAmount, AmountCat: amountCat, IsSetVCode: isSetVCode } }
    }
    // 金额格式化
    Vue.prototype.fmoney = function (s, n) {
      n = n > 0 && n <= 20 ? n : 2
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""
      var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1]
      var t = ""
      for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? "," : "")
      }
      return t.split("").reverse().join("") + "." + r
    }
    //金额转汉字
    Vue.prototype.changeMoneyToChinese = function (money) {
      var cnNums = new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖") //汉字的数字
      var cnIntRadice = new Array("","拾","佰","仟") //基本单位
      var cnIntUnits = new Array("","万","亿","兆") //对应整数部分扩展单位
      var cnDecUnits = new Array("角","分","毫","厘") //对应小数部分单位
      var cnInteger = "整" //整数金额时后面跟的字符
      var cnIntLast = "圆" //整型完以后的单位
      var maxNum = 999999999999999.9999 //最大处理的数字
      var IntegerNum //金额整数部分
      var DecimalNum //金额小数部分
      var ChineseStr = "" //输出的中文金额字符串
      var parts //分离金额后用的数组，预定义
      if ( money === "" ) {
        return ""
      }
      money = parseFloat(money)
      if ( money >= maxNum ) {
        $.alert('超出最大处理数字')
        return ""
      }
      if ( money === 0 ) {
        ChineseStr = cnNums[0]+cnIntLast+cnInteger
        // ChineseStr = cnNums[0]+cnIntLast
        // document.getElementById("show").value=ChineseStr
        return ChineseStr
      }
      money = money.toString() //转换为字符串
      if (money.indexOf(".") === -1) {
        IntegerNum = money
        DecimalNum = ''
      } else {
        parts = money.split(".")
        IntegerNum = parts[0]
        DecimalNum = parts[1].substr(0,4)
      }
      if ( parseInt(IntegerNum,10) > 0 ) {//获取整型部分转换
        var zeroCount = 0
        var IntLen = IntegerNum.length
        for (var i = 0; i < IntLen; i++) {
          var n = IntegerNum.substr(i,1)
          var p = IntLen - i - 1
          var q = p / 4
          var m = p % 4
          if( n === "0" ) {
            zeroCount++
          } else {
            if ( zeroCount > 0 ) {
                ChineseStr += cnNums[0]
            }
            zeroCount = 0 //归零
            ChineseStr += cnNums[parseInt(n)]+cnIntRadice[m]
          }
          if ( m === 0 && zeroCount < 4 ) {
            ChineseStr += cnIntUnits[q]
          }
        }
        ChineseStr += cnIntLast
        //整型部分处理完毕
      }
      if (DecimalNum !== '') {//小数部分
        var decLen = DecimalNum.length
        for (i = 0; i < decLen; i++) {
          n = DecimalNum.substr(i,1)
          if (n !=='0') {
            ChineseStr += cnNums[Number(n)] + cnDecUnits[i]
          }
        }
      }
      if( ChineseStr === '' ){
        ChineseStr += cnNums[0]+cnIntLast+cnInteger
        // ChineseStr += cnNums[0]+cnIntLast
      } else if( DecimalNum === '' ){
       ChineseStr += cnInteger
       }
      return ChineseStr
    }
    //生成UUID
    Vue.prototype.uuid = function (len, radix) {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
      var uuid = [], i;
      radix = radix || chars.length;

      if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
      } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | Math.random()*16;
            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
          }
        }
      }

      return uuid.join('');
    }
  }
}
