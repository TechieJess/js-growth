function init () {
let number = Number(prompt("Enter a number from 1-10"))

while(number < 1 || number > 10) {
    number = prompt("Invalid! Enter a number from 1 to 10")
}

switch(number) {
    case 1:
        alert("Back to square 1");
        break;
    case 2:
        alert("Goody-2-shoes");
        break;
    case 3:
    case 6:
        alert("Two's company, three's a crowd");
        break;
    case 4:
    case 9:
        alert("Counting sheep");
        break;
    case 5:
        alert("Take five");
        break;
    case 7:
        alert("Seventh heaven");
        break;
    case 8:
        alert("Behind the eight-ball");
        break;
    case 10:
        alert("Cheaper by the dozen");
        break;
}

// METHOD 2
// if(number === 1) {
//     alert("Back to square 1")
// } else if(number === 2) {
//     alert("Goody-2-shoes")
// } else if(number === 3 || number === 6) {
//     alert("Two's company, three's a crowd")
// }  else if(number === 4 || number === 9) {
//     alert("Counting sheep")
// } else if(number === 5) {
//     alert("Take 5")
// } else if(number === 7) {
//     alert("Seventh Heaven")
// } else if(number === 8) {
//     alert("Behind the eight ball")
// } else if(number === 10) {
//     alert("Cheaper by the dozen")
// } else {
//     alert("Invalid Number!")
// }

}

init()

