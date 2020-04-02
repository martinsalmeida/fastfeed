import * as Yup from 'yup';
import Recipients from '../models/Recipients';

class RecipientsController {
    async index(req, res) {
        const recipients = await Recipients.findAll();

        res.json(recipients);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.string().required(),
            complement: Yup.string(),
            city: Yup.string().required(),
            state: Yup.string().required(),
            cep: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const {
            name,
            street,
            number,
            complement,
            city,
            state,
            cep,
        } = await Recipients.create(req.body);

        return res.json({ name, street, number, complement, city, state, cep });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            street: Yup.string(),
            number: Yup.string(),
            complement: Yup.string(),
            city: Yup.string(),
            state: Yup.string(),
            cep: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { id } = req.params;

        const recipient = await Recipients.findByPk(id);

        if (!recipient) {
            return res.status(400).json({ message: 'Recipient not found' });
        }

        const data = await recipient.update(req.body);
        return res.json(data);
    }
}

export default new RecipientsController();
