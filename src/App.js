import React from "react";
import './App.css';
import ProfileComponents from "./Profile/ProfileComponents"
import PropTypes from 'prop-types';

function App(props) {
  const { fullName } = props
  const handleName = e => {
    e.preventDefault();
    alert('Profile User Name is : Abdelkarim Aridj');
};
  ProfileComponents.defaultProps = {
    fullName: "FirstName FamilyName",
    bio: "Your bio",
    profession: "Your profession"
};
  ProfileComponents.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
};
  return (
    <div className="App" style={{display:"grid", placeItems: "center", alignItems:'center', justifySelf:'center',width:"100%", height:"100vh", backgroundColor:"#fff"}}>
      <ProfileComponents  fullName={'Abdelkarim Aridj'} bio={"I am on a road to become web developer, despite difficulties am loving it, I enjoy learning about new technologies and have passion for web developement, if I am not on my computer, I am swiming, watching anime or spending time with familly"} profession={'Full-Stack Developer'} handleName={handleName}>
      <img src={'./Assets/ProfilPhoto.jpg'} style={{position:"relative", top:'-5em' ,width:"10em", height:"auto", borderRadius:"50%", border:"solid 5px #651FFF"}} alt="Profile" /> 
      </ProfileComponents>
    </div>
  );
}
export default App;
