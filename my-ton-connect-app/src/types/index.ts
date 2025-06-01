export interface TonConnectOptions {
    network: string;
    wallet: string;
    onConnect: (address: string) => void;
    onDisconnect: () => void;
}

export interface TonConnectResponse {
    address: string;
    network: string;
}