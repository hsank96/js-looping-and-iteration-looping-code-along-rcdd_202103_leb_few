// Code your solutions in this file

//let names =[ 'Lisa', 'Kaitlin', 'Jan' ];
//let events = 'surprise';
let messages=[];

function writeCards(names,events){
  for (let i=0; i<names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return messages;
}

console.log(writeCards(['Lisa','Kaitlin','Jan'],'surprise'));

function countDown(num){
  if (num >= 0){
    while (num >= 0){
      console.log(num);
      num--;
    }
  }
  else{
    console.log("Please enter a positive integer!")
  }
}

