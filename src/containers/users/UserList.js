import React from "react";
import UserCard from '../../components/card/UserCard';
import ListItemText from "@material-ui/core/ListItemText";
import '../../style/scss/users/UserList.scss'

const UserList = () => {
  return (
    <div className='main' >
      <ListItemText primary="USER LIST" />
      <div className='main__card'>
        <UserCard/>
      </div>
      <div className='main__card'>
        <UserCard/>
      </div>
      <div className='main__card'>
        <UserCard/>
      </div>
      <div className='main__card'>
        <UserCard/>
      </div>
    </div>
  )
}

export default UserList;