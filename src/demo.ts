import { promisify } from 'util'
import { client } from './grpc/client'
import * as pino from 'pino'

const logger = pino({
  name: 'grpc-server',
  messageKey: 'message',
  changeLevelName: 'severity',
  useLevelLabels: true
})

const getAsync = promisify(client.get).bind(client)

const bootstrap = async () => {
  const result = await getAsync({ id: '1' })
  logger.info('[gRPC]: info' + JSON.stringify(result))
}

bootstrap()
