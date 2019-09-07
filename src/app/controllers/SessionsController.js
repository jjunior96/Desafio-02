import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/authConfig';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    // Veficar usuario
    if (!user) {
      return res.status(401).json({ error: 'Usuario nao encontrado' });
    }

    // Verifica a senha
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'A senha esta incorreta' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
