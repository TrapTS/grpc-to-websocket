// package:
// file: notes.proto

/* tslint:disable */

import * as grpc from 'grpc'
import * as notes_pb from './notes_pb'

interface INoteServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  show: INoteServiceService_Ishow
}

interface INoteServiceService_Ishow
  extends grpc.MethodDefinition<notes_pb.NoteRequest, notes_pb.NoteResponse> {
  path: string // "/.NoteService/show"
  requestStream: boolean // false
  responseStream: boolean // false
  requestSerialize: grpc.serialize<notes_pb.NoteRequest>
  requestDeserialize: grpc.deserialize<notes_pb.NoteRequest>
  responseSerialize: grpc.serialize<notes_pb.NoteResponse>
  responseDeserialize: grpc.deserialize<notes_pb.NoteResponse>
}

export const NoteServiceService: INoteServiceService

export interface INoteServiceServer {
  show: grpc.handleUnaryCall<notes_pb.NoteRequest, notes_pb.NoteResponse>
}

export interface INoteServiceClient {
  show(
    request: notes_pb.NoteRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: notes_pb.NoteResponse
    ) => void
  ): grpc.ClientUnaryCall
  show(
    request: notes_pb.NoteRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: notes_pb.NoteResponse
    ) => void
  ): grpc.ClientUnaryCall
  show(
    request: notes_pb.NoteRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: notes_pb.NoteResponse
    ) => void
  ): grpc.ClientUnaryCall
}

export class NoteServiceClient extends grpc.Client
  implements INoteServiceClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  )
  public show(
    request: notes_pb.NoteRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: notes_pb.NoteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public show(
    request: notes_pb.NoteRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: notes_pb.NoteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public show(
    request: notes_pb.NoteRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: notes_pb.NoteResponse
    ) => void
  ): grpc.ClientUnaryCall
}
