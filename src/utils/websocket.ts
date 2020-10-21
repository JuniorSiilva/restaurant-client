import Echo from 'laravel-echo'
import { Channel } from 'laravel-echo/dist/channel'
import store from '../store'

declare global {
  interface Window {
    io: any
  }
}

class WebSocketConnection extends Echo {
  private static instance: WebSocketConnection

  private constructor(options: any) {
    super(options)
  }

  private static getWebSocketConnection(): WebSocketConnection {
    window.io = require('socket.io-client')

    console.log(store)

    return new WebSocketConnection({
      authEndpoint: process.env.VUE_APP_AUTH_ENDPOINT,
      broadcaster: process.env.VUE_APP_BROADCASTER,
      host: process.env.VUE_APP_HOST,
      auth: {
        headers: {
          Authorization: store.getters['auth/bearerToken'],
          Tenant: store.getters['tenant/customer'],
        },
      },
    })
  }

  public static getInstance(): WebSocketConnection {
    if (!WebSocketConnection.instance) {
      WebSocketConnection.instance = WebSocketConnection.getWebSocketConnection()
    }

    return WebSocketConnection.instance
  }

  public private(channel: string): Channel {
    // getSubdomain()
    return super.private('restaurante-1.' + channel)
  }
}

export { WebSocketConnection }
