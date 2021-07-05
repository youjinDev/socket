const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  const existingUser = users.find(
    (user) => user.name === name && user.room === room
  );
  if (existingUser) {
    return { error: "이미 존재하는 유저명입니다" };
  } else {
    const user = { id, name, room };
    users.push(user);
    return { user };
  }
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0]; //제거된 유저 반환
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = () => users.length;

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
