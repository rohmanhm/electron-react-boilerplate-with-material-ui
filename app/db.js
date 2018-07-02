/* eslint global-require: 0, flowtype-errors/show-errors: 0 */
import { createConnection } from 'typeorm';
import ormconfig from './ormconfig';
import User from './entity/users';

// const connectionOptions = getConnectionOptions(ormconfig);

const db = {};

console.log('db.js __dirname', __dirname);

createConnection(ormconfig)
  .then(async connection => {
    // const userRepository = await connection.getRepository(User);
    db.userFindAll = async options => {
      console.log('connection userFindAll');
      const userRepository = await connection.getRepository(User);
      const result = await userRepository.find(options);
      return result;
    };

    db.userCreate = async user => {
      console.log('connection userCreate', user);
      const userRepository = await connection.getRepository(User);
      await userRepository.save(user);
      return [user];
    };

    db.userUpdate = async user => {
      console.log('connection userUpdate', user);
      if (!user && !user.id) {
        console.error('connection userUpdate Error', user);
        return null;
      }
      const userRepository = await connection.getRepository(User);
      const userToUpdate = await userRepository.findOne(user.id);
      const updated = { ...userToUpdate, ...user };
      await userRepository.save(updated);
      return [updated];
    };
    console.log('db ready');
    return null;
  })
  .catch(error => {
    console.log('TypeORM connection error: ', error);
    return null;
  });

db.userFindById = async userId => {
  let result;
  await createConnection()
    .then(async connection => {
      const userRepository = await connection.getRepository(User);
      result = await userRepository.find({ id: userId });
      return null;
    })
    .catch(error => console.log(error));
  return result;
};

db.userFindByIdAndUpdateold = async user => {
  let result;
  await createConnection()
    .then(async connection => {
      const userRepository = await connection.getRepository(User);
      const userToUpdate = await userRepository.findOne(user.id);
      const updated = { ...userToUpdate, ...user };
      result = await userRepository.save(updated);
      return null;
    })
    .catch(error => console.log(error));
  return result;
};

export default db;
