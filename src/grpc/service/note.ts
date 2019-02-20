import { status } from 'grpc'
import * as io from 'socket.io-client'

const socket = io('ws://localhost:3000/test')
socket.on('connect', () => {
  console.log('[WebSocket]: Socket connected!!!')
})

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
    socket.emit('ddd', {
      message: note
    })
    callback(null, note)
  } else {
    callback({
      code: status.NOT_FOUND,
      details: 'Not found'
    })
  }
}
