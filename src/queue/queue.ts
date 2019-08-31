import { queue, asyncify } from 'async'
import { noteSocket } from '../websocket/server'

interface Note {
  id: string
  title: string
  content: string
}

export const noteQueue = queue(
  asyncify(async (note: Note, done) => {
    noteSocket.emit('note', { note: note })
    done()
  })
)
