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

function request(url, body, successCB, errorCB, maxSize = 0) {
  return fetch(url, body)
    .then((res) => successCB(res))
    .catch(() => {
      if (maxSize <= 0) return errorCB('请求超时');
      return request(url, body, successCB, errorCB, --maxSize);
    });
}

// react 实现一个防抖查询输入框
// 防抖函数
function debounce(params) {
  
}