import React from "react";

function ListPhoto({farm,server,secret,id}) {
  return (
    <li className="main-nav-list">
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
        alt=""
      />
    </li>
  );
}

export default ListPhoto;
