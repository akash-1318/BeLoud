import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
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
    profilePic : "https://png.pngtree.com/png-clipart/20190726/ourmid/pngtree-cute-big-eyes-ball-head-girl-png-image_1531622.jpg",
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
    profilePic : "https://akash-sharma18.netlify.app/images/Akash.png",
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
    profilePic : "https://cutewallpaper.org/21/anime-boy-profile-picture/Wikihow-Drawing-Boy-Instagram-Profile-Picture-Anime-.png",
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
    profilePic : "https://www.kindpng.com/picc/m/294-2948811_dark-grid-animeboy-depressed-cute-boys-anime-hd.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
