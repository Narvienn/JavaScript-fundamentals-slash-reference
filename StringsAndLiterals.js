const firstName = 'Zos';
const job = 'QA Engineer';
const birthYear = 1988;
const year = 2024;

const zos_faq = "I'm" + firstName + ", a" + (birthYear - year) + " year-old" + job + ".";
//How can we concatenate strings with numbers? JS does TYPE COERCION, i.e. converts the number to a string 

//TEMPLATE LITERAL (ES6 upwards) - uses backticks, NOT single quotes:

const zos_faq_new = `I'm ${firstName}, a ${(birthYear - year)} year-old ${job}.`
console.log(zos_faq_new) 

//NOTE: Backticks can also be used for regular strings, not just literals

//Multi-line strings:
//Older (single quotes)
console.log('String with \n\
    multiple \n\
    lines')

//Newer (backticks)
console.log(`String
    with
    multiple
    lines`)