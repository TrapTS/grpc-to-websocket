// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('grpc')
var notes_pb = require('./notes_pb.js')

function serialize_NoteRequest(arg) {
  if (!(arg instanceof notes_pb.NoteRequest)) {
    throw new Error('Expected argument of type NoteRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_NoteRequest(buffer_arg) {
  return notes_pb.NoteRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_NoteResponse(arg) {
  if (!(arg instanceof notes_pb.NoteResponse)) {
    throw new Error('Expected argument of type NoteResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_NoteResponse(buffer_arg) {
  return notes_pb.NoteResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

var NoteServiceService = (exports.NoteServiceService = {
  show: {
    path: '/NoteService/show',
    requestStream: false,
    responseStream: false,
    requestType: notes_pb.NoteRequest,
    responseType: notes_pb.NoteResponse,
    requestSerialize: serialize_NoteRequest,
    requestDeserialize: deserialize_NoteRequest,
    responseSerialize: serialize_NoteResponse,
    responseDeserialize: deserialize_NoteResponse
  }
})

exports.NoteServiceClient = grpc.makeGenericClientConstructor(
  NoteServiceService
)
