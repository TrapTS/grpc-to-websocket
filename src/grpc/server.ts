import { Server, ServerCredentials } from 'grpc'
import { NoteServiceService, NoteService } from './service/note'
import { config } from '../config'

const server = new Server()
server.addService(NoteServiceService, new NoteService())
server.bind(`0.0.0.0:${config.gRPC_PORT}`, ServerCredentials.createInsecure())
console.info(`Listening on http://localhost:${config.gRPC_PORT}`)
export default server
