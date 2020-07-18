/*
   // 输入
    asd ehe  rjr
    d  erregrnt eruk
    rth sthst ar   gae

    // 输出
    [asd, ehe, rjr]
    [d, erregrnt, eruk]
    [rth, sthst, ar, gae]
 */
const str = 'asd ehe  rjr\nd  erregrnt eruk\nrth sthst ar   gae'

const res = str.split('\n').map(i => i.split(' ').filter(Boolean))
console.log('res :>> ', res);

/*
 发布新闻时需要提醒发布的时间。写一个函数，传递一个参数为时间戳，完成时间的格式化。如果发布一分钟内，输出：刚刚；n 分钟前发布，输出：n分钟前；超过一个小时，输出：n小时前；超过一天，输出：n天前；但超过一个星期，输出发布的准确时间
 */
function getStamp(date) {
  const time = new Date().getTime() - date;
  console.log('time :>> ', time);
  const targetList = [6e4, 36e5, 864e5, 6048e5, time];
  const stampList = [
    '刚刚',
    `${parseInt(time/targetList[0])}分钟前`,
    `${parseInt(time/targetList[1])}小时前`,
    `${parseInt(time/targetList[2])}天前`,
    formatDate(time)
  ]
  const index = targetList.sort((a, b) => a - b).indexOf(time);
  console.log('index :>> ', index);
  return stampList[index]
}

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}

console.log(getStamp(1586661760000))