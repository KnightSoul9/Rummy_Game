const userReviews = [
  {
    userId: "USR001",
    userName: "Rajesh Kumar", 
    userIcon: "/users/user1.png",
    feedback: "Amazing game, won big amount on first try. Graphics and gameplay are super smooth.",
    rating: 4.8,
    winAmount: "₹1.2 Crore",
    date: "2024-01-15"
  },
  {
    userId: "USR002",
    userName: "Priya Sharma",
    userIcon: "/users/user2.png", 
    feedback: "Best rummy game I've played so far. Quick withdrawals and excellent customer support.",
    rating: 4.9,
    winAmount: "₹85 Lac",
    date: "2024-01-14"
  },
  {
    userId: "USR003", 
    userName: "Amit Patel",
    userIcon: "/users/user3.png",
    feedback: "Very addictive game with fair gameplay. Won multiple times, instant withdrawal process.",
    rating: 4.7, 
    winAmount: "₹1.8 Crore",
    date: "2024-01-13"
  },
  {
    userId: "USR004",
    userName: "Neha Verma",
    userIcon: "/users/user4.png",
    feedback: "Fantastic gaming experience with real players. Interface is user friendly and secure.",
    rating: 4.9,
    winAmount: "₹95 Lac",
    date: "2024-01-12"
  },
  {
    userId: "USR005",
    userName: "Arjun Singh", 
    userIcon: "/users/user5.png",
    feedback: "Great platform for rummy lovers. Regular bonuses and exciting tournaments available.",
    rating: 4.8,
    winAmount: "₹1.5 Crore",
    date: "2024-01-11"
  }
];

const featuredGames = [
  { 
    id: 1,
    name: "Rummy Sultan",
    image: "/banner.png",
    featured: true,
    minDeposit: "₹100",
    maxBonus: "₹10,000",
    rating: 4.9,
    downloads: "1M+"
  },
  {
    id: 2, 
    name: "Teen Patti Master",
    image: "/banner.png", 
    featured: true,
    minDeposit: "₹200",
    maxBonus: "₹15,000",
    rating: 4.8,
    downloads: "5M+"
  },
  {
    id: 3,
    name: "Rummy Perfect",
    image: "/banner.png",
    featured: true,
    minDeposit: "₹150",
    maxBonus: "₹12,000",
    rating: 4.7,
    downloads: "2M+"
  }
];

const all = {
  "Recently Launched": [
    { id: 4, name: "Rummy Bash", image: "/Games/Rummy_Bash.png", rating: 4.5, downloads: "100K+" },
    { id: 5, name: "Rummy Bo", image: "/Games/Rummy_Bo.jpg", rating: 4.6, downloads: "50K+" },
    { id: 6, name: "Rummy East", image: "/Games/Rummy_East.webp", rating: 4.4, downloads: "200K+" },
    { id: 7, name: "Rummy Gems", image: "/Games/Rummy_Gems.jpg", rating: 4.9, downloads: "10M+" },
    { id: 8, name: "Rummy Glee", image: "/Games/Rummy_Glee.jpg", rating: 4.8, downloads: "8M+" },
    { id: 9, name: "Rummy Meet", image: "/Games/Rummy_Meet.jpg", rating: 4.7, downloads: "5M+" },
    { id: 10, name: "Rummy Modern", image: "/Games/Rummy_Modern.jpg", rating: 4.6, downloads: "3M+" },
    { id: 11, name: "Rummy Only", image: "/Games/Rummy_Only.jpg", rating: 4.7, downloads: "2M+" },
    { id: 12, name: "Rummy Ox", image: "/Games/Rummy_Ox.jpg", rating: 4.5, downloads: "1M+" }
  ],
  "Most Popular": [
    { id: 13, name: "Rummy Palms", image: "/Games/Rummy_Palms.jpg", rating: 4.8, downloads: "4M+" },
    { id: 14, name: "Rummy Sultan", image: "/Games/Rummy_Sultan.webp", rating: 4.6, downloads: "2.5M+" },
    { id: 15, name: "Rummy Up", image: "/Games/Rummy_Up.jpg", rating: 4.9, downloads: "15M+" },
    { id: 16, name: "Teen Patti Master", image: "/Games/Teen_Patti_Master.jpg", rating: 4.8, downloads: "12M+" },
    { id: 17, name: "Teen Patti Gold", image: "/Games/Teen_Patti.png", rating: 4.9, downloads: "20M+" },
    { id: 18, name: "Teen Patti Pro", image: "/Games/Teen_Patti.webp", rating: 4.7, downloads: "18M+" },
    { id: 19, name: "Teen Patti Star", image: "/Games/Teen_Patti_Master.jpg", rating: 4.8, downloads: "16M+" },
    { id: 20, name: "Teen Patti Live", image: "/Games/Teen_Patti.png", rating: 4.6, downloads: "3M+" },
    { id: 21, name: "Teen Patti Plus", image: "/Games/Teen_Patti.webp", rating: 4.7, downloads: "2M+" }
  ],
  "Recommend": [
    { id: 22, name: "Teen Patti Royal", image: "/Games/Teen_Patti_Master.jpg", rating: 4.5, downloads: "1M+" },
    { id: 23, name: "Teen Patti King", image: "/Games/Teen_Patti.png", rating: 4.8, downloads: "4M+" },
    { id: 24, name: "Teen Patti Club", image: "/Games/Teen_Patti.webp", rating: 4.6, downloads: "2.5M+" },
    { id: 25, name: "Teen Patti VIP", image: "/Games/Teen_Patti_Master.jpg", rating: 4.9, downloads: "15M+" },
    { id: 26, name: "Teen Patti Elite", image: "/Games/Teen_Patti.png", rating: 4.8, downloads: "12M+" },
    { id: 27, name: "Teen Patti Premium", image: "/Games/Teen_Patti.webp", rating: 4.9, downloads: "20M+" },
    { id: 28, name: "Circle Rush", image: "/Games/Bet54.png", rating: 4.5, downloads: "100K+" },
    { id: 29, name: "Circle Spin", image: "/Games/Dior123.png", rating: 4.6, downloads: "50K+" },
    { id: 30, name: "Circle Win", image: "/Games/Golds_Bet.png", rating: 4.4, downloads: "200K+" }
  ],
  "Live Casino": [
    { id: 31, name: "Circle Master", image: "/Games/Bet54.png", rating: 4.9, downloads: "10M+" },
    { id: 32, name: "Circle King", image: "/Games/Dior123.png", rating: 4.8, downloads: "8M+" },
    { id: 33, name: "Circle Pro", image: "/Games/Golds_Bet.png", rating: 4.7, downloads: "5M+" },
    { id: 34, name: "Circle Elite", image: "/Games/Bet54.png", rating: 4.6, downloads: "3M+" },
    { id: 35, name: "Circle Plus", image: "/Games/Dior123.png", rating: 4.7, downloads: "2M+" },
    { id: 36, name: "Circle Star", image: "/Games/Golds_Bet.png", rating: 4.5, downloads: "1M+" },
    { id: 37, name: "Circle Live", image: "/Games/Bet54.png", rating: 4.8, downloads: "4M+" },
    { id: 38, name: "Circle VIP", image: "/Games/Dior123.png", rating: 4.6, downloads: "2.5M+" },
    { id: 39, name: "Circle Royal", image: "/Games/Golds_Bet.png", rating: 4.9, downloads: "15M+" }

  ]
};

const rummy = {
  "Recently Launched": [
    { id: 16, name: "Teen Patti Master", image: "/Games/Teen_Patti_Master.jpg", rating: 4.8, downloads: "12M+" },
    { id: 17, name: "Teen Patti Gold", image: "/Games/Teen_Patti.png", rating: 4.9, downloads: "20M+" },
    { id: 18, name: "Teen Patti Pro", image: "/Games/Teen_Patti.webp", rating: 4.7, downloads: "18M+" },
    { id: 19, name: "Teen Patti Star", image: "/Games/Teen_Patti_Master.jpg", rating: 4.8, downloads: "16M+" },
    { id: 20, name: "Teen Patti Live", image: "/Games/Teen_Patti.png", rating: 4.6, downloads: "3M+" },
    { id: 21, name: "Teen Patti Plus", image: "/Games/Teen_Patti.webp", rating: 4.7, downloads: "2M+" }
  ],
  "Most Popular": [
    { id: 22, name: "Teen Patti Royal", image: "/Games/Teen_Patti_Master.jpg", rating: 4.5, downloads: "1M+" },
    { id: 23, name: "Teen Patti King", image: "/Games/Teen_Patti.png", rating: 4.8, downloads: "4M+" },
    { id: 24, name: "Teen Patti Club", image: "/Games/Teen_Patti.webp", rating: 4.6, downloads: "2.5M+" },
    { id: 25, name: "Teen Patti VIP", image: "/Games/Teen_Patti_Master.jpg", rating: 4.9, downloads: "15M+" },
    { id: 26, name: "Teen Patti Elite", image: "/Games/Teen_Patti.png", rating: 4.8, downloads: "12M+" },
    { id: 27, name: "Teen Patti Premium", image: "/Games/Teen_Patti.webp", rating: 4.9, downloads: "20M+" }
  ],
};

const teenpatti = {
  "Recently Launched": [
    { id: 28, name: "Circle Rush", image: "/Games/Bet54.png", rating: 4.5, downloads: "100K+" },
    { id: 29, name: "Circle Spin", image: "/Games/Dior123.png", rating: 4.6, downloads: "50K+" },
    { id: 30, name: "Circle Win", image: "/Games/Golds_Bet.png", rating: 4.4, downloads: "200K+" },
    { id: 31, name: "Circle Master", image: "/Games/Bet54.png", rating: 4.9, downloads: "10M+" },
    { id: 32, name: "Circle King", image: "/Games/Dior123.png", rating: 4.8, downloads: "8M+" },
    { id: 33, name: "Circle Pro", image: "/Games/Golds_Bet.png", rating: 4.7, downloads: "5M+" }
  ],
  "Most Popular": [
    { id: 34, name: "Circle Elite", image: "/Games/Bet54.png", rating: 4.6, downloads: "3M+" },
    { id: 35, name: "Circle Plus", image: "/Games/Dior123.png", rating: 4.7, downloads: "2M+" },
    { id: 36, name: "Circle Star", image: "/Games/Golds_Bet.png", rating: 4.5, downloads: "1M+" },
    { id: 37, name: "Circle Live", image: "/Games/Bet54.png", rating: 4.8, downloads: "4M+" },
    { id: 38, name: "Circle VIP", image: "/Games/Dior123.png", rating: 4.6, downloads: "2.5M+" },
    { id: 39, name: "Circle Royal", image: "/Games/Golds_Bet.png", rating: 4.9, downloads: "15M+" }
  ],
};

export const gamesData = {
  userReviews,
  featuredGames,
  all,
  rummy,
  teenpatti,
};