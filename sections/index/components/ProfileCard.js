const ProfileCard = ( {name, bio, handle, img, url} ) => (
  <div className='profile-card'>
    <div className='profile-card-container'>
      <h3 className='profile-title'>{name}</h3>
      <p className='profile-bio'>{bio}</p>
   <a href={`${url}`} target="_blank">  <div className={`${handle}`}></div>   </a>
     
    </div>
  <style jsx>{`
    .profile-card {
      align-items: space-between;
      background-image: url(${img});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 100%;
      display: flex;
      flex-wrap: wrap;
      height: 250px;
      justify-content: center;
      position: relative;
      width: 250px;
      margin-bottom:30px;
    }
    .profile-card-container {
      display: none;
      ∫
    }
    .ln{
      height:30px;
      width:30px;
      background-image: url("/static/assets/icons/ln.svg");
      margin-top:10px;
    }
    .mail{
      height:30px;
      width:35px;
      background-image: url("/static/assets/icons/mail.svg");
      margin-top:10px;
    }
    .github{
      height:29px;
      width:30px;
      background-image: url("/static/assets/icons/github.svg");
      margin-top:10px;
    }
    .tw{
      height:30px;
      width:35px;
      background-image: url("/static/assets/icons/Twitter.svg");
      margin-top:10px;
    }
    .profile-card:hover .profile-card-container{
      flex-direction:column;
      align-items:center;
    }
    .profile-title {
      font-size: 2.8rem;
      font-weight: 500;
      color: #eaeaea;
    }
    .profile-bio  {
      font-size: 2rem;
      font-weight: 300;
      color: #eaeaea;
      text-align:center;
    }
    
    .profile-card:nth-child(6) .profile-bio,
    .profile-card:nth-child(7) .profile-bio,
    .profile-card:nth-child(8) .profile-bio {
    font-size: 1.6rem;
      
    }
   
    .profile-handle {
      font-size: 21.1px;
      font-weight: 300;
      color: #eaeaea;
    }
    .profile-icon {
      padding-top:10px;
      max-height:10px;
      max-width:10px;
    }
    @-webkit-keyframes fadeInFromNone {
      0% {
        opacity: 0;
      }

      1% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeInFromNone {
      0% {
        opacity: 0;
      }

      1% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeInFromNone {
      0% {
        opacity: 0;
      }

      1% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes fadeInFromNone {
      0% {
        opacity: 0;
      }

      1% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }
    
    @media screen and (min-width: 1440px) {
      .profile-card {
        margin-right: 10px;
      }
    }
    @media screen and (min-width: 1200px) {
      .profile-card:nth-child(13) {
        margin-left: 25%
      }
      .profile-card:nth-child(14) {
        margin-right: 25%
      }
    }
    @media screen and (min-width: 1024px) {
      .profile-card:hover .profile-card-container {
        heigth:260px;
        width:260px;
        overflow:hidden;
        animation: fadeInFromNone 0.5s ease;
        background-color: rgba(0,0,0,0.8); 
        border-radius: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 64px 39px 63px;
      }
      .profile-card:hover overlay {
        z-index: -1;
      }
    }
    @media screen and (max-width: 1024px) {
      .profile-card {
        margin: 0 45px;
      }
      .profile-card:hover .profile-card-container {
        heigth:260px;
        width:260px;
        overflow:hidden;
        animation: fadeInFromNone 0.5s ease;
        background-color: rgba(0,0,0,0.8); 
        border-radius: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 64px 39px 63px;
      }
      .profile-handle {
        pointer-events: none;
      }
      .profile-card-container:hover .profile-handle {
        pointer-events: auto;
      }
    }
    @media screen and (max-width: 910px) and (min-width: 740px) {
      .profile-card {
        margin: 0 220px;
      }
    }
    @media screen and (max-width: 739px) {
      .profile-card {
        margin: 0 45px;
      }
    }
    @media screen and (max-width: 375px) {
      .profile-card {
        height: 230px;
        width: 230px;
      }
      .profile-title {
        font-size: 2.2rem;
      }
      .profile-bio {
        font-size: 1.6rem;
      }
      .profile-handle {
        font-size: 1.6rem;
      }
    }
    @media screen and (max-width: 322px) {
      .profile-card {
        height: 170px;
        width: 170px;
      }
      .profile-card:hover .profile-card-container {
        width: 100%;
        height: 100%;
        padding: 35px;
      }
      .profile-title {
        font-size: 1.6rem;
      }
      .profile-bio {
        font-size: 1.2rem;
      }
      .profile-handle {
        font-size: 1.2rem;
      }
    }
  `}</style>
  </div>
)

export default ProfileCard