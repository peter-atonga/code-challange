function gradeCalculator(){

let marks=prompt('ENTER YOUR MARKS');

marks=Number(marks); 


if(isNaN(marks) || marks<0 || marks>100){
    console.log('WARNING !!! ENTER VALID MARKS');
    alert('WARNING !!! ENTER VALID MARKS');
}


if(marks>79 && marks<=100){
    console.log(`Congratulations You have an: A`);
    alert(`Congratulations You have an : A`)

}else if(marks>=60 && marks<=79){
    console.log(`Well Done You have a: B`);
    alert(`Well Done You have a : B`)

}else if(marks>=49 && marks<=59){
    console.log(`Nice Try You have a C`);
    alert(`Nice Try You have a : C`);

}else if(marks>=40 && marks<=49){
    console.log(`There is Room for Improvement You have a D`);
    alert(`There is Room for Improvement You have a : D`);

}else if(marks<40 && marks>0){
    console.log(`BE SERIOUS ! You have an E`);
    alert(`BE SERIOUS ! You have an : E`);

}

}

gradeCalculator();