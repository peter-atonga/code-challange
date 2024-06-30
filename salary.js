function salaryCalculator(){
let basicSalary= Number(prompt("input your basic here"))
let benefits=Number(prompt("enter your basic pay"))

let payee= Math.floor((basicSalary+benefits)*0.25)
let nhifDeductions=Math.floor(basicSalary*0.1)
let nssfDeductions=Math.floor(basicSalary*0.11)

let grossSalary=Math.floor(basicSalary+benefits)
let netSalary =Math.floor(grossSalary-payee-nhifDeductions-nssfDeductions)


return alert(netSalary)
}
    return netSalaryCalculator();
