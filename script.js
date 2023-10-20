//1)

let x = 100;

if (x < 50){
    console.log("ნაკლებია 50-ზე")
} if (x > 20){
    console.log("მეტია 20-ზე")
} else {
    console.log("შეცდომა")
}

//2)
let userName = "მარიამ";

let result = userName == "მარიამ" ? "true" : "false";
console.log(result)

//3)

let name = "მარიამ";

switch(name){
    case "მარიამ":
        console.log(true);
    default:
        console.log("false")
}

