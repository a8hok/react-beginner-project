import React from 'react'

function BasicDetails({item}) {
  return (
    <div className="info-container">
        <span>
        {item?.name?.title}.{item?.name?.first}
        </span>
        <span>
            {item?.email}
        </span>
        <span>
            {item?.location?.country}
        </span>
        <span>
            ${item?.income?.salary}
        </span>
    </div>
  )
}

export default BasicDetails
