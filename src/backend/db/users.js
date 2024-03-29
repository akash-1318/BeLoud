import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import profile from "../../assets/images/Akash.png"
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio : "Web devi",
    link : "https://adarshbalika.netlify.app/",
    profilePic : "https://profilepicture7.com/img/img_dongman/3/-1402673926.jpg",
    followers : [
      {
        _id: uuid(),
        firstName: "Akash",
        lastName: "Sharma",
        username: "akash1307",
        password: "akashsharma123",
        bio : "Aspiring web developer",
        link : "https://akash-sharma18.netlify.app",
        profilePic : profile,
      }
    ],
    following : [
      {
        _id: uuid(),
        firstName: "Ayush",
        lastName: "Sharma",
        username: "ayush12",
        password: "ayushsharma12345",
        bio : "Enjoying childhood",
        link : "",
        profilePic : "https://cutewallpaper.org/21/anime-profile-pictures-boy/Boy-Forum-Avatar-Profile-Photo-ID-193352-Avatar-Abyss.jpg",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Akash",
    lastName: "Sharma",
    username: "akash1307",
    password: "akashsharma123",
    bio : "Aspiring web developer",
    link : "https://akash-sharma18.netlify.app",
    profilePic : profile,
    followers : [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        password: "adarshBalika123",
        bio : "Web devi",
        link : "https://adarshbalika.netlify.app/",
        profilePic : "https://profilepicture7.com/img/img_dongman/3/-1402673926.jpg",
      },
      {
        _id: uuid(),
        firstName: "Raj",
        lastName: "Bhinde",
        username: "rajB",
        password: "rajbhinde123",
        bio : "Learner | Web Development",
        link : "https://rajbhinde-profile.netlify.app/",
        profilePic : "https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg",
      }
    ],
    following : [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        password: "adarshBalika123",
        bio : "Web devi",
        link : "https://adarshbalika.netlify.app/",
        profilePic : "https://profilepicture7.com/img/img_dongman/3/-1402673926.jpg",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ayush",
    lastName: "Sharma",
    username: "ayush12",
    password: "ayushsharma12345",
    bio : "Enjoying childhood",
    link : "",
    profilePic : "https://cutewallpaper.org/21/anime-profile-pictures-boy/Boy-Forum-Avatar-Profile-Photo-ID-193352-Avatar-Abyss.jpg",
    followers : [],
    following : [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Raj",
    lastName: "Bhinde",
    username: "rajB",
    password: "rajbhinde123",
    bio : "Learner | Web Development",
    link : "https://rajbhinde-profile.netlify.app/",
    profilePic : "https://i.pinimg.com/736x/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg",
    followers : [
      {
        _id: uuid(),
        firstName: "Ayush",
        lastName: "Sharma",
        username: "ayush12",
        password: "ayushsharma12345",
        bio : "Enjoying childhood",
        link : "",
        profilePic : "https://cutewallpaper.org/21/anime-profile-pictures-boy/Boy-Forum-Avatar-Profile-Photo-ID-193352-Avatar-Abyss.jpg",
      }
    ],
    following : [
      {
        _id: uuid(),
        firstName: "Akash",
        lastName: "Sharma",
        username: "akash1307",
        password: "akashsharma123",
        bio : "Aspiring web developer",
        link : "https://akash-sharma18.netlify.app",
        profilePic : profile,
      },
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        password: "adarshBalika123",
        bio : "Web devi",
        link : "https://adarshbalika.netlify.app/",
        profilePic : "https://profilepicture7.com/img/img_dongman/3/-1402673926.jpg",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ohm",
    lastName: "Sharma",
    username: "Ohmi",
    password: "ohmi123",
    bio : "Investing",
    link : "",
    profilePic : "https://cutewallpaper.org/21/anime-profile-pictures-boy/Original-Forum-Avatar-Profile-Photo-ID-89615-Avatar-Abyss.png",
    followers : [],
    following : [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
