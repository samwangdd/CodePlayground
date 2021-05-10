let target = {
  name: 'target',
};

let proxy = new Proxy(target, {
  set(trapTarget, key, value, receiver) {
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new TypeError('属性必须是数字');
      }
    }

    return Reflect.set(trapTarget, key, value, receiver);
  },
  get(trapTarget, key, receiver) {
    console.log('receiver :>> ', receiver);
    if (!(key in receiver)) {
      throw new TypeError('属性' + key + '不存在');
    }

    return Reflect.get(trapTarget, key, receiver);
  },
});

// proxy.name = 'proxy';
// console.log('proxy.name :>> ', proxy.name);
// console.log('target.name :>> ', target.name);

// proxy.count = 1;
// console.log('proxy.count :>> ', proxy.count);
// console.log('target.count :>> ', target.count);

// proxy.alias = 'lala';
// console.log('proxy.alias :>> ', proxy.alias);
console.log('target.alias :>> ', target.alias);
