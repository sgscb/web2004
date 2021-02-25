const moment = require('moment');
moment.locale('zh-cn'); // 设为

exports.relativeTime = time =>
  moment(new Date(time * 1000)).format('MMMM Do YYYY, h:mm:ss a');
