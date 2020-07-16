// 深拷贝
function deepclone(obj, hash = new WeakMap()) {
  if (typeof obj !== 'object') {
    return obj;
  }
  if (hash.get(obj)) {
    return hash.get(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  const cache = new obj.constructor();
  hash.set(obj, cache);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cache[key] = deepclone(obj[key], hash);
    }
  }
  return cache;
}

// ajax实现
function ajax(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.onreadystatechange = () => {
    if ((xhr.readyState === 4 && xhr.status === 200) || xhr.status === 304) {
      cb.call(this, xhr.responseText);
    }
  };
  xhr.send();
}
