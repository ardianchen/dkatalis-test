import * as utilFunctions from './helpers'
import moment from 'moment'

const car = []
let maxSize = 0
const availableSlot = []

export const createLot = async (noOfLot) => {
  try {
    maxSize = parseInt(noOfLot)
  } catch (e) {
    return 'Parameter is not a number!'
  }
  for (let i = 1; i <= maxSize; i++) {
    availableSlot.push(i)
  }
  return `Created a parking lot with ${availableSlot.length} slots`
}

export const park = async (registratonNo) => {
  if (maxSize === 0) {
    return 'parking lot is not initiated'
  } else if (maxSize === car.length) {
    return 'Sorry, parking lot is full'
  } else {
    const slot = availableSlot[0]
    car.push({
      slot: slot,
      registratonNo: registratonNo,
      inTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      price: 10
    })
    availableSlot.shift()
    return `Allocated slot number: ${slot}`
  }
}

export const leave = async (noReg, dur) => {
  parseInt(noReg)
  if (maxSize === 0) {
    return 'parking lot is not initiated'
  } else if (car.length > 0) {
    const _car = await utilFunctions.search(noReg, car)
    if (_car) {
      await utilFunctions.remove(noReg, car)
      availableSlot.push(_car.slot)
      availableSlot.sort()
      // const dur = moment.duration(moment().diff(car.inTime))
      if (moment(_car).isAfter(Number(dur), 'hours')) {
        return `Slot  ${noReg} is free with Charge ${Number(_car.price * (dur - 1))}`
      }
      return `Slot  ${noReg} is free with Charge ${Number(_car.price)}`
    } else {
      return ` Slot ${noReg} is already empty `
    }
  } else {
    return 'Parking lot is empty'
  }
}

export const status = async () => {
  if (maxSize === 0) {
    return 'parking lot is not initiated'
  } else if (car.length > 0) {
    let _idx = 0
    car.sort(function (x, y) {
      return x.slot - y.slot;
    });
    for (_idx in car) {
      console.log(car[_idx].slot + '\t         ' + car[_idx].registratonNo)
    }
  } else {
    return 'Parking lot is empty'
  }
}
