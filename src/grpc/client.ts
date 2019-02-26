import { loadPackageDefinition, credentials } from 'grpc'
import { resolve } from 'path'
import { loadSync, Options } from '@grpc/proto-loader'
import { config } from '../config'

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

const NoteService = proto.NoteService
export const client = new NoteService(
  `0.0.0.0:${config.gRPC_PORT}`,
  credentials.createInsecure(),
  () => {
    console.log(`[gRPC]: Starting gRPC client on port ${config.gRPC_PORT}...`)
  }
)
