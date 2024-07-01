function finance(){
    //first I have prompted the user to enter the basic salary and the benefits which I have stored in variables.
    let basicSalary=prompt('Input your basic salary');
    let benefit=prompt('Input your benefits/allowance');

    //The next step is to convert the user's input to Number since we are going to compare numbers and validate the input
    basicSalary=Number(basicSalary);
    benefit=Number(benefit);

    //VALIDATION OF THE INPUT

    if (isNaN(basicSalary) || isNaN(benefit) ||basicSalary<0 || benefit<0){
        console.log('SORRY !!! PLEASE ENTER A VALID NUMBER FORMAT');
        alert('SORRY!!! PLEASE ENTER A VALID NUMBER FORMAT');
        return;
    }

    //DEFINITION OF FORMULAS AND VARIABLES

    let grossSalary=basicSalary + benefit;
    let nssfDeduction=grossSalary*0.6; 
    let taxableIncome=grossSalary-nssfDeduction;
    let paye=calcPaye(taxableIncome); //the calcPaye function takes in the taxableIncome as its argument so as to calculate the paye based on different brackets
    let nhif=calcNhif(taxableIncome);
    let netSalary=grossSalary-nssfDeduction-paye-nhif;

    //AFTER THE CALCULATION OF DIFFERENT VALUES I DISPLAY THE OUTPUT ON THE CONSOLE AND THE WEB WINDOW
    console.log(`YOUR GROSS SALARY IS ${grossSalary}`);
    alert(`YOUR GROSS SALARY IS ${grossSalary}`);

    console.log(`YOUR NSSF DEDUCTION IS ${nssfDeduction}`);
    alert(`YOUR NSSF DEDUCTION IS ${nssfDeduction}`);

    console.log(`YOUR TAXABLE INCOME IS ${taxableIncome}`);
    alert(`YOUR TAXABLE INCOME IS ${taxableIncome}`);

    console.log(`YOUR PAYE DEDUCTION IS ${paye}`);
    alert(`YOUR PAYE DEDUCTION IS ${paye}`);

    console.log(`YOUR NHIF DEDUCTION IS ${nhif}`);
    alert(`YOUR NHIF DEDUCTION IS ${nhif}`);


    console.log(`YOUR NET SALARY IS ${netSalary}`);
    alert(`YOUR NET SALARY IS ${netSalary}`);

}


//calcPaye returns the paye based on different incomes level,each income bracket has a different tax .

function calcPaye(taxableIncome){
    if(taxableIncome<=24000){
        return taxableIncome*0.1;
    }
    else if(taxableIncome>=24001 && taxableIncome<=32333){
        return taxableIncome*0.25;
    }
    else if(taxableIncome>=32334 && taxableIncome<=500000){
        return taxableIncome*0.3;
    }
    else if(taxableIncome>=500001 && taxableIncome<=800000){
        return taxableIncome*0.325;
    }
    else if(taxableIncome>800000){
        return taxableIncome*0.35;
    }

}

//This function calculates the nhif deduction based different income values
function calcNhif(taxableIncome){
    if(taxableIncome<=5999){
       return 150;
    }
    else if(taxableIncome>=6000 && taxableIncome<=7999){
        return 300;
    }
    else if(taxableIncome>=8000 && taxableIncome<=11999){
        return 400;
    }
    else if(taxableIncome>=12000 && taxableIncome<=14999){
        return 500;
    }
    else if(taxableIncome>=15000 && taxableIncome<=19999){
        return 600;
    }
    else if(taxableIncome>=20000 && taxableIncome<=24999){
        return 750;
    }
    else if(taxableIncome>=25000 && taxableIncome<=29999){
        return 850;
    }
    else if(taxableIncome>=30000 && taxableIncome<=34999){
        return 900;
    }
    else if(taxableIncome>=35000 && taxableIncome<=39999){
        return 950;
    }
    else if(taxableIncome>=40000 && taxableIncome<=44999){
        return 1000;
    }
    else if(taxableIncome>=45000 && taxableIncome<=49999){
        return 1100;
    }
    else if(taxableIncome>=50000 && taxableIncome<=59999){
        return 1200;
    }
    else if(taxableIncome>=60000 && taxableIncome<=69999){
        return 1300;
    }
    else if(taxableIncome>=70000 && taxableIncome<=79999){
        return 1400;
    }
    else if(taxableIncome>=80000 && taxableIncome<=89999){
        return 1500;
    }
    else if(taxableIncome>=90000 && taxableIncome<=99999){
        return 1600;
    }
    else if(taxableIncome>=100000){
        return 1700;
    }
    

}
finance();