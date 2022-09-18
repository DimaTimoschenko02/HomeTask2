import { INote } from "../types/notes.types";

export default class NoteDTO {
  name: string;
  id: string;
  category: string;
  content: string;
  archieved: boolean;
  dates: string;
  createdAt: string;
  constructor(note: INote) {
    this.name = note.name;
    this.id = note.id;
    this.content = note.content;
    this.category = note.category;
    this.archieved = note.archieved;
    this.createdAt = note.createdAt? note.createdAt: this.setCreateTime()
    this.dates = this.getDates(note.content);
  }
  getDates(str: string) {
    const res = str.match(/\d{2}(\D)\d{2}\1\d{4}/g);

    if (res) {
      let str = "";
      res.forEach((e) => (str += " " + e));
      return str;
    }
    return "";
  }
  setCreateTime() {
    const date = new Date();
    let fullDate =
      date.getUTCMonth() + "/" + date.getUTCDay() + "/" + date.getUTCFullYear();
      return fullDate
  }
  
}
