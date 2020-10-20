import * as path from "path";

var Datastore = require('nedb');
const Nedb = require("nedb");
export interface IContact {
  _id?: any;
  name: string;
  email: string;
}
export class Worker {
  private db: typeof Nedb;
  constructor() {
    this.db = new Datastore({  filename : `${path.join(__dirname, "contacts.db")}` });
     this.db.loadDatabase(function (inError: any) {  
      if (inError) {
        throw  inError;
      } else {
        
      }  // Callback is optional
  // Now commands will be executed
});
    // this.db = new Datastore({
    //   filename: path.join(__dirname, "contacts.db"),
    //   autoloaded: true,
    // });
  }
  public listContacts(): Promise<IContact[]> {
    return new Promise((inResolve, inReject) => {
      this.db.find({}, (inError: Error, inDocs: IContact[]) => {
        if (inError) {
          inReject(inError);
        } else {
          inResolve(inDocs);
        }
      });
    });
  }
  public addContact(inContact: IContact): Promise<IContact> {
    return new Promise((inResolve, inReject) => {
      this.db.insert(inContact, (inError: Error | null, inNewDoc: IContact) => {
        if (inError) {
          inReject(inError);
        } else {
          inResolve(inNewDoc);
        }
      });
    });
  }
  public deleteContact(inID: string): Promise<string> {
    return new Promise((inResolve, inReject) => {
      this.db.remove(
        { _id: inID },
        {},
        (inError: Error | null, inNumRemoved: number) => {
          if (inError) {
            inReject(inError);
          } else {
            inResolve();
          }
        }
      );
    });
  }
  public updateContact(inContact: IContact): Promise<number> {
    return new Promise((inResolve, inReject) => {   
      this.db.update(
        { _id: `${inContact._id}` },
        {name : inContact.name,
          email : inContact.email
        },
        {},
        (inError: Error | null, NumReplaced: number) => {
          if (inError) {
            inReject(inError);
          } else {
            inResolve();
          }
        }
      );
    });
  }
}
