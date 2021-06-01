// 过滤对象中的属性
// 方法一
const omit = (obj, uselessKeys) =>
  Object.keys(obj).reduce(
    (acc, key) => (uselessKeys.includes(key) ? acc : { ...acc, [key]: obj[key] }),
    {}
  );
const user = { name: 'sam', age: 30, gender: 'male' };
console.log('omit :>> ', omit(user, ['age']));

// 方法二
const filterProps = (obj, uselessKeys) =>
  uselessKeys.reduce((acc, key) => {
    return { ...acc, [key]: undefined };
  }, obj);
console.log('filterProps :>> ', filterProps(user, ['age']));

// 方法三，暴力解决
const ignore = (obj, props) => {
  const raw = { ...obj };
  props.forEach((prop) => {
    delete raw[prop];
  });
  return raw;
};
console.log('ignore :>> ', ignore(user, ['age']));
