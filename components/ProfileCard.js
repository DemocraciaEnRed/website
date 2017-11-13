const ProfileCard = ( {name, bio, handle, img} ) => (
  <div className='profile-card'>
    <div className='profile-card-container'>
      <h3 className='profile-title'>{name}</h3>
      <p className='profile-bio'>{bio}</p>
      <a href={`http://www.twitter.com/${handle}`}className='profile-handle'>{'@'+handle}</a>
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
      width: 250px;
    }
    .profile-card-container {
      display: none;
    }
    .profile-card:hover .profile-card-container {
      animation: fadeInFromNone 0.5s ease;
      background-color: rgba(0,0,0,0.8); 
      border-radius: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 64px 39px 63px;
    }
    .profile-title {
      font-size: 2.8rem;
      font-weight: 500;
      color: #eaeaea;
    }
    .profile-bio {
      font-size: 2.1rem;
      font-weight: 300;
      color: #eaeaea;
    }
    .profile-handle {
      font-size: 21.1px;
      font-weight: 300;
      color: #eaeaea;
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

  `}</style>
  </div>
)

export default ProfileCard