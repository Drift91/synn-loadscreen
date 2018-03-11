var config =
{    
    /*
        Do we want to show the image?
        Note that imageSize still affects the size of the image and where the progressbars are located.
    */
    enableImage: true,
 
    /*
        Relative path the the logo we want to display.
    */
    image: "img/logo.png",
 
    /*
        How big should the logo be?
        The values are: [width, height].
        Recommended to use square images less than 1024px.
    */
    imageSize: [512, 512],
 
    /*
        Define the progressbar type
            0 = Single progressbar
            1 = Multiple progressbars
            2 = Collapsed progressbars
     */
    progressBarType: 2,
 
    /*
        Here you can disable some of progressbars.
        Only applys if `singleProgressbar` is false.
    */
    progressBars:
    {
        "INIT_CORE": {
            enabled: false, //NOTE: Disabled because INIT_CORE seems to not get called properly. (race condition).
        },
 
        "INIT_BEFORE_MAP_LOADED": {
            enabled: true,
        },
 
        "MAP": {
            enabled: true,
        },
 
        "INIT_AFTER_MAP_LOADED": {
            enabled: true,
        },
 
        "INIT_SESSION": {
            enabled: true,
        }
    },
 
    /*
        Loading messages will be randomly picked from the array.
        The message is located on the left side above the progressbar.
        The text will slowly fade in and out, each time with another message.
        You can use UTF-8 emoticons inside loading messages!
    */
    loadingMessages:
    [
        "Rart at møde dig",
        "Bunden i vejret eller resten i håret!",
        "Vær så god!",
        "Glædelig jul og godt nytår",
        "おはようございます",
        "わたしは元気です。ありがとう",
        "変わりないです",
        "歡迎光臨",
        "我很高興跟你見面",
        "환영합니다",
        "이름은 무엇입니까?",
        "... 를 한국말로 어떻게 말해요?"
    ],
 
    /*
        Rotate the loading message every 5000 milliseconds (default value).
    */
    loadingMessageSpeed: 5 * 1000,
 
    /*
        Array of music id's to play in the loadscreen.
        Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link.
        https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
       
        Do not use videos that:
            - Do not allow embedding.
            - Copyrighted music (youtube actively blocks this).
    */
    music:
    [
        "4GFAZBKZVJY", "fKopy74weus", "7wtfhZwyrcc", "vWdjWYhEONA",
        "JGwWNGJdvx8", "SlmOBsUurUo", "IPfJnp1guPc", "UceaB4D0jpo",
        "K_9tX4eHztY", "a01QQZyl-_I", "lw3Or6eqIpI", "3H6amDbAwlY",
        "swYdKF1MpWg", "hLQl3WQQoQ0", "otCpCn0l4Wo", "QAo_Ycocl1E",
        "NxxjLD2pmlk", "p6Io6XBRRUs", "FM7MFYoylVs", "5Wiio4KoGe8",
        "nUTF237wZ74", "AMCwYdTJ_PE", "SoMeB4QBVug", "8sV6AT6jVuI"
    ],
 
 
    /*
        Set to false if you do not want any music.
    */
    enableMusic: true,
 
    /*
        Default volume for the player. Please keep this under 50%, to not blowout someones eardrums x)
     */
    musicVolume: 20,
 
    /*
        Should the background change images?
        True: it will not change backgrounds.
        False: it will change backgrounds.
    */
    staticBackground: false,
   
    /*
        Array of images you'd like to display as the background.
        Provide a path to a local image, using images via url is not recommended.
    */
    background:
    [
        "img/bg1.jpg",
        "img/bg2.jpg",
        "img/bg3.jpg",
    ],
 
    /*
        Time in milliseconds on how fast the background
        should swap images.
     */
    backgroundSpeed: 10 * 1000,
    backgroundStyle: "zoom",
}
