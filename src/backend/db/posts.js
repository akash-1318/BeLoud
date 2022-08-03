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
      likeCount: 2,
      likedBy: [],
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
      likeCount: 3,
      likedBy: [],
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
      likedBy: [],
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
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akash1307",
    bookmark : [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments : []
  },
];
