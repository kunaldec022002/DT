// script.js

const usersData = [
  {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 28
  },
  {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "age": 34
  },
  {
      "id": 3,
      "name": "Michael Johnson",
      "email": "michael@example.com",
      "age": 45
  },
  {
    "id":4,
    "name":"Jack Kalis",
    "email":"jack@gmail.com",
    "age":50
  }
];

// Function to display users
function displayUsers(users) {
  const userListContainer = document.getElementById('user-list');

  users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user';
      userDiv.innerHTML = `<strong>Name:</strong> ${user.name} <br>
                          <strong>Email:</strong> ${user.email} <br>
                          <strong>Age:</strong> ${user.age}`;
      userListContainer.appendChild(userDiv);
  });
}

// Execute the function to display users
displayUsers(usersData);