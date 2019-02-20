import { loadPackageDefinition, Server, ServerCredentials, status } from 'grpc'
import { PackageDefinition, loadSync, Options } from '@grpc/proto-loader'
import { resolve } from 'path'
import * as pino from 'pino'

const logger = pino({
  name: 'grpc-server',
  messageKey: 'message',
  changeLevelName: 'severity',
  useLevelLabels: true
})

const options: Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

let proto: PackageDefinition = loadPackageDefinition(
  loadSync(resolve(__dirname, 'proto/notes.proto'), options)
)
const PORT = 7000

interface Note {
  id: string
  title: string
  content: string
}

const notes: Note[] = [
  { id: '1', title: 'Note 1', content: 'Content 1' },
  { id: '2', title: 'Note 2', content: 'Content 2' }
]

const bootstrap = () => {
  logger.info(`[grpc]: Starting gRPC server on port ${PORT}...`)
  const server = new Server()
  server.addService(proto.NoteService['service'], {
    get: (call, callback) => {
      let note = notes.find(n => n.id == call.request.id)
      if (note) {
        callback(null, note)
      } else {
        callback({
          code: status.NOT_FOUND,
          details: 'Not found'
        })
      }
    }
  })
  server.bind(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure())
  server.start()
}

bootstrap()
