const num1 = "12365"
const num2 = "12321"


function isPalindrom(number){
  
  let rev = []
  
  for (var i = number.length - 1; i >= 0; i--) {
    console.log(number[i])
    
    rev.push(number[i])
    
  }
  return rev.join("")
  
}
console.log(isPalindrom(num1))
