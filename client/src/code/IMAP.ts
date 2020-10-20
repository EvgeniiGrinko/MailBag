import Axios, { AxiosResponse } from "axios";
import { config } from "./config";

export interface IMailbox { name : string, path : string };
export interface IMessage { id : number, from : string, subject : string, date: string,
body?: string  };

export class Worker {
    public async listMailboxes(): Promise<IMailbox[]> {
        const response: AxiosResponse = await Axios.get(`${config.serverAddress}/mailboxes`);
        return response.data;
    };
    public async listMessages(inMailbox: string): Promise<IMessage[]> {
        const response: AxiosResponse = await Axios.get(`${config.serverAddress}/mailboxes/${inMailbox}`
        );
        return response.data;
    };
    public async getMessageBody(inID: number, inMailbox: string): Promise<string> {
        const response: AxiosResponse = await Axios.get(
                `${config.serverAddress}/messages/${inMailbox}/${inID}`
        );
        console.log(response.data);
        return response.data;
    };
    public async deleteMessage(inID: string, InMailbox: string): Promise<void> {
        await Axios.delete(`${config.serverAddress}/messages/${InMailbox}/${inID}`);
    }
}