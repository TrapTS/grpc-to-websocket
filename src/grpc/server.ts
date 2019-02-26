import { loadPackageDefinition, Server, ServerCredentials } from 'grpc'
import { PackageDefinition, loadSync, Options } from '@grpc/proto-loader'
import { resolve } from 'path'
import { getNoteById } from './service/note'
import { config } from '../config'

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

const server: Server = new Server()
server.addService(proto.NoteService['service'], { get: getNoteById })
server.bindAsync(
  `0.0.0.0:${config.gRPC_PORT}`,
  ServerCredentials.createInsecure(),
  () => {
    console.log(
      `[gRPC]: Server running at http://127.0.0.1:${config.gRPC_PORT}`
    )
  }
)

export default server
