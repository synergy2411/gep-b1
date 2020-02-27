import { IUser } from "./user";

export const USER_DATA: IUser[] = [
  {
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1965"),
    isWorking: true,
    income: 5000,
    company: "Microsoft",
    image: "assets/images/bill.jpg",
    vote: 120
  },
  {
    firstName: "steve",
    lastName: "jobs",
    dob: new Date("Jan 2, 1965"),
    isWorking: false,
    income: 0,
    company: "Apple",
    image: "assets/images/steve.jpg",
    vote: 180
  },
  {
    firstName: "Tim B.",
    lastName: "Lee",
    dob: new Date("Aug 1, 1965"),
    isWorking: true,
    income: 2000,
    company: "World Wide Web",
    image: "assets/images/tim.jpg",
    vote: 140
  }
];
