var Scripts = {

  Init: () => {
    Scripts.Events.Init();
  },

  Events: {
    Init: () => {
      $('body').on("click", "#loginBtn", Scripts.Events.onClickLoginBtn);
      $('body').on("click", "#registerBtn", Scripts.Events.onClickRegisterBtn);
      $('body').on("click", "#logoutBtn", Scripts.Events.onClickLogoutBtn)
    },

    onClickLoginBtn: async () => {
      const base_url = window.location.origin;
      // $.post(base_url + "/login", $('#loginForm').serializeArray(), function(json) {
      //     console.log(json);
      // });
      const formData = $('#loginForm').serializeArray()
      const userData = {
        "email": formData[0].value,
        "password": formData[1].value
      }

      console.log(userData);
      console.log(JSON.stringify(userData));

      await fetch(`${base_url}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      }).then(response => response.json())
        .then(data => {
          if (data.code === 401) {
            document.getElementById('loginModalErrorMessage').innerHTML = `<p style="color: red;">${data.message}</p>`
            return console.log(data.message);
            location.reload()
          }
          localStorage.setItem('user', JSON.stringify(data)),
            console.log(data)

        })
        .catch(error => console.log(error))


      if (localStorage.getItem("user") != null) {
        var accountArea = document.getElementById("account-area");
        const htmlContent = '<a href="/views/html/wishlist.html"><button type="button" class="btn btn-success">FAVORİLERİM</button></a>' + '&nbsp' + '<a href="/views/html/cart.html"><button type="button" class="btn btn-success">SEPETİM</button></a>' + '&nbsp' +
          '<button type="button" id="logoutBtn" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">ÇIKIŞ YAP</button>'
        accountArea.innerHTML = htmlContent;

      } else {
        console.log("hata")
      }


    },


    onClickRegisterBtn: () => {
      const base_url = window.location.origin;
      $.post("/user/register", $('#registerForm').serializeArray(), function (json) {
        console.log(json);
      });

    },

    onClickLogoutBtn: () => {
      localStorage.clear();
      location.reload()
    }

  }

}






