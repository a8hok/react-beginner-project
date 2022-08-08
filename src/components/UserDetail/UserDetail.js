import React from 'react'

import { useLocation } from 'react-router-dom';

import './UserDetail.css'

function UserDetail() {
    const user = useLocation().state;
  return (
    <>
        <div className="details-container">
            <img src={user.picture.large} />
            <div className="details-info-container">
                <span>
                {user?.name?.title}.{user?.name?.first}
                </span>
                <span>
                    {user?.email}
                </span>
                <span>
                    {user?.location?.country}
                </span>
                <span>
                    ${user?.income?.salary}
                </span>
            </div>
        </div>
        <div className="expense-container">
            <form>
                <input type="text" placeholder="expense" /> 
                <input type="number" placeholder="amount" />
                <button>add</button>
            </form>
        </div>
    </>
  )
}

export default UserDetail
