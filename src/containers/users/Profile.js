import React from "react";
import ProfileCard from '../../components/card/ProfileCard';
import ListItemText from "@material-ui/core/ListItemText";
import '../../style/scss/users/UserList.scss'

const Profile = () => {
  return (
    <div className='main' >
      <ListItemText primary="PROFILE" />
      <div className='main__card'>
        <ProfileCard/>
      </div>
    </div>
  )
}

export default Profile
