const log = document.getElementById("log");
const createAcc = document.getElementById("create");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");

createAcc.addEventListener("click", function () {
  console.log(usernameField.value);
  console.log(passwordField.value);
  fetch("/createAcc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: usernameField.value, password: passwordField.value }),
  })
    .then((res) => res.json())
    .then((res) => {
      let valid = res.valid
      console.log(valid)
      if (valid) {
        username = usernameField.value
        password = passwordField.value
      }else{
        let newP = document.createElement("p");
        document.getElementById('main').appendChild(newP)
        newP.innerHTML = "account with this username already exists"
      }
    });
});

log.addEventListener("click", function () {
    console.log(usernameField.value);
    console.log(passwordField.value);
    fetch("/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: usernameField.value, password: passwordField.value }),
    })
      .then((res) => res.json())
      .then((res) => {
        let valid = res.valid
        console.log(valid)
        if (valid) {
          let tempTopScore = res.topScore
          username = usernameField.value
          password = passwordField.value
          topScore = tempTopScore
        }else{
            let newP = document.createElement("p");
            document.getElementById('main').appendChild(newP)
            newP.innerHTML = "incorrect name or password "
          }
      });
  });
