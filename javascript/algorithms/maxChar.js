//To find the maximum characters in length

function maxChar(str){
    const charMap = {};

    for (let char of str){
      if(charMap[char]) {  
        charMap[char]++;
      } else {
        charMap[char] = 1;
    }
  }
}

maxChar('Hello World');