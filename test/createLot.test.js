import * as parkLogic from '../src/parkLogic'

test('create_parking_lot 6', async () => {
  expect(await parkLogic.createLot(6)).toEqual('Created a parking lot with 6 slots')
})
