import * as io from 'socket.io-client'

const socket = io('ws://localhost:3000/notes')
socket.on('connect', () => {
  console.log('[WebSocket]: Socket connected!!!')
})

socket.on('note', data => {
  console.log('[WebSocket]: ' + JSON.stringify(data))
})
