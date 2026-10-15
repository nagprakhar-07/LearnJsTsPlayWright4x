let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:                 //this will be ignored as case 10 is already matched
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");

}