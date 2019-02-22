import { status } from 'grpc'
import * as socketio from 'socket.io'

const io = socketio(3000)

interface Note {
  id: string
  title: string
  content: string
}

const notes: Note[] = [
  { id: '1', title: 'Note 1', content: 'Content 1' },
  { id: '2', title: 'Note 2', content: 'Content 2' }
]

export const getNoteById = (call, callback) => {
  let note = notes.find(n => n.id === call.request.id)
  if (note) {
    io.of('/notes').on('connect', socket => {
      console.log('[WebSocket]: User connected!!   ' + 'id: ' + socket.id)
      socket.emit('note', { note: note })
      socket.on('disconnect', () => {
        console.log('[WebSocket]: id: ' + socket.id + '   disconnected!!')
      })
    })
    callback(null, note)
  } else {
    callback({
      code: status.NOT_FOUND,
      details: 'Not found'
    })
  }
}
