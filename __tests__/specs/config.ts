import { config } from '../../src/config'

describe('Test config!!', () => {
  test('config property!!', () => {
    expect(config).toHaveProperty('gRPC_PORT')
    expect(config).toHaveProperty('WS_PORT')
  })
})
