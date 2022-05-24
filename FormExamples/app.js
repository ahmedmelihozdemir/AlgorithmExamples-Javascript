let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener("submit", formHandler);

const alert = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}!</strong> ${message}.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
  </button>
</div>
`
const alertDom = document.getElementById("alert");

function formHandler(event) {
    event.preventDefault();
    let user_name = document.querySelector("#username");
    let puan = document.querySelector("#score");
    if (user_name.value && puan.value) {
        addItem(user_name.value, puan.value)
        user_name.value = "";
        puan.value = "";
    } else {
        alertDom.innerHTML = alert("Başlık bilgisi",
            "Lütfen boş alan bırakmayınız!",
            "danger"
        );
    }

}

let userListDom = document.querySelector("#userList");
const addItem = (username, score) => {
    let liDom = document.createElement("li");
    liDom.innerHTML = `
     ${username}
     <span class="badge bg-primary rounded-pill">${score}</span>
     `
    liDom.classList.add(
        "list-group-item", "d-flex", "justify-content-between", "align-items-center"
    )
    userListDom.append(liDom);


}