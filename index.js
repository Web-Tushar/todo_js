let input = document.querySelector(".input");
let addbtn = document.querySelector(".addbtn");
let error = document.querySelector(".error");
let main = document.querySelector(".main");

let store = []
let todoindex

addbtn.addEventListener('click',()=>{
     if(input.value !== "" && addbtn.innerHTML == "Add" ){
          error.innerHTML = ""
          store.push(input.value)
          input.value = ""
          todo()



     }else if(input.value !== "" && addbtn.innerHTML == "Update"){
          store[todoindex] = input.value
          input.value = ""
          addbtn.innerHTML = "Add"
          todo()
          
     }
     else{
          error.innerHTML= "please input your todo"
     }
     
})

function todo(){
     // =====create operation====
     main.innerHTML = ""
     store.map((item, index)=>{
          main.innerHTML += `<li>${item} <button class="deletebtn"> delete</button> <button class="editbtn"> edit</button></li>`
     })
     // =====update operation ====
     let editbtn = document.querySelectorAll(".editbtn");
     let editbtnrrr = Array.from(editbtn)
     editbtnrrr.map((edititem,editindex)=>{
          edititem.addEventListener("click",()=>{
               addbtn.innerHTML = "Update"
               input.value = store[editindex]
               todoindex = editindex
          })
     })
     // ====delete operation====
     let deletebtn = document.querySelectorAll(".deletebtn");
     let deletebtnrrr = Array.from(deletebtn);
     deletebtnrrr.map((deleteitem,deleteindex)=>{
          deleteitem.addEventListener("click",()=>{
               store.splice(deleteindex,1)
          todo()

          })
     })

}