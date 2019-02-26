interface Config {
  gRPC_PORT: string | number
  WS_PORT: string | number
}

export const config: Config = {
  gRPC_PORT: 7000,
  WS_PORT: 3000
}
