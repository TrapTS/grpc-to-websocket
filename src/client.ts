import { NoteRequest, NoteResponse } from './grpc/model/notes_pb'
import { NoteServiceClient } from './grpc/model/notes_grpc_pb'
import { config } from './config'
import { credentials, Metadata, ServiceError } from 'grpc'

const client: NoteServiceClient = new NoteServiceClient(
  `0.0.0.0:${config.gRPC_PORT}`,
  credentials.createInsecure()
)

interface INote {
  id: string
  title: string
  content: string
}

const show = async (
  params: NoteRequest,
  metadata: Metadata = new Metadata()
): Promise<INote> => {
  return new Promise<INote>(
    (resolve: Function, reject: Function): void => {
      client.show(
        params,
        metadata,
        (err: ServiceError | null, res: NoteResponse) => {
          if (err) {
            return reject(err)
          }
          resolve(res.toObject())
        }
      )
    }
  )
}

const bootstrap = async () => {
  const params: NoteRequest = new NoteRequest()
  params.setId('1')

  const metadata: Metadata = new Metadata()

  const result = await show(params, metadata)
  console.log('[gRPC]: ', result)
}

bootstrap()
