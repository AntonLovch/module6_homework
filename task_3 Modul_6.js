function FirstFunction(first_num){
    function SecondFunction(second_num) {
        return first_num + second_num;
    }
    return SecondFunction(2);
} 
let result = FirstFunction(3);
console.log(result);