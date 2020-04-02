// import bcrypt from 'bcryptjs';
import User from '../models/User';

class UserController {
    async index(req, res) {
        const user = await User.findAll();

        // if (!user) {
        //     return res.status(401).json({ error: 'User not found' });
        // }
        return res.json(user);
    }
}

export default new UserController();
