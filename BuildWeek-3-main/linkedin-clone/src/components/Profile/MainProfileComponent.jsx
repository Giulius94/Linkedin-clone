import React, { useEffect, useState } from 'react';
import { ProfileInfoComponent } from './ProfileInfoComponent';
import ProfileDescriptionComponent from './ProfileDescriptionComponent';
import ProfileAnalisiComponent from './ProfileAnalisiComponent'
import ProfileRisorseComponent from './ProfileRisorseComponent'
import ProfileAttivitaComponent from './ProfileAttivitaComponent';
import ProfileEsperienzaComponent from './ProfileEsperienzaComponent';
import ProfileFormazioneComponent from './ProfileFormazioneComponent';
import ProfileCompetenzeComponent from './ProfileCompetenzeComponent';
import ProfileCorsiComponent from './ProfileCorsiComponent';
import ProfileLingueComponent from './ProfileLingueComponent';
import ProfileInteressiComponent from './ProfileInteressiComponent';
import { useParams } from 'react-router-dom';
import { apiKey } from '../../api';

//IMPORTANTE
//PER LA SIDEBAR

// Collegare questa pagina con una cosa simile a questo:
// {profiles.map((profile) => (
//     <li key={profile.id}>
//       {/* Link to MainProfileComponent dopo il controlo di profileId in ProfilePage */}
//       <Link to={`/profilepage/${profile.id}`}>{profile.name}</Link>
//     </li>
//   ))}


export const MainProfileComponent = () => {

  const[profile, setProfile] = useState([]);
  const[experience, setExperience] = useState([]);


  const { profileId } = useParams();  //USARE QUANDO SARÀ COLEGATO ALLA SIDEBAR

  // const profileId2 = "6551e7bbc55e7e0018f83bfb"  ;

  const urlProfile = "https://striveschool-api.herokuapp.com/api/profile/";
  

  useEffect(()=>{
    profileExperienceFetch(profileId); //cambiare a profileId quando sia colegato a useParams!
    profileListTest() //solo per vedere la lista

  },[profileId])

  function profileListTest(){
    fetch(urlProfile,{
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);

    
    })
    .catch(error=>{
      console.error(error)
    })

  }

  

  function profileExperienceFetch(profileId){

    fetch(urlProfile + profileId,{
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("This is profile data", data);
      setProfile(data);
      
    

      return fetch(`https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences`,{
         method: 'GET',
         headers:{
           'Authorization': `${apiKey}`,
          'Content-Type': 'application/json',
         }
       })
       .then(response => response.json())
       .then(exp => {
         console.log("this is experience fetch:", exp);
         setExperience(exp);
         
      })
    })
    .catch(error=>{
      console.error(error)
    })

  }



  return (
    <>
      <ProfileInfoComponent profile={profile} />
      <ProfileDescriptionComponent bio={profile.bio} />
      <ProfileAnalisiComponent />
      <ProfileRisorseComponent />
      <ProfileAttivitaComponent />
      <ProfileEsperienzaComponent experience={experience} />
      <ProfileFormazioneComponent />
      <ProfileCompetenzeComponent />
      <ProfileCorsiComponent />
      <ProfileLingueComponent />
      <ProfileInteressiComponent />
    </>
  );
}