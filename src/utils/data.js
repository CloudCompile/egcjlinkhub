// src/utils/data.js
import { 
  FaTwitter, 
  FaGithub, 
  FaYoutube, 
  FaTwitch,
  FaGamepad,
  FaGlobe 
} from 'react-icons/fa';

// User data and links
export const userData = {
  name: "EliteGamerCJ",
  bio: "Digital creator & web developer sharing insights, tutorials, and lifestyle content.",
  avatar: "/images/elitegamer-avatar.jpg",
  socialLinks: [
    {
      platform: "Kick",
      url: "https://kick.com/elitegamercj",
      icon: FaGamepad
    },
    {
      platform: "Twitch",
      url: "https://twitch.tv/elitegamercj",
      icon: FaTwitch
    },
    {
      platform: "YouTube",
      url: "https://YouTube.com/@elitegamercj",
      icon: FaYoutube
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/@elitegamercj",
      icon: FaTwitter
    },
    {
      platform: "GitHub",
      url: "https://GitHub.com/CloudCompile",
      icon: FaGithub
    }
  ]
};

export const links = [
  {
    title: "Watch me on Kick",
    url: "https://kick.com/elitegamercj",
    icon: FaGamepad
  },
  {
    title: "Follow on Twitch",
    url: "https://twitch.tv/elitegamercj",
    icon: FaTwitch
  },
  {
    title: "Subscribe on YouTube",
    url: "https://YouTube.com/@elitegamercj",
    icon: FaYoutube
  },
  {
    title: "Follow on X (Twitter)",
    url: "https://x.com/@elitegamercj",
    icon: FaTwitter
  },
  {
    title: "Check my GitHub",
    url: "https://GitHub.com/CloudCompile",
    icon: FaGithub
  },
  {
    title: "Follow on Bluesky",
    url: "https://bsky.app/@egcj.bsky.social",
    icon: FaGlobe
  },
  {
    title: "Follow on Truth Social",
    url: "https://truthsocial.com/@EliteGamerCJ",
    icon: FaGlobe
  }
];