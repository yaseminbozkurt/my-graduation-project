let bag = [];
let btn = document.getElementById("btn");

btn.addEventListener("click", async function () {
  let nameSurname = document.getElementById("nameSurname").value;
  let userTel = document.getElementById("userTel").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const base_url = window.location.origin;

  // let specialkey = document.getElementById("specialkey").value;
  let registerData = {
    nameSurname,
    userTel,
    email,
    password,
    // specialkey
  };
  bag = { ...registerData };
  // const res = await fetch("https://dummyjson.com/users", {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(bag),
  const res = await fetch(`${base_url}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bag)
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.msg);
      if (res.msg === "Admin Signup Successfull") {
        localStorage.setItem("admin", res.name)
        window.location.href = "../index.html"
      }
    })
    .catch((err) => {
      console.log(err);
    });
});