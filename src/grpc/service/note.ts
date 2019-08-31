import { NoteServiceService, INoteServiceServer } from '../model/notes_grpc_pb'
import { NoteRequest, NoteResponse } from '../model/notes_pb'
import { ServerUnaryCall, sendUnaryData } from 'grpc'
import { noteQueue } from '../../queue/queue'

interface Note {
  id: string
  title: string
  content: string
}

const notes: Note[] = [
  { id: '1', title: 'Note 1', content: 'Content 1' },
  { id: '2', title: 'Note 2', content: 'Content 2' }
]

class NoteService implements INoteServiceServer {
  show(
    call: ServerUnaryCall<NoteRequest>,
    callback: sendUnaryData<NoteResponse>
  ): void {
    let note: Note | undefined = notes.find(n => n.id === call.request.getId())
    if (note) {
      noteQueue.push(note)
      const res = new NoteResponse()
      res.setId(note.id)
      res.setContent(note.content)
      res.setTitle(note.title)
      callback(null, res)
    }
  }
}

export { NoteService, NoteServiceService }
