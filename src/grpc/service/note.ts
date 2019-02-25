import { status } from 'grpc'
import { noteSocket } from '../websocket/server'

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
  let note: Note | undefined = notes.find(n => n.id === call.request.id)
  if (note) {
    noteSocket.emit('note', { note: note })
    callback(null, note)
  } else {
    callback({
      code: status.NOT_FOUND,
      details: 'Not found'
    })
  }
}
