import React from "react";
import BasicDetails from "../BasicDetails/BasicDetails";
import { Link } from "react-router-dom";

import './UserList.css';

function UserList({ user }) {
  return (
      <div className="user-container">
        <ul>
          {user?.length > 0 &&
            user.map((item, index) => (
                <Link key={index} to={`/user/${item.login.username}`} state={item}>
                    <li>
                        <img src={item?.picture?.large} />
                        <BasicDetails item={item}></BasicDetails>
                    </li>
                </Link>
            ))}
          {user?.length === 0 && <li className="fetch-container">Fetching...</li>}
        </ul>
      </div>
  );
}

export default UserList;
