type StringOrNum = string | number;
type ObjWithName = {
  name: string,
  uid: StringOrNum,
};

const logDetails = (uid: StringOrNum | number, item: string) => {
  console.log(`${item} has a uid of ${uid}.`);
}

const greet = (user: ObjWithName) => {
  console.log(`${user.name}, says hello!`);
}

// const greetAgain = (user: {
//   name: string,
//   uid: string | number
// }) => {
//   console.log(`${user.name}, says hello!`);
// }