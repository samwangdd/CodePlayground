// 手动封装请求函数，可以设置最大请求数
// 请求成功则不再请求，请求失败则继续请求直到超过最大请求数
function customAjax(url, cb, maxSize) {
  let time = 0;
  const xhr = new XMLHttpRequest();
  xhr.open(url);
  xhr.onreadystatechange = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      cb.call(this, xhr.responseText);
    } else {
      if (time <= maxSize) {
        xhr.send();
        time++;
      }
    }
  };
  if (time <= maxSize) {
    xhr.send();
    time++;
  }
}

/**
 * 请求函数，可以设置最大请求数
 *
 * @param {String} url 资源路径
 * @param {Object} body 请求体
 * @param {*} successCB
 * @param {*} errorCB
 * @param {number} [maxSize=0] 最大请求数
 * @returns
 */
function request(url, body, successCB, errorCB, maxSize = 0) {
  return fetch(url, body)
    .then((res) => successCB(res))
    .catch(() => {
      if (maxSize <= 0) return errorCB('请求超时');
      return request(url, body, successCB, errorCB, --maxSize);
    });
}

// react 实现一个防抖查询输入框
/**
 * 防抖函数
 *
 * @param {*} fn 被延迟执行的函数
 * @param {*} wait 等待时间
 * @param {*} immediate 立即执行
 * @returns
 */
function debounce(fn, wait, immediate) {
  let timer = null;
  return function (...args) {
    let context = this;
    if (immediate && !timer) {
      fn.apply(contex, args);
    }
    if (timer) clearInterval(timer);
    timer = setTimeout(() => fn.apply(context, args), wait);
  };
}

const SearchInput = () => {
  const [value, setValue] = useState('');
  const callAjax = debounce(fetch, 500);
  const handleSearch = (e) => {
    setValue(e.target.value);
    callAjax();
  };
  return <input type="text" value={value} onChange={handleSearch} />;
};
