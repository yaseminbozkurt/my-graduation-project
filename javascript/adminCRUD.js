let motherDiv = document.getElementById("right_div_2")
// ADD Products------------------------------------------------------->

let addBtn = document.getElementById("add")
addBtn.addEventListener("click", async () => {
  motherDiv.innerHTML = ""
  let div1 = document.createElement("div")
  div1.setAttribute('id', 'showAdd')
  motherDiv.append(div1)
  let div2 = document.getElementById("showAdd");
  div2.innerHTML = ""
  div2.innerHTML = `
    <div id="register">
      <input type="text" id="image" placeholder="Enter Pdt Image" />
      <input type="text" id="name" placeholder="Enter Name" />
      <input type="number" id="rating" placeholder="Enter Rating" />
      <input type="number" id="lowprice" placeholder="Enter Low Price" />
      <input type="number" id="highprice" placeholder="Enter High Price" />
      <input type="number" id="quantity" placeholder="Enter Quantity" />
      <input type="text" id="Category" placeholder="Enter Category" />
      <input onclick="add()" type="submit" id="btn" />
    </div>
    `
})

// let btn = document.getElementById("btn");
let bag = [];

async function add() {
  let name = document.getElementById("name").value;
  let image = document.getElementById("image").value;
  let rating = document.getElementById("rating").value;
  let lowprice = document.getElementById("lowprice").value;
  let highprice = document.getElementById("highprice").value;
  let quantity = document.getElementById("quantity").value;
  let Category = document.getElementById("Category").value;
  let data = {
    name,
    image,
    rating,
    lowprice,
    highprice,
    quantity,
    Category,
  };
  bag = { ...data };
  let res = await fetch("http://localhost:1337/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(bag),
  })
  const msg = await res.json()
  alert(msg);

  document.getElementById("name").value = ""
  document.getElementById("image").value = ""
  document.getElementById("rating").value = ""
  document.getElementById("lowprice").value = ""
  document.getElementById("highprice").value = ""
  document.getElementById("quantity").value = ""
}
//SHOW PRODUCT
let showAll = document.getElementById("showAllBtn")
showAll.addEventListener("click", async () => {
  try {
    let res = await fetch("http://localhost:1337/api/products", {
      headers: { Authorization: localStorage.getItem("token") },
    });

    if (res.ok) {
      let { data } = await res.json();
      console.log(data);
      if (Array.isArray(data) && data.length > 0) {
        bag = data;
        render(bag); //  DISPLAY**------>
      } else {
        console.log("Veri bir dizi değil veya dizi boş.");
      }
    } else {
      console.log("İstek başarısız: " + res.status);
    }
  } catch (err) {
    console.log(err);
  }
});

async function render(bag) {
  motherDiv.innerHTML = "";
  let div1 = document.createElement("div");
  div1.setAttribute("id", "showAll");
  motherDiv.append(div1);

  document.getElementById("showAll").innerHTML = "";
  document.getElementById("showAll").innerHTML = `
    ${bag
      .map((item) => {
        let id = item.id;
        let name = item.attributes.title;
        let image = item.attributes.image; // Resim için uygun değeri buraya atayın
        let price = item.attributes.price;
        let quantity = 0; // Miktar için uygun değeri buraya atayın
        let Category = ""; // Kategori için uygun değeri buraya atayın
        return renderCard(name, image, price, quantity, Category, id);
      })
      .join("")}
  `;

  let delete_btns = document.querySelectorAll(".delete-btn");
  for (delete_btn of delete_btns) {
    delete_btn.addEventListener("click", function () {
      let id = event.target.dataset.id;
      deletePdt(id);
    });
  }

  let update_btns = document.querySelectorAll(".update-btn");
  for (update_btn of update_btns) {
    update_btn.addEventListener("click", function () {
      let id = event.target.dataset.id;
      updatePdt(id);
    });
  }
}

// Render Card-------------------------------------------------------
function renderCard(name, image, price, quantity, Category, id) {
  let formattedPrice = price ? `$${price.toFixed(2)}` : "";

  return `
    <div>
      <div><img src="${image}" alt="Product Image"></div>
      <div><h5>${name}</h5></div>
      <div><h5>${formattedPrice}</h5></div>
      <div><h6>Qty: ${quantity}</h6></div>
      <div><h6>Category: ${Category}</h6></div>
      <div>
        <button class="delete-btn" data-id="${id}">Delete</button>
        <button class="update-btn" data-id="${id}">Update</button>
      </div>
    </div>`;
}

// DELETE PDT------------------------------------------------------
async function deletePdt(id) {
  try {
    let res = await fetch(`http://localhost:1337/api/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: localStorage.getItem("token") },
    });

    if (res.ok) {
      const { message } = await res.json();
      alert(message);
      let res2 = await fetch("http://localhost:1337/api/products", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      if (res2.ok) {
        let { data } = await res2.json();
        bag = [...data];
        render(bag); //  DISPLAY********************************------>
      } else {
        console.log("İstek başarısız: " + res2.status);
      }
    } else {
      console.log("İstek başarısız: " + res.status);
    }
  } catch (err) {
    console.log(err);
  }
}

// UPDATE PDT------------------------------------------------------
async function updatePdt(id) {
  localStorage.setItem("id", id);
  motherDiv.innerHTML = "";
  let div1 = document.createElement("div");
  div1.setAttribute("id", "updatePdt");
  motherDiv.append(div1);

  document.getElementById("updatePdt").innerHTML = "";
  document.getElementById("updatePdt").innerHTML = `
    <div id="register1">
      <label for="">Name</label>
      <input type="text" id="name" placeholder="Enter Name" />
      <label for="">Image</label>
      <input type="text" id="image" placeholder="Enter Pdt Image" />
      <label for="">Rating</label>
      <input type="number" id="rating" placeholder="Enter Rating" />
      <label for="">Low Price</label>
      <input type="number" id="lowprice" placeholder="Enter Low Price" />
      <label for="">High Price</label>
      <input type="number" id="highprice" placeholder="Enter High Price" />
      <label for="">Quantity</label>
      <input type="number" id="quantity" placeholder="Enter Quantity" />
      <label for="">Category</label>
      <input type="text" id="Category" placeholder="Enter Category" />
      <input onclick="update()" type="submit" id="updatebtn" />
    </div>
  `;

  try {
    let res = await fetch(`https://good-rose-goshawk-yoke.cyclic.app/pdt/${id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });

    if (res.ok) {
      let { data } = await res.json();
      document.getElementById("name").value = data.attributes.title;
      document.getElementById("image").value = ""; // Image için uygun değeri buraya atayın
      document.getElementById("rating").value = ""; // Rating için uygun değeri buraya atayın
      document.getElementById("lowprice").value = ""; // Low price için uygun değeri buraya atayın
      document.getElementById("highprice").value = ""; // High price için uygun değeri buraya atayın
      document.getElementById("quantity").value = ""; // Quantity için uygun değeri buraya atayın
      document.getElementById("Category").value = ""; // Category için uygun değeri buraya atayın
    } else {
      console.log("İstek başarısız: " + res.status);
    }
  } catch (err) {
    console.log(err);
  }
}

async function update() {
  let name = document.getElementById("name").value;
  let image = document.getElementById("image").value;
  let rating = document.getElementById("rating").value;
  let lowprice = document.getElementById("lowprice").value;
  let highprice = document.getElementById("highprice").value;
  let quantity = document.getElementById("quantity").value;
  let Category = document.getElementById("Category").value;
  let data = {
    name,
    image,
    rating,
    lowprice,
    highprice,
    quantity,
    Category,
  };
  let id = localStorage.getItem("id");

  try {
    let res = await fetch(`https://good-rose-goshawk-yoke.cyclic.app/pdt/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const msg = await res.json();
      alert(msg);

      let res2 = await fetch("https://good-rose-goshawk-yoke.cyclic.app/pdt", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      if (res2.ok) {
        let { data } = await res2.json();
        bag = [...data];
        render(bag); //  DISPLAY********************************------>
      } else {
        console.log("İstek başarısız: " + res2.status);
      }
    } else {
      console.log("İstek başarısız: " + res.status);
    }
  } catch (err) {
    console.log(err);
  }
}

//---------------------------USERS-----------------------------//

let showuser = document.getElementById("showUserBtn")
let user = [];
showuser.addEventListener("click", async () => {

  let res = await fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((res) => {
      user = [...res];
      console.log(user)
      renderUser(user);//  DISPLAY********************************------>
    })
    .catch((err) => {
      console.log(err);
    });
})

function renderUser(user) {//  DISPLAY***********************------>
  console.log("ABC")
  motherDiv.innerHTML = ""
  let div = document.createElement("div")
  div.setAttribute('id', 'showUser')
  motherDiv.append(div)

  document.getElementById("showUser").innerHTML = "";
  document.getElementById("showUser").innerHTML = `
  ${user
      .map((item) => {
        let id = item._id;
        let name = item.name;
        let email = item.email;
        let mob = item.mob;
        return `<div>
      <div><h5>Name: ${name}</h5></div>
      <div><h5>Email: ${email} </h5></div>
      <div><h5>Mobile: ${mob}</h5></div>
      <div><button  class="user_delete-btn" data-id=${id} >Delete</button></div>
      </div>`;
      })
      .join("")}
  `;

  let user_delete_btns = document.querySelectorAll(".user_delete-btn");
  for (delete_btn of user_delete_btns) {
    delete_btn.addEventListener("click", function () {
      let id = event.target.dataset.id;
      deleteUser(id);
    });
  }
}

async function deleteUser(id) {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
    method: "DELETE"
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res)
    })
    .catch((err) => {
      console.log(err);
    });

  let res2 = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      user = [...res];
      renderUser(user);//  DISPLAY********************************------>
    })
    .catch((err) => {
      console.log(err);
    });
}
// show orders
let showOrdertracking = document.getElementById("showOrdertrackingBtn");

showOrdertracking.addEventListener("click", async () => {
  let res = await fetch("https://fakestoreapi.com/products", {
    headers: { Authorization: localStorage.getItem("token") },
  })
    .then((res) => res.json())
    .then((res) => {
      orders = [...res];
      renderOrder(orders);
    })
    .catch((err) => {
      console.log(err);
    });
});

async function renderOrder(orders) {
  motherDiv.innerHTML = "";
  console.log("order");
  let div1 = document.createElement("div");
  div1.setAttribute("id", "showAll");
  motherDiv.append(div1);

  document.getElementById("showAll").innerHTML = "";
  document.getElementById("showAll").innerHTML = `
    ${orders
      .map((order) => {
        let nameSurname = order.nameSurname;
        let userTel = order.userTel;
        let product = order.product;
        let price = order.price;
        let orderTime = order.orderTime;
        let address = order.address;
        let transportationStatus = order.transportationStatus;
        return renderOrderDetails(nameSurname, userTel, product, price, orderTime, address, transportationStatus);// ORDER DETAILS COMPONENT
      })
      .join("")}
    `;
}

function renderOrderDetails(nameSurname, userTel, product, price, orderTime, address, transportationStatus) {
  return `
    <div>
      <h3>Sipariş Detayları</h3>
      <p>Ad Soyad: ${nameSurname}</p>
      <p>Telefon: ${userTel}</p>
      <p>Ürün: ${product}</p>
      <p>Fiyat: ${price}</p>
      <p>Sipariş Tarihi: ${orderTime}</p>
      <p>Adres: ${address}</p>
      <p>Transport Durumu: ${transportationStatus}</p>
    </div>
  `;
}


