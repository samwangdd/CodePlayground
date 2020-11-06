/**
 * 改变 hsl 亮度
 *
 * @param {*} delta 亮度改变值
 * @param {*} hslStr 当前 hsl 值
 */
function changeLightness(delta, hslStr) {
  console.log('hslStr.match(/d+/g) :>> ', hslStr.match(/\d+/g).map(Boolean));
  // 注意 .map(Number)，将 String 转为 Number
  // /\d+/g 全局匹配数字
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);
  // parseFloat 获取浮点数
  const nextLightness = Math.max(0, Math.min(100, lightness + parseFloat(delta)));

  return `hsl(${hue}, ${saturation}%, ${nextLightness}%)`;
}

const newLightness = changeLightness(10, 'hsl(330, 50%, 50%)');
const newLightness2 = changeLightness(-10, 'hsl(330, 50%, 50%)');
console.log('newLightness :>> ', newLightness);
console.log('newLightness :>> ', newLightness2);
