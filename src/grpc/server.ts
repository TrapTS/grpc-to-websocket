import { loadPackageDefinition, Server, ServerCredentials } from 'grpc'
import { PackageDefinition, loadSync, Options } from '@grpc/proto-loader'
import { resolve } from 'path'
import { getNoteById } from './service/note'

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
const server: Server = new Server()
server.addService(proto.NoteService['service'], { get: getNoteById })
server.bindAsync(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure(), () => {
  console.log(`[gRPC]: Server running at http://127.0.0.1:${PORT}`)
})

export default server
