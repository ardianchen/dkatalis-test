import readline from 'readline'
import * as paarking from './parkLogic'
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

/**
 * Parser for the commands that user input
 */
module.exports = () => {
  rl.on('line', async (val) => {
    var input = val.split(' ')
    switch (input[0]) {
      case ('create_parking_lot'):
        try {
          const result = await paarking.createLot(input[1])
          console.log(result)
        } catch (e) {
          console.log(`error occured ==> ${e}`)
        }
        break

      case ('park'):
        try {
          console.log(input)
          const result = await paarking.park(input[1].trim())
          console.log(result)
        } catch (e) {
          console.log(`error occured ==> ${e}`)
        }
        break

      case ('leave'):

        try {
          const result = await paarking.leave(input[1], input[2])
          console.log(result)
        } catch (e) {
          console.log(`error occured ==> ${e}`)
        }
        break
      case ('status'):

        try {
          const result = await paarking.status()
          console.log(result)
        } catch (e) {
          console.log(`error occured ==> ${e}`)
        }
        break

      case ('exit'):
        rl.pause()
        break

      default:
        console.log('Seems like an issue with command that you typed , please note predeifed commands are case sensitive and matched as per the description!')
    }
  })
}

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause()
  })
})
