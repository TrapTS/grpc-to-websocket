import { loadPackageDefinition, credentials } from 'grpc'
import { resolve } from 'path'
import { loadSync, Options } from '@grpc/proto-loader'
import { config } from './config'
import { promisify } from 'util'
import * as pino from 'pino'

const options: Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

let proto = loadPackageDefinition(
  loadSync(resolve(__dirname, './grpc/proto/notes.proto'), options)
)

const NoteService = proto.NoteService
const client = new NoteService(
  `0.0.0.0:${config.gRPC_PORT}`,
  credentials.createInsecure(),
  () => {
    console.log(`[gRPC]: Starting gRPC client on port ${config.gRPC_PORT}...`)
  }
)

const logger = pino({
  name: 'grpc-server',
  messageKey: 'message',
  changeLevelName: 'severity',
  useLevelLabels: true
})

const getAsync = promisify(client.get).bind(client)

const bootstrap = async () => {
  const result = await getAsync({ id: '1' })
  logger.info('[gRPC]: info' + JSON.stringify(result))
}

bootstrap()
