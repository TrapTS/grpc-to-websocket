import { loadPackageDefinition, credentials } from 'grpc'
import { resolve } from 'path'
import { loadSync, Options } from '@grpc/proto-loader'

const options: Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

let proto = loadPackageDefinition(
  loadSync(resolve(__dirname, 'proto/notes.proto'), options)
)

const PORT: number = 7000
const NoteService = proto.NoteService
export const client = new NoteService(
  `0.0.0.0:${PORT}`,
  credentials.createInsecure(),
  () => {
    console.log(`[gRPC]: Starting gRPC client on port ${PORT}...`)
  }
)
