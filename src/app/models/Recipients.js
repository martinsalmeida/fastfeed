import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                street: Sequelize.STRING,
                number: Sequelize.STRING,
                complement: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                cep: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Recipients;
