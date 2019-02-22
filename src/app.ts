import 'reflect-metadata'
import server from './grpc/server'
import * as pino from 'pino'

const logger = pino({
  name: 'grpc-server',
  messageKey: 'message',
  changeLevelName: 'severity',
  useLevelLabels: true
})

const bootstrap = () => {
  logger.info('[gRPC]: Server running...')
  server.start()
}

bootstrap()
