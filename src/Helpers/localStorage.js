const LocalStorage = {}

// getter method
LocalStorage.get = (key) => localStorage.getItem(key)

// setter method
LocalStorage.set = (key, value) => localStorage.setItem(key, value)

// remove method
LocalStorage.remove = (key) => localStorage.removeItem(key)

export default LocalStorage
