
/*****************************************************************************
 阴历日期计算
 *****************************************************************************/
var lunarInfo = new Array(0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0);
var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
var Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
var nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
var nStr2 = new Array('初', '十', '廿', '卅', '　');
var monthName = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
var monthArrayChinese = new Array("一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"); //国历节日 *表示放假日
var yearArrayChinese = [ '〇', '一', '二', '三', '四', '五', '六', '七', '八', '九' ]
var sFtv = new Array("0101 元旦", "0214 情人节", "0308 妇女节", "0312 植树节", "0401 愚人节", "0501 劳动节", "0504 青年节", "0601 儿童节", "0701 建党节", "0801 建军节", "0910 教师节", "1001 国庆节", "1220 澳门回归", "1224 平安夜", "1225 圣诞节"); //农历节日 *表示放假日

var lFtv = new Array("0101 春节", "0115 元宵节", "0505 端午节", "0707 七夕", "0815 中秋节", "0909 重阳节", "1208 腊八节", "1223 小年", "0100 除夕"); //某月的第几个星期几

var wFtv = new Array("0520 母亲节", "0630 父亲节"); //====================================== 传回农历 y年的总天数

function lYearDays(y) {
  var i,
    sum = 348;

  for (i = 0x8000; i > 0x8; i >>= 1) {
    sum += lunarInfo[y - 1900] & i ? 1 : 0;
  }

  return sum + leapDays(y);
} //====================================== 传回农历 y年闰月的天数


function leapDays(y) {
  if (leapMonth(y)) return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;else return 0;
} //====================================== 传回农历 y年闰哪个月 1-12 , 没闰传回 0


function leapMonth(y) {
  return lunarInfo[y - 1900] & 0xf;
} //====================================== 传回农历 y年m月的总天数


function monthDays(y, m) {
  return lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
} //====================================== 算出农历, 传入日期物件, 传回农历日期物件
//                                       该物件属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl


function Lunar(objDate) {
  var i,
    leap = 0,
    temp = 0;
  var baseDate = new Date(1900, 0, 31);
  var offset = parseInt((objDate - baseDate) / 86400000);
  this.dayCyl = offset + 40;
  this.monCyl = 14;

  for (i = 1900; i < 2050 && offset > 0; i++) {
    temp = lYearDays(i);
    offset -= temp;
    this.monCyl += 12;
  }

  if (offset < 0) {
    offset += temp;
    i--;
    this.monCyl -= 12;
  }

  this.year = i;
  this.yearCyl = i - 1864;
  leap = leapMonth(i); //闰哪个月

  this.isLeap = false;

  for (i = 1; i < 13 && offset > 0; i++) {
    //闰月
    if (leap > 0 && i == leap + 1 && this.isLeap == false) {
      --i;
      this.isLeap = true;
      temp = leapDays(this.year);
    } else {
      temp = monthDays(this.year, i);
    } //解除闰月


    if (this.isLeap == true && i == leap + 1) this.isLeap = false;
    offset -= temp;
    if (this.isLeap == false) this.monCyl++;
  }

  if (offset == 0 && leap > 0 && i == leap + 1) if (this.isLeap) {
    this.isLeap = false;
  } else {
    this.isLeap = true;
    --i;
    --this.monCyl;
  }

  if (offset < 0) {
    offset += temp;
    --i;
    --this.monCyl;
  }

  this.month = i;
  this.day = offset + 1;
} //==============================传回国历 y年某m+1月的天数


function solarDays(y, m) {
  if (m == 1) return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;else return solarMonth[m];
} //============================== 传入 offset 传回干支, 0=甲子


function cyclical(num) {
  return Gan[num % 10] + Zhi[num % 12];
} //============================== 月历属性


function calElement(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay) {
  //console.log(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay)
  this.isToday = false; //国历

  this.sYear = sYear;
  this.sMonth = sMonth;
  this.sDay = sDay;
  this.week = week; //农历

  this.lYear = lYear;
  this.lMonth = lMonth;
  this.lDay = lDay;
  this.isLeap = isLeap; //干支

  this.cYear = cYear;
  this.cMonth = cMonth;
  this.cDay = cDay;
  this.color = '';
  this.lunarFestival = ''; //农历节日

  this.solarFestival = ''; //国历节日

  this.solarTerms = ''; //节气
  // console.log(this)
} //===== 某年的第n个节气为几日(从0小寒起算)


function sTerm(y, n) {
  /*
  var offDate = new Date((31556925974.7 * (y - 1900) + sTermInfo[n] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
  console.log(offDate);
  return (offDate.getUTCDate())*/
  //ms代表y年第n个节气到1900年第一个节气的毫秒数
  var ms = 31556925974.7 * (y - 1900) + sTermInfo[n] * 60000; //1900年一月六日两点五分是正小寒点，此点到1970年1.1 00：00：00的毫秒数

  var base = Date.UTC(1900, 0, 6, 2, 5); //对应的公历日期

  var date = new Date(ms + base);

  if (y == 2017 && n == 23) {
    return date.getDate();
  }

  return date.getUTCDate();
} //============================== 传回月历物件 (y年,m+1月)


function calendar(that, y, m) {
  var sDObj,
    lDObj,
    lY,
    lM,
    lD = 1,
    lL,
    lX = 0,
    tmp1,
    tmp2;
  var lDPOS = new Array(3);
  var n = 0;
  var firstLM = 0;
  sDObj = new Date(y, m, 1); //first day

  var len = solarDays(y, m); //国历当月天数

  var firstWeek = sDObj.getDay(); //国历当月1日星期几
  for (var i = 0; i < len; i++) {
    if (lD > lX) {
      sDObj = new Date(y, m, i + 1); //当月一日日期

      lDObj = new Lunar(sDObj); //农历

      lY = lDObj.year; //农历年

      lM = lDObj.month; //农历月

      lD = lDObj.day; //农历日

      lL = lDObj.isLeap; //农历是否闰月

      lX = lL ? leapDays(lY) : monthDays(lY, lM); //农历当月最後一天

      if (n == 0) firstLM = lM;
      lDPOS[n++] = i - lD + 1;
    }
    // var that = []
    //console.log(i ,y, m + 1, i + 1, nStr1[(i + firstWeek) % 7], lY, lM, lD++, lL, cyclical(lDObj.yearCyl), cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++))
    //this[i] = new calElement(y, m + 1, i + 1, nStr1[(i + firstWeek) % 7], lY, lM, lD++, lL, cyclical(lDObj.yearCyl), cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++));
    that[i] = new calElement(y, m + 1, i + 1, nStr1[(i + firstWeek) % 7], lY, lM, lD++, lL, cyclical(lDObj.yearCyl), cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++));

    if ((i + firstWeek) % 7 == 0) that[i].color = 'red'; //周日颜色

    if ((i + firstWeek) % 14 == 13) that[i].color = 'red'; //周休二日颜色
  }

  //console.log(that); //节气

  tmp1 = sTerm(y, m * 2) - 1;
  tmp2 = sTerm(y, m * 2 + 1) - 1;
  that[tmp1].solarTerms = solarTerm[m * 2];
  that[tmp2].solarTerms = solarTerm[m * 2 + 1]; //国历节日

  for (i in sFtv) {
    var mat = sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/);

    if (mat) {
      if (Number(RegExp.$1) == m + 1) {
        that[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + ' ';
      }
    }
  } //月周节日


  for (i in wFtv) {
    if (wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/)) if (Number(RegExp.$1) == m + 1) {
      tmp1 = Number(RegExp.$2);
      tmp2 = Number(RegExp.$3);
      that[(firstWeek > tmp2 ? 7 : 0) + 7 * (tmp1 - 1) + tmp2 - firstWeek].solarFestival += RegExp.$5 + ' ';
    }
  } //农历节日


  for (i in lFtv) {
    var mat = lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/);

    if (mat) {
      tmp1 = Number(RegExp.$1) - firstLM;
      if (tmp1 == -11) tmp1 = 1;

      if (tmp1 >= 0 && tmp1 < n) {
        tmp2 = lDPOS[tmp1] + Number(RegExp.$2) - 1;

        if (tmp2 >= 0 && tmp2 < len) {
          that[tmp2].lunarFestival += RegExp.$4 + ' ';
        }
      }
    }
  }

  if ((firstWeek + 12) % 7 == 5) that[12].solarFestival += '';
  return that;
} //====================== 中文日期


function cDay(d) {
  var s;

  switch (d) {
    case 10:
      s = '初十';
      break;

    case 20:
      s = '二十';
      break;
      break;

    case 30:
      s = '三十';
      break;
      break;

    default:
      s = nStr2[Math.floor(d / 10)];
      s += nStr1[d % 10];
  }

  return s;
}

function GetMonthChinese(lmonth) {
  if (lmonth <= 0) return "";
  return monthArrayChinese[lmonth - 1];
}

function getYearChinese(year) {
  if(year <= 1900 || year >= 2100) return '';
  var result = ''
  year = year.toString()
  for (var i = 0; i < year.length; i++) {
    result += yearArrayChinese[year.charAt(i)]
  }
  return result
}

function getAnimal (y) {
  return Animals[(y - 4) % 12]
}

///////////////////////////////////////////////////////////////////////////////


export {
  calendar,
  cDay,
  sTerm,
  GetMonthChinese,
  getYearChinese,
  getAnimal
}
