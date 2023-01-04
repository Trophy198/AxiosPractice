import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUsers(null);
        setError(null);
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response);

        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (!users) {
    return <p>로딩중...</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username}---({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;