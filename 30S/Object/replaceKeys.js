// 批量替换对象的键值，支持传入对象数组/对象
const replaceKeys = (obj, keysMap) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => replaceKeys(item, keysMap));
  } else {
    // 本来只是替换对象的键值，解决这个问题后发现对象数组也可以处理
    // 无意间用到了分治的思想
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = keysMap[key] || key;
      acc[newKey] = obj[key];
      return acc;
    }, {});
  }
};

const userList = [
  { name: 'sam', age: 30, gender: 'male' },
  { name: 'yy', age: 18, gender: 'female' },
];
console.log('userList :>> ', replaceKeys(userList, { gender: 'sex' }));

const user = { name: 'yy', age: 18, gender: 'female' };
console.log('user :>> ', replaceKeys(user, { gender: 'sex' }));
