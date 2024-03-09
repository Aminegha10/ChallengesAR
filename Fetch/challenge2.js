async function fetchUserData(){
  let data=await fetch("https://dummyjson.com/users")
  return  data.json();
}
async function processUserData(data){
  let filterMale=data.users.filter((user)=>user.gender=="male")
  let mapMale=filterMale.map(function ({firstName,lastName,age}){
     return "name:"+firstName+" "+lastName+" "+"age:"+age
  })
  for(let i=0;i<mapMale.length;i++){console.log(mapMale[i])}
  return filterMale
}
 function summarizeAge(filterMale){
  let totalMaleAge=filterMale.reduce((accumulator,{age})=>accumulator+age,0)
  return totalMaleAge;
}
a=(async()=>{
  let data=await fetchUserData()
  console.log("Processed Users:")
  let filterMale=await processUserData(data)
  let totalMaleAge=summarizeAge(filterMale)
  console.log("Total Age of Active",totalMaleAge)
})
a();


