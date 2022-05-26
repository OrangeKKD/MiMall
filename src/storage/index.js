// 订阅专栏
// 为什么要封装storage：
// Storage本身虽然有Api，但是只是简单的键值对的形式
// Storage只能存储字符串，需要人工转换成json对象
// Storage只能一次性清空，不能单个清空
// 我们通常在Storage中存储json对象，因此我们需要自己封装Storage方法.

/**
 * 封装storage
 */
const STORAGE_KEY = 'mall'
export default {
  // 1.获取整个数据，转为json格式
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 获取值 {user:{userName:zs,age:10,sex:1}}
  /**
   * 只传一个参数key时 单个对象
   * 传两个参数时 获module下的key值
   */
  getItem(key, moduleName) {
    if (moduleName) {
      return this.getStorage()[moduleName][key]
    } else {
      return this.getStorage()[key]
    }
  },
  // 存储值
  setItem(key, value, moduleName) {
    // 有模块名 则找到对应模块下的对象 再插入
    // {user:{userName:zs,age:10,sex:1}}
    if (moduleName) {
      const val = this.getItem(moduleName)// {userName:zs,age:10,sex:1}
      val[key] = value // {userName:zs,age:10,sex:1,new:val}
      this.setItem(moduleName, val)
    } else {
      let val = this.getStorage()
      if (!val) {
        val = {}
      }
      val[key] = value

      // 重新写入sessionStorage
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 清空值
  clear(key, moduleName) {
    // 如果是删除模块中的属性
    if (moduleName) {
      const childrenItem = this.getItem(moduleName)
      delete childrenItem[key]
      this.setItem(moduleName, childrenItem)
    } else {
      const val = this.getStorage()
      delete val[key]
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  }
}
