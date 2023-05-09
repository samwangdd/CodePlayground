function deepClone(params) {
    const res = params instanceof Array ? new Array() : new Object();
    for (const i in params) {
        res[i] = typeof params[i] === 'object' ? deepClone(params[i]) : params[i]
    }

    return res;
}

const obj = { a: 1, b: { c: 2, d: {} }, foo: () => { } }
const arr = [1, { a: 1, b: 2 }]

const obj1 = deepClone(obj)
console.log(obj1)


function deepClone2(params, hash = new WeakMap()) {
    if (typeof params !== 'object') return params;
    
    if (hash.get(params)) return hash.get(params);
    if (params instanceof Function) return params;
    if (params instanceof Date) return new Date(params);
    if (params instanceof RegExp) return new RegExp(params);

    const cache = new params.constructor()
    hash.set(params, cache);
    for (const k in params) {
        if (params.hasOwnProperty(k)) {
            cache[k] = deepClone2(params[k], hash)
        }
    }

    return cache;
}
const obj2 = deepClone2(obj)
console.log(obj2)