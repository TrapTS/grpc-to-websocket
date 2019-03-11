import { Config } from './config'

export const config: Config = {
  logPath: `${process.env.PWD}/logs`,
  WS_PORT: 3000,
  gRPC_PORT: 7000
}
