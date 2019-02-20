import 'reflect-metadata'
import server from './grpc/server'
import * as pino from 'pino'
import * as socketio from 'socket.io'

const io = socketio(3000)

const logger = pino({
  name: 'grpc-server',
  messageKey: 'message',
  changeLevelName: 'severity',
  useLevelLabels: true
})

const bootstrap = () => {
  io.of('/test').on('connect', socket => {
    console.log('[WebSocket]: User connected!!   ' + 'id: ' + socket.id)
    socket.on('ddd', data => {
      console.log('[WebSocket]: ' + JSON.stringify(data))
    })
  })
  logger.info('[gRPC]: Server running...')
  server.start()
}

bootstrap()
