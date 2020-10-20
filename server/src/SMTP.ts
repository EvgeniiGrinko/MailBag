const  Mail = require("nodemailer");
import * as nodemailer from "nodemailer";
import { SendMailOptions, SentMessageInfo } from "nodemailer";
import { IServerInfo } from "./ServerInfo";
//const nodemailer = require("nodemailer");
export class Worker {
  private static serverInfo: IServerInfo;
  constructor(inServerInfo: IServerInfo) {
    Worker.serverInfo = inServerInfo;
  }
  public sendMessage(inOptions: SendMailOptions): Promise<string> {
    return new Promise((inResolve, inReject) => {
      const transport: typeof Mail = nodemailer.createTransport(
        Worker.serverInfo.smtp
      );
      transport.sendMail(
        inOptions,
        (inError: Error | null, inInfo: SentMessageInfo) => {
          if (inError) {
            console.log(`Something went wrong ${inError}`);
            inReject(inError);
          } else {
            inResolve();
          }
        }
      );
    });
  }
}
