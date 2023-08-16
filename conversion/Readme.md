import { numberToString } from './numberToString.js';
import { stringToNumber } from './stringToNumber.js';
import { formatDate } from './formatDate.js';
import { arrayToString } from './arrayToString.js';
import { stringToArray } from './stringToArray.js';
import { objectToJSON } from './objectToJSON.js';
import { jsonToObject } from './jsonToObject.js';
import { convertTimeTo12HourFormat } from './convertTimeTo12HourFormat.js';


# mengkonversikan angka ke string

const angka = 123;
const angkaString = CihuyIntToStr(angka);
console.log(angkaString); // Output: "123"
# mengkonversikan string ke angka

const stringAngka = "456";
const angkaDariString = CihuyStrtoInt(stringAngka);
console.log(angkaDariString); // Output: 456

# mengkonversikan dateTime
const dateTime = new Date();
const formattedDateTime = CihuyDate(dateTime);
console.log(formattedDateTime); // Output: "16 Agustus 2023 12.34.56 WIB"
# mengkonversikan array to string

const arr = ['apple', 'banana', 'orange'];
const result = CihuyArrToStr(arr, ', ');
console.log(result); // Output: "apple, banana, orange"
# mengkonversikan string to array

const str = 'apple, banana, orange';
const result = CihuyStrtoArr(str, ', ');
console.log(result); // Output: ["apple", "banana", "orange"]
# mengkonversikan object to JSON

const obj = { name: 'John', age: 30, city: 'New York' };
const result = CihuyObjtoJSON(obj);
console.log(result); // Output: {"name":"John","age":30,"city":"New York"}
# mengkonversikan JSON to Object

const jsonString = '{"name":"John","age":30,"city":"New York"}';
const result = CihuyJSONtoObj(jsonString);
console.log(result); // Output: { name: 'John', age: 30, city: 'New York' }
# mengkonversikan waktu

const currentTime = new Date();
const formattedTime = CihuyTime(currentTime);
console.log(formattedTime); // Output: "12:34:56 PM"
