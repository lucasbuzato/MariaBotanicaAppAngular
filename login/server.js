const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conecte-se ao MongoDB
mongoose.connect('mongodb://localhost:27017/userAuthApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conectado ao MongoDB");
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB', err);
});

// Defina o modelo do usuário
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Rotas de Registro
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Criptografa a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send('Usuário registrado com sucesso');
  } catch (error) {
    res.status(400).send('Erro ao registrar usuário: ' + error.message);
  }
});

// Rotas de Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send('Senha inválida');
    }

    // Gera token JWT
    const token = jwt.sign({ userId: user._id }, 'mysecretkey', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(400).send('Erro ao fazer login: ' + error.message);
  } 
});

// Servidor ouvindo na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});