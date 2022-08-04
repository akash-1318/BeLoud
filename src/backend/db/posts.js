import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Hard work beats talent when talent doesn't work hard.",
    pic : '',
    likes: {
      likeCount: 1,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "adarshbalika",
    bookmark : [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments : [
      {
        _id: uuid(),
        username : "akash1307",
        text : "🙌🏻❤",
        votes : {
          upvotedBy : [],
          downvotedBy : [],
        }
      },
      {
        _id: uuid(),
        username : "rajB",
        text : "nice pic dear",
        votes : {
          upvotedBy : [],
          downvotedBy : [],
        }
      }
    ]
  },

  {
    _id: uuid(),
    content:
    "Life me career stress nhi, career stress me thodi bohot life chal rhi hai 😭😭😭",    
    pic : '',
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "akash1307",
    bookmark : [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments : [
      {
        _id: uuid(),
        username : "adarshbalika",
        text : "🥺🥺🥺",
        votes : {
          upvotedBy : [],
          downvotedBy : [],
        }
      },
      {
        _id: uuid(),
        username : "rajB",
        text : "Itna bhi sach nhi bolna tha 😭",
        votes : {
          upvotedBy : [],
          downvotedBy : [],
        }
      }
    ]
  },

  {
    _id: uuid(),
    content:
      "I'm tired of chasing money when will money start chasing me. 🥺👉👈",
    pic : '',
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Ohm",
          lastName: "Sharma",
          username: "Ohmi",
          password: "ohmi123",
          bio : "Investing",
          link : "",
          profilePic : "https://cutewallpaper.org/21/anime-profile-pictures-boy/Original-Forum-Avatar-Profile-Photo-ID-89615-Avatar-Abyss.png",
        }
      ],
      dislikedBy: [],
    },
    username: "rajB",
    bookmark : [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments : [
      {
        _id: uuid(),
        username : "adarshbalika",
        text : "damn buddy 😂",
        votes : {
          upvotedBy : [],
          downvotedBy : [],
        }
      },
      {
        _id: uuid(),
        username : "akash1307",
        text : "dil pe lagi yeh baat 😫",
        votes : {
          upvotedBy : [],
          downvotedBy : [],
        }
      }
    ]
  },

  {
    _id: uuid(),
    content:
      "That awkward moment between birth and death. 🤌🏻",
    pic : '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ayush12",
    bookmark : [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments : [
      {
        _id: uuid(),
        username : "adarshbalika",
        text : "😂😂😂",
        votes : {
          upvotedBy : [],
          downvotedBy : [],
        }
      },
      {
        _id: uuid(),
        username : "akash1307",
        text : "",
        votes : {
          upvotedBy : [],
          downvotedBy : [],
        }
      }
    ]
  },

  {
    _id: uuid(),
    content:
      "Money has lot to do with how you behave and little to do with how smart you are.",
    pic : '',
    likes: {
      likeCount: 1,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "akash1307",
    bookmark : [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments : []
  },
];
