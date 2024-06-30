function studentScoreGenerator(){
    let grade = Number(prompt("input your grade here"));
    if (grade < 0 || grade > 100) {
        return alert("invalid")}
    else if (grade > 79) {
            return alert("A")
        }
        else if (grade > 60 && grade<=79) {
            return alert("B")
    }
    else if (grade > 49 && grade<=59) {
        return alert("C")
}
else if (grade > 40 && grade<=49) {
    return alert("D");
}
else
     return alert("E")
} 
return marks

console.log(studentScoreGenerator());