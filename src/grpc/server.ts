import { loadPackageDefinition, Server, ServerCredentials } from 'grpc'
import { PackageDefinition, loadSync, Options } from '@grpc/proto-loader'
import { resolve } from 'path'
import * as pino from 'pino'
import { getNoteById } from './service/note'

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

const bootstrap = () => {
  logger.info(`[gRPC]: Starting gRPC server on port ${PORT}...`)
  const server = new Server()
  server.addService(proto.NoteService['service'], { get: getNoteById })
  server.bind(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure())
  console.log(`[gRPC]: Starting gRPC server on port ${PORT}`)
  server.start()
}

bootstrap()
