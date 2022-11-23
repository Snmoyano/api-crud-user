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
const deleteUser = (id) => {
  const deleted = usersDB.findIndex((item) => item.id === id);
  const search = usersDB.splice(deleted, 1);
  return search;
};
const updateUser = (data, id) => {
  const put = usersDB.findIndex((item) => item.id === id);
  const newUser = {
    id: id++,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: data.password,
    birthday: data.birthday,
  };
  const search = (usersDB[put] = newUser);
  return search;
};
module.exports = {
  findAllsUsers,
  findUserById,
  createUser,
  deleteUser,
  updateUser,
};
