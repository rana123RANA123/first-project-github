function login() {


    let value = document.getElementById("userName").value
    let lock = document.getElementById("password").value

    document.getElementById("oneHeading").innerHTML = value

    let user = "admin@user.com"
    let security = "123456"
    
    if(!value){
        Toastify({
            text: "Enter your Username & Password",
            duration: 1000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, black, black)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }
    if(!lock){
        Toastify({
            text: "Enter your Password",
            duration: 1000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, black, black)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }
    
    


    if (value === user && lock === security) {

      // use for navigat next page if username and password is correct 
      window.location.href = './home.html';

        Toastify({
            text: "Your id is Login",
            duration: 1000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, black, black)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

          
        
    }
    else{
        Toastify({
  text: "Your id is Incorrect",
  duration: 1000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, black, black)",
  },
  onClick: function(){} // Callback after click
}).showToast();



    }
}


// lost password
function lost(){
    Toastify({
        text: "Your lost password is 123456",
        duration: 1000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, black, black)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    document.getElementById("password").value = "123456"
}

