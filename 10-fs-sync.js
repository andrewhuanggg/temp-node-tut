const {readFileSync,writeFileSync} = require('fs') //importing the readFileSync and writeFileSync methods from the 'fs' module 

console.log('start')
//READING FILE 
//readFileSync('filename_here', 'encoding') : reads and returns contents of the text file 
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

//console.log(first,second)

//WRITING TO A FILE 
//writeFileSync('filename_here', 'what to write to the file')
//**Creates new file if the filename doesn't already exist */
/*This method will overrite the contents of the file if the file already exists*/

/*
writeFileSync('./content/result-sync.txt',
`Here is the result:  ${first},${second}`)
*/

//APPENDING TO A FILE 

writeFileSync('./content/result-sync.txt',
`Here is the result:  ${first},${second}`,{flag: 'a'})

console.log('done with this task')
console.log('starting the next one')