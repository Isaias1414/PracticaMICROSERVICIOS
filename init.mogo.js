// init-mongo.js
db.createUser({
    user: "admin",
    pwd: "password",
    roles: [{ role: "readWrite", db: "mydatabase" }],
  });
  
  db.createCollection('users');
  db.users.insertMany([
    { name: "Juan Pérez", email: "juan@example.com", password: "123456" },
    { name: "Ana Gómez", email: "ana@example.com", password: "654321" },
  ]);
  