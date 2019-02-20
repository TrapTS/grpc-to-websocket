import { loadPackageDefinition, credentials } from 'grpc'
import { resolve } from 'path'
import { promisify } from 'util'
import { loadSync, Options } from '@grpc/proto-loader'
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

let proto = loadPackageDefinition(
  loadSync(resolve(__dirname, 'proto/notes.proto'), options)
)

const PORT = 7000
const NoteService = proto.NoteService
const client = new NoteService(`0.0.0.0:${PORT}`, credentials.createInsecure())

const getAsync = promisify(client.get).bind(client)

const bootstrap = async () => {
  const result = await getAsync({ id: '1' })
  console.log('------>', result)
  logger.info('[grpc]: info' + JSON.stringify(result))
}

bootstrap()
