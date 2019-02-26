import * as socketio from 'socket.io'
import { config } from '../config'

const io: socketio.Server = socketio(config.WS_PORT)
let noteSocket: socketio.Socket
io.of('/notes').on('connect', socket => {
  console.log('[WebSocket]: User connected!!   ' + 'id: ' + socket.id)
  noteSocket = socket
  socket.on('disconnect', () => {
    console.log('[WebSocket]: id: ' + socket.id + '   disconnected!!')
  })
})

export { noteSocket }
