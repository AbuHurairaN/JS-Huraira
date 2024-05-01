const name = 'Nhuraira'
const otherName = 'Forever'

console.log(name + " " + otherName);
console.log(`Hello my name is ${name} and this name will be made to stay ${otherName}`);

const schoolName = new String('HighLandHighSchool')
console.log(schoolName);
console.log(schoolName.__proto__);
console.log(schoolName.toLocaleUpperCase());

//to replace something inside the url
const url = 'https://Nhuraira.com/Nhuraira%20Forever'
console.log(url.replace('%20', '-'))

//to replace strings
const stringOne = 'Nhuraira-stays-forever'
console.log(stringOne.split('-'));