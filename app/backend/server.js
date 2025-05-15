const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // adresa unde rulează frontendul Next.js
  credentials: true
}));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth_demo",
});

db.connect((err) => {
  if (err) {
    console.error("Eroare conectare DB:", err);
  } else {
    console.log("Conectat la baza de date MySQL!");
  }
});

app.post("/register", async (req, res) => {
  console.log("📥 Cerere de înregistrare primită:", req.body);
  const { username, email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err)
        return res
          .status(500)
          .json({ error: "Eroare server la verificare email" });

      if (results.length > 0) {
        return res.status(409).json({ error: "Emailul este deja înregistrat" });
      }
      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql =
          "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(sql, [username, email, hashedPassword], (err, result) => {
          if (err)
            return res.status(500).json({ error: "Eroare la înregistrare" });
          res
            .status(201)
            .json({ message: "Utilizator înregistrat cu succes!" });
        });
      } catch (err) {
        res.status(500).json({ error: "Eroare server" });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: "Eroare server" });
    if (results.length === 0)
      return res.status(401).json({ error: "Email invalid" });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Parolă incorectă" });

    res
      .status(200)
      .json({
        message: "Autentificare reușită",
        user: { id: user.id, username: user.username },
      });
  });
});

app.listen(3001, () => {
  console.log("Backend rulează pe http://localhost:3001");
});
