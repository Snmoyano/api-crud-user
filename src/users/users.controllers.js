const usersDB = [];
let id = 1;

// {
// 	id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

const findAllsUsers = () => {
  return usersDB;
};
const findUserById = (id) => {
  const search = usersDB.find((item) => item.id == id);
  return search;
};
const createUser = (data) => {
  const newUser = {
    id: id++,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: data.password,
    birthday: data.birthday,
  };
  usersDB.push(newUser);
  return newUser;
};
module.exports = {
  findAllsUsers,
  findUserById,
  createUser,
};
