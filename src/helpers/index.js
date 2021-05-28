/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
export const search = async (noReg, carArray) => {
  for (var i = 0; i < carArray.length; i++) {
    if (carArray[i].registratonNo === noReg) {
      return carArray[i]
    }
  }
  return false
}

export const remove = async (noReg, carArray) => {
  var i = carArray.length
  while (i--) {
    if (carArray[i] && carArray[i].registratonNo && (arguments.length > 2 && carArray[i].registratonNo === noReg)) {
      carArray.splice(i, 1)
    }
  }
  return carArray
}
