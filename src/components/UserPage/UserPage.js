import React, { useEffect, useState } from "react";

import { apiConfig } from "../../Config/apiConfig";

import UserList from "../UserList/UserList";

function UserPage() {
  const [user, setUser] = useState([]);

  function setSalary(storeInfo) {
    const user = storeInfo.map((obj) => ({
      ...obj,
      income: {
        salary: 100000,
        exp: 0,
      },
    }));
    localStorage.setItem("user", JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem("user")));
  }

  async function fetchUserData() {
    const data = localStorage.getItem("user");
    if (!data) {
      let response = await apiConfig.get("?results=10");
      let storeInfo = response?.data?.results || "[]";
      setSalary(storeInfo);
    } else {
      setUser(JSON.parse(data));
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <section>
        <UserList user={user}></UserList>
      </section>
    </div>
  );
}

export default UserPage;
