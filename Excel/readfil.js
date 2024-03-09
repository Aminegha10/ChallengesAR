const XLSX = require("xlsx");
let workbook = XLSX.readFile("./employee_data_.xlsx");
let worksheet = workbook.Sheets["a"];
var data = XLSX.utils.sheet_to_json(worksheet);
var newdata;
newdata = data.map((ele) => {
  let salary = ele.AnnualSalary;
  if (salary <= 50000) {
    return { ...ele, BonusPercentage: 5+"%", BonusAmount: salary * 0.5 };
  } else if (salary > 50000 && salary <= 100000) {
    return { ...ele, BonusPercentage: 7+"%", BonusAmount: salary * 0.7 };
  } else {
    return { ...ele, BonusPercentage: 1+"%", BonusAmount: salary * 0.1 };
  }
});
console.log("a");
console.log(newdata);
let newWorkbook = XLSX.utils.book_new();
let newWorksheet = XLSX.utils.json_to_sheet(newdata);
XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "amine");
XLSX.writeFile(newWorkbook, "a.xlsx");
//XLSX.writeFile(worksheet, "./amine.xlsx");
