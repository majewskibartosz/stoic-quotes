/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
const LocalStorage = {}

LocalStorage.get = (key) => {
  const returnedValue = JSON.parse(localStorage.getItem(key))
  return returnedValue
}

LocalStorage.set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    if (isQuotaExceeded(e)) {
      console.log('Storage full, performing clean-up!')
      localStorage.clear()
      localStorage.setItem(key, JSON.stringify(value))
    }
  }
}

LocalStorage.remove = (key) => localStorage.removeItem(key)
LocalStorage.clear = () => localStorage.clear()

function isQuotaExceeded(e) {
  let quotaExceeded = false
  if (e) {
    if (e.code) {
      switch (e.code) {
        case 22:
          quotaExceeded = true
          break
        case 1014:
          // Firefox
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            quotaExceeded = true
          }
          break
      }
    } else if (e.number === -2147024882) {
      // Internet Explorer 8
      quotaExceeded = true
    }
  }
  return quotaExceeded
}

export default LocalStorage
