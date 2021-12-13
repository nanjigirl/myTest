// 定义3个状态
const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

// 新建MyPromise类
class MyPromise {
  constructor(executor) {
    try {
      // 立即执行函数
      executor(this.resolve, this.reject)
    } catch (error) {
      // 如果有错误，就直接执行 reject
      this.reject(error)
    }
  }
  // 状态初始值
  status = PENDING;
  // 成功,失败的值
  value = null;
  reason = null;
  // 存储成功,失败的回调
  onFullfilledCallbacks = [];
  onRejectedCallbacks = [];

  // 成功的状态
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULLFILLED;
      this.value = value;
      while(this.onFullfilledCallbacks.length) {
        this.onFullfilledCallbacks.shift()(value);
      }
    }
  }

  // 失败的状态
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      while(this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason);
      }
    }
  }

  // then
  then(onFullfilled, onRejected) {
    // 如果不传，就使用默认函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULLFILLED) {
        queueMicrotask(() => {
          try {
            // 获取成功回调函数的执行结果
            const x = onFulfilled(this.value);
            // 传入 resolvePromise 集中处理
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          }
        });
      } else if (this.status === REJECTED) {
        queueMicrotask(() => {
          try {
            // 调用失败回调，并且把原因返回
            const x = onRejected(this.reason);
            // 传入 resolvePromise 集中处理
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          // ==== 新增 ====
          queueMicrotask(() => {
            try {
              // 获取成功回调函数的执行结果
              const x = onFulfilled(this.value);
              // 传入 resolvePromise 集中处理
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error)
            }
          })
        });
        this.onRejectedCallbacks.push(() => {
          // ==== 新增 ====
          queueMicrotask(() => {
            try {
              // 调用失败回调，并且把原因返回
              const x = onRejected(this.reason);
              // 传入 resolvePromise 集中处理
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error)
            }
          })
        });
      }
    })
    return promise2;
  }
  // promise.catch
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  // promise.finally
  finally(callback) {
    callback();
    return this;
  }
  // all 静态方法
  static all (promiseArr) {
    return new MyPromise((resolve, reject) => {
      var length = promiseArr.length;
      var result = [];
      
    })
  }
  // resolve 静态方法
  static resolve (parameter) {
    // 如果传入 MyPromise 就直接返回
    if (parameter instanceof MyPromise) {
      return parameter;
    }

    // 转成常规方式
    return new MyPromise(resolve =>  {
      resolve(parameter);
    });
  }

  // reject 静态方法
  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x);
  }
}

// 普通用法
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000);
})

promise.then(value => {
 console.log('resolve', value)
})