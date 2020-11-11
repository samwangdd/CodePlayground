/**
 * fetch 请求超时
 *
 * @export
 * @param {*} url
 * @param {*} options
 * @returns
 */
function requestWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const { signal } = controller;

  const fetchPromise = fetch(url, { ...options, signal });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('fetch timeout'));
      controller.abort();
    }, options.timeout || 3000);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}

requestWithTimeout('www.baidu.com');
