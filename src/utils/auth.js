// 将token进行本地存储 , 向外部提供对应的方法

// 2. localStorage

const USER_KEY = 'token'

// 设置值
export const getUser = () => JSON.parse(window.localStorage.getItem(USER_KEY))

// 取出值
export const setUser = (data) => window.localStorage.setItem(USER_KEY, JSON.stringify(data))

// 移除值
export const removeUser = () => window.localStorage.removeItem(USER_KEY)
