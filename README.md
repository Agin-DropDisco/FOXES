# FOXES MEDIA 

[![Netlify Status](https://api.netlify.com/api/v1/badges/772e0672-f57b-4940-9f05-e432607e3879/deploy-status)](https://app.netlify.com/sites/festive-hopper-a48689/deploys)



FOXES MEDIA using  (Postgres, Skynet-Js, SkynetLabs). 



### Check out the deployed site


### [Website Live ](https://000eagktcalkfnmdp22i66lcs371mfqfngpmo743liq6jtths2052eg.siasky.net/)


### [Login Video](https://siasky.net/AABQa2Pomn69UE9_h0D1M3UGA6jtDciQIW7NUu8MXUgr4Q)


### [Upload Video](https://siasky.net/_BGWW4sUn2R2Zs3reqyovRwVhX5giICwObPSb7SLYEO0Ig)


### [Upload Video && Thumbnail](https://siasky.net/AAAM7C_qs4ucDSW4SSH1u3mBLNYp2yXTGkj8kvfZVr2Wxw)



### [Edit Cover Profile](https://siasky.net/AABsw-zbVFa2n2Y1sXnKOwEfX0I2cUd9BY-T1PZUPx3vwg)



### [Edit Profile](https://siasky.net/AADyNFyIBe9_wWXy0Zg1euGMZtipLWQtF8K_LfDn-XwX1A)



### [Test Comment | Subscribe | Like and View User Profile](https://siasky.net/AAAcRcLfxaFzA5_hWhkc9NsBHW-nsncu6ryZaLMFC-aJWQ)



#### in the end of Skynet url i use tag "#.mp4" to support media player for Videojs that i use for Player



### [url sample](https://siasky.net/AACCUKcGJmzUk5FdR0yee8ghUO3NLSzfNVVV9voe4zbGyA#.mp4)

>> remove the tag if you use "ReactPlayer", "Plyr" or "video-react".


### [sources](https://github.com/Agin-DropDisco/FOXES/blob/e168b4bf6c3dcfed5d9507530cb5a0a1dfcc0e1f/client/src/components/UploadVideo.js#L51)


### [see how i use Skynet userID in Sequelize Model](https://github.com/Agin-DropDisco/FOXES/blob/4bf0365d87b78c2ae318f6b062e18aaa0a81e58a/backend/src/controllers/auth.js#L26)

<p align="center">
  
### ⏬ ⏬ see sample how i use SkyDB ⏬ ⏬

### [1](https://github.com/Agin-DropDisco/FOXES/blob/3db26815bfd4a129c10373702cac7190c538644d/client/src/components/SkyConnect.js#L211)


### [2](https://github.com/Agin-DropDisco/FOXES/blob/3db26815bfd4a129c10373702cac7190c538644d/client/src/components/SkyReConnect.js#L181)


### [3](https://github.com/Agin-DropDisco/FOXES/blob/3db26815bfd4a129c10373702cac7190c538644d/client/src/components/EditProfileModal.js#L211)

</p>



### Upload Video and Thumbnail and Push to Skynet

<img src="./ss/create-thumbnail.png">



### Modal Popup Will set to true if all the processing file has been done

<img src="./ss/upload-andpush-toskynet.png">

<p align = "center">
<img src="./ss/loader.png">
</p>




### Home View 
<img src="./ss/home.png">




### Profile Channel View
<img src="./ss/profile-channel.png">





### Recomended Video View 

<img src="./ss/video-recomended.png">






### Trending Video View 

<img src="./ss/trending-video.png">





### Edit Profile View 

<img src="./ss/edit-profile.png">





### Mobile UI View
<p align="center">
<img src="./ss/mobile-ui.png">
</p>





### Mobile UI Watch View
<p align="center">
<img src="./ss/mobile-ui-watch.png">
</p>





### Core packages

1. Redux 
2. React Hash Router as * Router  - Routing
3. Skynet-js && SkynetLabs
4. VideoJs


### Features

1. Connect using MySky
2. Upload video
3. Search video by channel name, userID, username
4. Search video by title, description
5. Like/Dislike video
6. Subscribe/Unsubscribe from channels
7. Add comment
8. Edit profile (avatar, cover)
9. Liked videos
10. History


### Running locally

At the root of your project create an .env file with the following contents:

```bash
# BE stands for Backend Endpoint
REACT_APP_FOXES_SKY=<Your Backend Endpoint>
REACT_APP_SKYNET_PORTAL =<Portal>
REACT_APP_SKYNET_SKYKEY=<SkyKey>
REACT_APP_SKYNET_SKYSEED=<SkySeed>
REACT_APP_SKYNET_SKYDATAKEY=<SkyDataKey>
```

Then run <code>npm i</code> and <code>npm start</code> 


