let employees=[];

function addEmp(id,name,salary = true){
    employees.push({id,name,salary});
    console.log("Employee added",employees);

}
addEmp(1,"vikashini",200000)
addEmp(2,"hari",300000)
addEmp(3,"john",400)
//to update emp
function updateEmp(id,newDetail){
   const emp=employees.find(e=>e.id === id)
   if(emp){
       Object.assign(emp, newDetail);
       console.log("update",employees)
   }else{
    console.log("employees not found")
   }
}
   updateEmp(2,{name:"rishi"});
//to delete emp
function removeEmp(id) {
    const index = employees.findIndex((e)=>e.id === id);
    if(index !== -1){
    employees.splice(index, id)
    console.log("employee removed",employees)
    }else{
      console.log("employee not found")  
    }
}
removeEmp(1)
//to caluculate totalsalary
function totalsalary(){
    const total=employees.reduce((sum,emp)=>sum+emp.salary, 0);
    console.log("total salary is",total);
}
totalsalary()