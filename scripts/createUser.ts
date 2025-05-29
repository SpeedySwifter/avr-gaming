import { MongoClient } from "mongodb";
import { hash } from "bcryptjs";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); // 👈 explizit setzen

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

async function createUser() {
  try {
    await client.connect();
    const db = client.db();
    const users = db.collection("users");

    const username = "admin";
    const password = "admin123";

    const existing = await users.findOne({ username });
    if (existing) {
      console.log("❌ Benutzer existiert bereits:", username);
      return;
    }

    const hashedPassword = await hash(password, 10);

    await users.insertOne({ username, password: hashedPassword });
    console.log("✅ Benutzer erfolgreich erstellt:", username);
  } catch (err) {
    console.error("❌ Fehler beim Benutzer-Erstellen:", err);
  } finally {
    await client.close();
  }
}

createUser();
