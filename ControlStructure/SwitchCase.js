// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//without break it matches every case below it except default

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}