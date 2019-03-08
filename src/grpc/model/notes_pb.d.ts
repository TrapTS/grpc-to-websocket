// package:
// file: notes.proto

/* tslint:disable */

import * as jspb from 'google-protobuf'

export class NoteResponse extends jspb.Message {
  getId(): string
  setId(value: string): void

  getTitle(): string
  setTitle(value: string): void

  getContent(): string
  setContent(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): NoteResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: NoteResponse
  ): NoteResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: NoteResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): NoteResponse
  static deserializeBinaryFromReader(
    message: NoteResponse,
    reader: jspb.BinaryReader
  ): NoteResponse
}

export namespace NoteResponse {
  export type AsObject = {
    id: string
    title: string
    content: string
  }
}

export class NoteRequest extends jspb.Message {
  getId(): string
  setId(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): NoteRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: NoteRequest
  ): NoteRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: NoteRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): NoteRequest
  static deserializeBinaryFromReader(
    message: NoteRequest,
    reader: jspb.BinaryReader
  ): NoteRequest
}

export namespace NoteRequest {
  export type AsObject = {
    id: string
  }
}
