let option = 1;
let num1, num2;
let ans;

num1 = 10;
num2 = 20;
switch (option) {
  case 1:
    ans = num1 + num2;
    console.log(ans);
    break;
  case 2:
    ans = num1 - num2;
    console.log(ans);
    break;
  case 3:
    ans = num1 * num2;
    console.log(ans);
    break;

  case 4:
    ans = num1 / num2;
    console.log(ans);
    break;
  default:
    console.log("Wrong choice");
    break;
}
