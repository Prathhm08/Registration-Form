const express = require("express");
const path = require("path");
const app = express();
const LogInCollection = require("./mongo");
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const tempelatePath = path.join(__dirname, "../tempelates");
const publicPath = path.join(__dirname, "../public");
console.log(publicPath);

app.set("view engine", "hbs");
app.set("views", tempelatePath);
app.use(express.static(publicPath));

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/", (req, res) => {
  res.render("login");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  try {
    const checking = await LogInCollection.findOne({ name: req.body.name });

    if (checking) {
      // Sends script to show an alert on the client 
      res.send(`
        <script>
          alert("User Details already exist");
          window.location.href = '/signup';  // Redirect to the signup page
        </script>
      `);
    } else {
      await LogInCollection.insertMany([data]);
      const successMessage = "Your account has been successfully registered!";
      res.status(201).send(`
        <script>
          alert('${successMessage}');
          window.location.href = '/';
        </script>
      `);
    }
  } catch {
    res.send("wrong inputs");
  }
});

app.post("/login", async (req, res) => {
  try {
    const check = await LogInCollection.findOne({ name: req.body.name });

    if (check && check.password === req.body.password) {
      res.status(201).render("home", { naming: `${req.body.name}` });
    } else {
      // Sending script to show an alert on the client side
      res.send(`
        <script>
          alert("Incorrect details");
          window.location.href = '/';  // Redirect to the login page
        </script>
      `);
    }
  } catch (e) {
    // Handle server-side errors
    console.error(e);
    res.send("An error occurred");
  }
});

app.listen(port, () => {
  console.log("port connected");
});
