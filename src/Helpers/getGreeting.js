import { mantras, getMantra } from './getMantra'
import getRandomIntInclusive from './getRandomIntInclusive'

const getGreeting = (time) => {
  let index = null
  if (time <= 12) {
    index = 0
  } else if (time <= 17) {
    index = 1
  } else {
    index = 2
  }

  const greeting = ['Good morning.', 'Good afternoon.', 'Good evening.']
  const currentMantra = getMantra(mantras)
  const randomNum = getRandomIntInclusive(1, 6)

  return randomNum <= 3 ? greeting[index] : currentMantra
}

export default getGreeting
