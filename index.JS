const btn_add = document.getElementById("btn-add");
//console.log(btn_add);
btn_add.addEventListener("click", function () {
//console.log("hello");
// const form= document.querySelector(".form");
// console.log(form);
const form= btn_add.parentElement
//console.log(form);
const input_title= form.querySelector("input")
//console.log(input_title);
const input_date= input_title.nextElementSibling
// console.log(input_date)
let title=input_title.value
// console.log(title)
let date=input_date.value
// console.log(date);
// if(title=="" || date==""){
//     return alert("texte manquant")
// }
// console.log("after test");
if(!title || !date){
    return alert("texte manquant")
}
//creation des elements
let task= document.createElement("section")
let check= document.createElement("input")
let ptitle= document.createElement("p")
let pdate= document.createElement("p")
let edit= document.createElement("i")
let del= document.createElement("i")
//positionnement de l'element
let main= document.getElementById("section_task")
main.appendChild(task);
task.appendChild(check)
task.appendChild(ptitle)
task.appendChild(pdate)
task.appendChild(edit)
task.appendChild(del)
//remplissage de l'element
task.setAttribute("class","task")
check.setAttribute("type","checkbox")
ptitle.setAttribute("class","title")
ptitle.innerText=title    
pdate.setAttribute("class","date")
pdate.innerText=date 
edit.setAttribute("class","bi bi-wrench-adjustable")
del.setAttribute("class","bi bi-x-circle")
//delete task
let btns_del=main.getElementsByClassName("bi-x-circle")
console.log(btns_del)
for (let i = 0; i < btns_del.length; i++) {
    // console.log("hello")
    btns_del [i].addEventListener("click",delete_task)

}
























});
function delete_task() {
    console.log("hello")
    
}