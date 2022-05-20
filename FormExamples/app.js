let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener("submit", formHandler);
function formHandler(event) {
    event.preventDefault();
    let user_name = document.querySelector("#username");
    let puan = document.querySelector("#score");
    addItem(user_name.value, puan.value)
}

let userListDom = document.querySelector("#userList");
const addItem = (username,score) => {
     let liDom = document.createElement("li");
     liDom.innerHTML= `${username} ${score}`
     userListDom.append(liDom);


}

















