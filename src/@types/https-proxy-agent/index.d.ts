declare module 'https-proxy-agent' {
    import * as H from 'https-proxy-agent'

    export interface Options {
        host: string,
        port: number
    }

    export class HttpsProxyAgent {
        constructor(Options)
    }
}
