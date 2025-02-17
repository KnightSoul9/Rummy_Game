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

const rummy = {
  "Recently Launched": [
    { id: 4, name: "Rummy Bash", image: "/Games/Rummy_Bash.png", rating: 4.5, downloads: "100K+" },
    { id: 5, name: "Rummy Bo", image: "/Games/Rummy_Bo.jpg", rating: 4.6, downloads: "50K+" },
    { id: 6, name: "Rummy East", image: "/Games/Rummy_East.webp", rating: 4.4, downloads: "200K+" },
    { id: 7, name: "Rummy Gems", image: "/Games/Rummy_Gems.jpg", rating: 4.9, downloads: "10M+" },
    { id: 8, name: "Rummy Glee", image: "/Games/Rummy_Glee.jpg", rating: 4.8, downloads: "8M+" },
    { id: 9, name: "Rummy Meet", image: "/Games/Rummy_Meet.jpg", rating: 4.7, downloads: "5M+" }
  ],
  "Most Popular": [
    { id: 10, name: "Rummy Modern", image: "/Games/Rummy_Modern.jpg", rating: 4.6, downloads: "3M+" },
    { id: 11, name: "Rummy Only", image: "/Games/Rummy_Only.jpg", rating: 4.7, downloads: "2M+" },
    { id: 12, name: "Rummy Ox", image: "/Games/Rummy_Ox.jpg", rating: 4.5, downloads: "1M+" },
    { id: 13, name: "Rummy Palms", image: "/Games/Rummy_Palms.jpg", rating: 4.8, downloads: "4M+" },
    { id: 14, name: "Rummy Sultan", image: "/Games/Rummy_Sultan.webp", rating: 4.6, downloads: "2.5M+" },
    { id: 15, name: "Rummy Up", image: "/Games/Rummy_Up.jpg", rating: 4.9, downloads: "15M+" }
  ]
};

const patti = {
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

const circle = {
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
  ]
};

export const gamesData = {
  userReviews,
  featuredGames,
  rummy,
  patti,
  circle
};

// const userReviews = [
//   {
//     userId: "USR001",
//     userName: "Rajesh Kumar", 
//     userIcon: "/users/user1.png",
//     feedback: "Amazing game, won big amount on first try. Graphics and gameplay are super smooth.",
//     rating: 4.8,
//     winAmount: "₹1.2 Crore",
//     date: "2024-01-15"
//   },
//   {
//     userId: "USR002",
//     userName: "Priya Sharma",
//     userIcon: "/users/user2.png", 
//     feedback: "Best rummy game I've played so far. Quick withdrawals and excellent customer support.",
//     rating: 4.9,
//     winAmount: "₹85 Lac",
//     date: "2024-01-14"
//   },
//   {
//     userId: "USR003", 
//     userName: "Amit Patel",
//     userIcon: "/users/user3.png",
//     feedback: "Very addictive game with fair gameplay. Won multiple times, instant withdrawal process.",
//     rating: 4.7, 
//     winAmount: "₹1.8 Crore",
//     date: "2024-01-13"
//   },
//   {
//     userId: "USR004",
//     userName: "Neha Verma",
//     userIcon: "/users/user4.png",
//     feedback: "Fantastic gaming experience with real players. Interface is user friendly and secure.",
//     rating: 4.9,
//     winAmount: "₹95 Lac",
//     date: "2024-01-12"
//   },
//   {
//     userId: "USR005",
//     userName: "Arjun Singh", 
//     userIcon: "/users/user5.png",
//     feedback: "Great platform for rummy lovers. Regular bonuses and exciting tournaments available.",
//     rating: 4.8,
//     winAmount: "₹1.5 Crore",
//     date: "2024-01-11"
//   }
// ];

// const games = {
//   featuredGames: [
//     { 
//       id: 1,
//       name: "Rummy Sultan",
//       image: "/banner.png",
//       featured: true,
//       minDeposit: "₹100",
//       maxBonus: "₹10,000",
//       rating: 4.9,
//       downloads: "1M+"
//     },
//     {
//       id: 2, 
//       name: "Teen Patti Master",
//       image: "/banner.png", 
//       featured: true,
//       minDeposit: "₹200",
//       maxBonus: "₹15,000",
//       rating: 4.8,
//       downloads: "5M+"
//     },
//     {
//       id: 3,
//       name: "Rummy Perfect",
//       image: "/banner.png",
//       featured: true,
//       minDeposit: "₹150",
//       maxBonus: "₹12,000",
//       rating: 4.7,
//       downloads: "2M+"
//     }
//   ],
//   "Recently Launched": [
//     { id: 4, name: "Bet54", image: "/Games/Bet54.png", rating: 4.5, downloads: "100K+" },
//     { id: 5, name: "Dior123", image: "/Games/Dior123.png", rating: 4.6, downloads: "50K+" },
//     { id: 6, name: "Golds Bet", image: "/Games/Golds_Bet.png", rating: 4.4, downloads: "200K+" },
//     { id: 7, name: "Jeet Jackpot Slots", image: "/Games/Jeet_Jackpot_Slots.jpg", rating: 4.7, downloads: "150K+" },
//     { id: 8, name: "Real Teen Patti", image: "/Games/Real_Teen_Patti.jpg", rating: 4.8, downloads: "300K+" }
//   ],
//   "Most Popular": [
//     { id: 9, name: "Rummy Bash", image: "/Games/Rummy_Bash.png", rating: 4.9, downloads: "10M+" },
//     { id: 10, name: "Rummy Bo", image: "/Games/Rummy_Bo.jpg", rating: 4.8, downloads: "8M+" },
//     { id: 11, name: "Rummy East", image: "/Games/Rummy_East.webp", rating: 4.7, downloads: "5M+" },
//     { id: 12, name: "Rummy Gems", image: "/Games/Rummy_Gems.jpg", rating: 4.9, downloads: "7M+" },
//     { id: 13, name: "Rummy Glee", image: "/Games/Rummy_Glee.jpg", rating: 4.8, downloads: "6M+" }
//   ],
//   "Recommend": [
//     { id: 14, name: "Rummy Meet", image: "/Games/Rummy_Meet.jpg", rating: 4.6, downloads: "3M+" },
//     { id: 15, name: "Rummy Modern", image: "/Games/Rummy_Modern.jpg", rating: 4.7, downloads: "2M+" },
//     { id: 16, name: "Rummy Only", image: "/Games/Rummy_Only.jpg", rating: 4.5, downloads: "1M+" },
//     { id: 17, name: "Rummy Ox", image: "/Games/Rummy_Ox.jpg", rating: 4.8, downloads: "4M+" },
//     { id: 18, name: "Rummy Palms", image: "/Games/Rummy_Palms.jpg", rating: 4.6, downloads: "2.5M+" }
//   ],
//   "Live Casino": [
//     { id: 19, name: "Rummy Sultan", image: "/Games/Rummy_Sultan.webp", rating: 4.9, downloads: "15M+" },
//     { id: 20, name: "Rummy Up", image: "/Games/Rummy_Up.jpg", rating: 4.8, downloads: "12M+" },
//     { id: 21, name: "Teen Patti Master", image: "/Games/Teen_Patti_Master.jpg", rating: 4.9, downloads: "20M+" },
//     { id: 22, name: "Teen Patti", image: "/Games/Teen_Patti.png", rating: 4.7, downloads: "18M+" },
//     { id: 23, name: "Teen Patti Web", image: "/Games/Teen_Patti.webp", rating: 4.8, downloads: "16M+" }
//   ]
// };

// export const gamesData = {
//   userReviews,
//   ...games
// };

// export default function handler(req, res) {
//   // Analysis of the data structure:

//   // 1. User Reviews (5 entries)
//   // - Contains real user testimonials with consistent structure
//   // - Each review has: userId, userName, userIcon, feedback, rating, winAmount, date
//   // - Ratings range from 4.7-4.9 (very positive skew)
//   // - Win amounts range from ₹85 Lac to ₹1.8 Crore
//   // - All reviews are from January 2024 (11th-15th)

//   // 2. Featured Games (3 entries) 
//   // - Premium/highlighted games with additional metadata
//   // - Each has: id, name, image, featured flag, minDeposit, maxBonus, rating, downloads
//   // - All use same banner.png image
//   // - Ratings range 4.7-4.9
//   // - Downloads range 1M+ to 5M+
//   // - Min deposits: ₹100-200
//   // - Max bonuses: ₹10k-15k

//   // 3. Game Types (3 categories)
//   // - Main categories: Rummy, Patti, Circle
//   // - Each category has 4 subcategories:
//   //   * Recently Launched (newer games, ~100K-300K downloads)
//   //   * Most Popular (highest downloads 5M-10M+)
//   //   * Recommend (medium popularity 2M-3M+)
//   //   * Live Casino (varied popularity 1M-4M+)
//   // - Each game has: id, name, image, rating, downloads
//   // - IDs are sequential 4-35
//   // - Ratings consistently high (4.4-4.9)
//   // - Image paths follow consistent naming pattern

//   // Key Observations:
//   // - Very positive rating bias across all games (4.4+ minimum)
//   // - Clear tiering of games by popularity/downloads
//   // - Consistent data structure and naming conventions
//   // - Featured games have more metadata than regular games
//   // - All user reviews are recent and highly positive

//   const userReviews = [
//     {
//       userId: "USR001",
//       userName: "Rajesh Kumar", 
//       userIcon: "/users/user1.png",
//       feedback: "Amazing game, won big amount on first try. Graphics and gameplay are super smooth.",
//       rating: 4.8,
//       winAmount: "₹1.2 Crore",
//       date: "2024-01-15"
//     },
//     {
//       userId: "USR002",
//       userName: "Priya Sharma",
//       userIcon: "/users/user2.png", 
//       feedback: "Best rummy game I've played so far. Quick withdrawals and excellent customer support.",
//       rating: 4.9,
//       winAmount: "₹85 Lac",
//       date: "2024-01-14"
//     },
//     {
//       userId: "USR003", 
//       userName: "Amit Patel",
//       userIcon: "/users/user3.png",
//       feedback: "Very addictive game with fair gameplay. Won multiple times, instant withdrawal process.",
//       rating: 4.7, 
//       winAmount: "₹1.8 Crore",
//       date: "2024-01-13"
//     },
//     {
//       userId: "USR004",
//       userName: "Neha Verma",
//       userIcon: "/users/user4.png",
//       feedback: "Fantastic gaming experience with real players. Interface is user friendly and secure.",
//       rating: 4.9,
//       winAmount: "₹95 Lac",
//       date: "2024-01-12"
//     },
//     {
//       userId: "USR005",
//       userName: "Arjun Singh", 
//       userIcon: "/users/user5.png",
//       feedback: "Great platform for rummy lovers. Regular bonuses and exciting tournaments available.",
//       rating: 4.8,
//       winAmount: "₹1.5 Crore",
//       date: "2024-01-11"
//     }
//   ];
//   const featuredGames = [
//     { 
//       id: 1,
//       name: "Rummy Sultan",
//       image: "/banner.png",
//       featured: true,
//       minDeposit: "₹100",
//       maxBonus: "₹10,000",
//       rating: 4.9,
//       downloads: "1M+"
//     },
//     {
//       id: 2, 
//       name: "Teen Patti Master",
//       image: "/banner.png", 
//       featured: true,
//       minDeposit: "₹200",
//       maxBonus: "₹15,000",
//       rating: 4.8,
//       downloads: "5M+"
//     },
//     {
//       id: 3,
//       name: "Rummy Perfect",
//       image: "/banner.png",
//       featured: true,
//       minDeposit: "₹150",
//       maxBonus: "₹12,000",
//       rating: 4.7,
//       downloads: "2M+"
//     }
//   ];
//   const gameTypes = {

//     Rummy: {
//       "Recently Launched": [
//         { id: 4, name: "Rummy Bash", image: "/Games/Rummy_Bash.png", rating: 4.5, downloads: "100K+" },
//         { id: 5, name: "Rummy Bo", image: "/Games/Rummy_Bo.jpg", rating: 4.6, downloads: "50K+" },
//         { id: 6, name: "Rummy East", image: "/Games/Rummy_East.webp", rating: 4.4, downloads: "200K+" },
//         { id: 7, name: "Rummy Gems", image: "/Games/Rummy_Gems.jpg", rating: 4.7, downloads: "150K+" },
//         { id: 8, name: "Rummy Glee", image: "/Games/Rummy_Glee.jpg", rating: 4.8, downloads: "300K+" }
//       ],
//       "Most Popular": [
//         { id: 9, name: "Rummy Meet", image: "/Games/Rummy_Meet.jpg", rating: 4.9, downloads: "10M+" },
//         { id: 10, name: "Rummy Modern", image: "/Games/Rummy_Modern.jpg", rating: 4.8, downloads: "8M+" },
//         { id: 11, name: "Rummy Only", image: "/Games/Rummy_Only.jpg", rating: 4.7, downloads: "5M+" },
//         { id: 12, name: "Rummy Ox", image: "/Games/Rummy_Ox.jpg", rating: 4.9, downloads: "7M+" },
//         { id: 13, name: "Rummy Palms", image: "/Games/Rummy_Palms.jpg", rating: 4.8, downloads: "6M+" }
//       ],
//       "Recommend": [
//         { id: 14, name: "Rummy Sultan", image: "/Games/Rummy_Sultan.webp", rating: 4.6, downloads: "3M+" },
//         { id: 15, name: "Rummy Up", image: "/Games/Rummy_Up.jpg", rating: 4.7, downloads: "2M+" }
//       ],
//       "Live Casino": [
//         { id: 16, name: "Rummy Perfect", image: "/Games/Rummy_Perfect.jpg", rating: 4.5, downloads: "1M+" },
//         { id: 17, name: "Rummy King", image: "/Games/Rummy_King.jpg", rating: 4.8, downloads: "4M+" }
//       ]
//     },
//     Patti: {
//       "Recently Launched": [
//         { id: 18, name: "Teen Patti Master", image: "/Games/Teen_Patti_Master.jpg", rating: 4.6, downloads: "100K+" },
//         { id: 19, name: "Teen Patti Pro", image: "/Games/Teen_Patti_Pro.jpg", rating: 4.7, downloads: "50K+" },
//         { id: 20, name: "Teen Patti Gold", image: "/Games/Teen_Patti_Gold.jpg", rating: 4.5, downloads: "200K+" }
//       ],
//       "Most Popular": [
//         { id: 21, name: "Teen Patti Star", image: "/Games/Teen_Patti_Star.jpg", rating: 4.9, downloads: "10M+" },
//         { id: 22, name: "Teen Patti Live", image: "/Games/Teen_Patti_Live.jpg", rating: 4.8, downloads: "8M+" }
//       ],
//       "Recommend": [
//         { id: 23, name: "Teen Patti Classic", image: "/Games/Teen_Patti_Classic.jpg", rating: 4.6, downloads: "3M+" },
//         { id: 24, name: "Teen Patti Plus", image: "/Games/Teen_Patti_Plus.jpg", rating: 4.7, downloads: "2M+" }
//       ],
//       "Live Casino": [
//         { id: 25, name: "Teen Patti Royal", image: "/Games/Teen_Patti_Royal.jpg", rating: 4.5, downloads: "1M+" },
//         { id: 26, name: "Teen Patti Elite", image: "/Games/Teen_Patti_Elite.jpg", rating: 4.8, downloads: "4M+" }
//       ]
//     },
//     Circle: {
//       "Recently Launched": [
//         { id: 27, name: "Circle Rush", image: "/Games/Circle_Rush.jpg", rating: 4.6, downloads: "100K+" },
//         { id: 28, name: "Circle Spin", image: "/Games/Circle_Spin.jpg", rating: 4.7, downloads: "50K+" },
//         { id: 29, name: "Circle Mania", image: "/Games/Circle_Mania.jpg", rating: 4.5, downloads: "200K+" }
//       ],
//       "Most Popular": [
//         { id: 30, name: "Circle King", image: "/Games/Circle_King.jpg", rating: 4.9, downloads: "10M+" },
//         { id: 31, name: "Circle Master", image: "/Games/Circle_Master.jpg", rating: 4.8, downloads: "8M+" }
//       ],
//       "Recommend": [
//         { id: 32, name: "Circle Pro", image: "/Games/Circle_Pro.jpg", rating: 4.6, downloads: "3M+" },
//         { id: 33, name: "Circle Elite", image: "/Games/Circle_Elite.jpg", rating: 4.7, downloads: "2M+" }
//       ],
//       "Live Casino": [
//         { id: 34, name: "Circle Royal", image: "/Games/Circle_Royal.jpg", rating: 4.5, downloads: "1M+" },
//         { id: 35, name: "Circle Star", image: "/Games/Circle_Star.jpg", rating: 4.8, downloads: "4M+" }
//       ]
//     }
//   };

//   res.status(200).json({
//     userReviews,
//     ...gameTypes
//   });
// }

