import * as socketio from 'socket.io'

const io = socketio(3000)
let noteSocket
io.of('/notes').on('connect', socket => {
  console.log('[WebSocket]: User connected!!   ' + 'id: ' + socket.id)
  noteSocket = socket
  socket.on('disconnect', () => {
    console.log('[WebSocket]: id: ' + socket.id + '   disconnected!!')
  })
})

export { noteSocket }
