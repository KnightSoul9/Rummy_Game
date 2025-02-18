const userReviews = [
  {
    userId: "USR001",
    userName: "Rahul Mehta", 
    userIcon: "/users/user1.jpg",
    feedback: "Absolutely love this game! The interface is smooth, and winnings are instant.",
    rating: 4.7,
    winAmount: "₹4,50,000",
    date: "2024-02-01"
  },
  {
    userId: "USR002",
    userName: "Priya Sharma",
    userIcon: "/users/user2.jpg", 
    feedback: "Great platform with fair gameplay. Customer support is very responsive!",
    rating: 4.8,
    winAmount: "₹3,20,000",
    date: "2024-02-02"
  },
  {
    userId: "USR003", 
    userName: "Amit Patel",
    userIcon: "/users/user3.jpg",
    feedback: "Very exciting and competitive games. Quick payouts make it even better!",
    rating: 4.6, 
    winAmount: "₹2,80,000",
    date: "2024-02-03"
  },
  {
    userId: "USR004",
    userName: "Rohan Gupta",
    userIcon: "/users/user4.jpg",
    feedback: "Awesome game with easy withdrawals. Highly recommended for rummy lovers.",
    rating: 4.9,
    winAmount: "₹1,90,000",
    date: "2024-02-04"
  },
  {
    userId: "USR005",
    userName: "Arjun Singh", 
    userIcon: "/users/user5.jpg",
    feedback: "Well-designed platform with seamless gameplay. Enjoying every moment!",
    rating: 4.7,
    winAmount: "₹2,50,000",
    date: "2024-02-05"
  },
  {
    userId: "USR006",
    userName: "Vikas Thakur", 
    userIcon: "/users/user6.jpg",
    feedback: "Winning is fun when withdrawals are this fast! Great game to play daily.",
    rating: 4.5,
    winAmount: "₹4,00,000",
    date: "2024-02-06"
  },
  {
    userId: "USR007",
    userName: "Sandeep Yadav",
    userIcon: "/users/user7.jpg",
    feedback: "One of the best online games I’ve played! Simple UI and fast transactions.",
    rating: 4.8,
    winAmount: "₹3,70,000",
    date: "2024-02-07"
  },
  {
    userId: "USR008",
    userName: "Nikhil Verma",
    userIcon: "/users/user8.jpg",
    feedback: "Addictive and rewarding. Playing daily and loving the challenges.",
    rating: 4.6,
    winAmount: "₹2,00,000",
    date: "2024-02-08"
  },
  {
    userId: "USR009",
    userName: "Anuj Mishra",
    userIcon: "/users/user9.jpg",
    feedback: "Enjoying every bit of this game. Worth every minute spent!",
    rating: 4.9,
    winAmount: "₹1,50,000",
    date: "2024-02-09"
  },
  {
    userId: "USR010",
    userName: "Karan Joshi", 
    userIcon: "/users/user10.jpg",
    feedback: "Fun and exciting. The competition makes it more thrilling!",
    rating: 4.5,
    winAmount: "₹50,000",
    date: "2024-02-10"
  },
  {
    userId: "USR011",
    userName: "Manoj Tiwari",
    userIcon: "/users/user11.jpg",
    feedback: "A fantastic way to enjoy rummy. Fair gameplay and quick earnings.",
    rating: 4.6,
    winAmount: "₹4,20,000",
    date: "2024-02-11"
  },
  {
    userId: "USR012",
    userName: "Sumit Das",
    userIcon: "/users/user12.jpg",
    feedback: "Fast withdrawals and fair matches. Playing every day!",
    rating: 4.7,
    winAmount: "₹3,40,000",
    date: "2024-02-12"
  },
  {
    userId: "USR013",
    userName: "Ravi Kapoor", 
    userIcon: "/users/user13.jpg",
    feedback: "Excellent UI and competitive games. A must-try for card game lovers.",
    rating: 4.8,
    winAmount: "₹2,10,000",
    date: "2024-02-13"
  },
  {
    userId: "USR014",
    userName: "Aditya Saxena",
    userIcon: "/users/user14.jpg",
    feedback: "Superb experience! I enjoy every session I play here.",
    rating: 4.9,
    winAmount: "₹1,30,000",
    date: "2024-02-14"
  },
  {
    userId: "USR015",
    userName: "Sahil Malhotra",
    userIcon: "/users/user15.jpg",
    feedback: "Brilliantly designed game with amazing rewards!",
    rating: 4.8,
    winAmount: "₹90,000",
    date: "2024-02-15"
  },
  {
    userId: "USR016",
    userName: "Harshdeep Singh",
    userIcon: "/users/user16.jpg",
    feedback: "Absolutely fantastic game with great winning potential!",
    rating: 4.7,
    winAmount: "₹3,90,000",
    date: "2024-02-16"
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
    downloads: "1M+",
    downloadLink: "https://example.com/download/rummy-sultan"
  },
  {
    id: 2, 
    name: "Teen Patti Master",
    image: "/banner.png", 
    featured: true,
    minDeposit: "₹200",
    maxBonus: "₹15,000",
    rating: 4.8,
    downloads: "5M+",
    downloadLink: "https://example.com/download/teen-patti-master"
  },
  {
    id: 3,
    name: "Rummy Perfect",
    image: "/banner.png",
    featured: true,
    minDeposit: "₹150",
    maxBonus: "₹12,000",
    rating: 4.7,
    downloads: "2M+",
    downloadLink: "https://example.com/download/rummy-perfect"
  }
];

const all = {
  "Recently Launched": [
    { id: 4, name: "Rummy Bash", image: "/Games/Rummy_Bash.png", rating: 4.5, downloads: "100K+", downloadLink: "https://example.com/download/rummy-bash" },
    { id: 5, name: "Rummy Bo", image: "/Games/Rummy_Bo.jpg", rating: 4.6, downloads: "50K+", downloadLink: "https://example.com/download/rummy-bo" },
    { id: 6, name: "Rummy East", image: "/Games/Rummy_East.webp", rating: 4.4, downloads: "200K+", downloadLink: "https://example.com/download/rummy-east" },
    { id: 7, name: "Rummy Gems", image: "/Games/Rummy_Gems.jpg", rating: 4.9, downloads: "10M+", downloadLink: "https://example.com/download/rummy-gems" },
    { id: 8, name: "Rummy Glee", image: "/Games/Rummy_Glee.jpg", rating: 4.8, downloads: "8M+", downloadLink: "https://example.com/download/rummy-glee" },
    { id: 9, name: "Rummy Meet", image: "/Games/Rummy_Meet.jpg", rating: 4.7, downloads: "5M+", downloadLink: "https://example.com/download/rummy-meet" },
    { id: 10, name: "Rummy Modern", image: "/Games/Rummy_Modern.jpg", rating: 4.6, downloads: "3M+", downloadLink: "https://example.com/download/rummy-modern" },
    { id: 11, name: "Rummy Only", image: "/Games/Rummy_Only.jpg", rating: 4.7, downloads: "2M+", downloadLink: "https://example.com/download/rummy-only" },
    { id: 12, name: "Rummy Ox", image: "/Games/Rummy_Ox.jpg", rating: 4.5, downloads: "1M+", downloadLink: "https://example.com/download/rummy-ox" }
  ],
  "Most Popular": [
    { id: 13, name: "Rummy Palms", image: "/Games/Rummy_Palms.jpg", rating: 4.8, downloads: "4M+", downloadLink: "https://example.com/download/rummy-palms" },
    { id: 14, name: "Rummy Sultan", image: "/Games/Rummy_Sultan.webp", rating: 4.6, downloads: "2.5M+", downloadLink: "https://example.com/download/rummy-sultan" },
    { id: 15, name: "Rummy Up", image: "/Games/Rummy_Up.jpg", rating: 4.9, downloads: "15M+", downloadLink: "https://example.com/download/rummy-up" },
    { id: 16, name: "Teen Patti Master", image: "/Games/Teen_Patti_Master.jpg", rating: 4.8, downloads: "12M+", downloadLink: "https://example.com/download/teen-patti-master" },
    { id: 17, name: "Teen Patti Gold", image: "/Games/Teen_Patti.png", rating: 4.9, downloads: "20M+", downloadLink: "https://example.com/download/teen-patti-gold" },
    { id: 18, name: "Teen Patti Pro", image: "/Games/Teen_Patti.webp", rating: 4.7, downloads: "18M+", downloadLink: "https://example.com/download/teen-patti-pro" },
    { id: 19, name: "Teen Patti Star", image: "/Games/Teen_Patti_Master.jpg", rating: 4.8, downloads: "16M+", downloadLink: "https://example.com/download/teen-patti-star" },
    { id: 20, name: "Teen Patti Live", image: "/Games/Teen_Patti.png", rating: 4.6, downloads: "3M+", downloadLink: "https://example.com/download/teen-patti-live" },
    { id: 21, name: "Teen Patti Plus", image: "/Games/Teen_Patti.webp", rating: 4.7, downloads: "2M+", downloadLink: "https://example.com/download/teen-patti-plus" }
  ],
  "Recommend": [
    { id: 22, name: "Teen Patti Royal", image: "/Games/Teen_Patti_Master.jpg", rating: 4.5, downloads: "1M+", downloadLink: "https://example.com/download/teen-patti-royal" },
    { id: 23, name: "Teen Patti King", image: "/Games/Teen_Patti.png", rating: 4.8, downloads: "4M+", downloadLink: "https://example.com/download/teen-patti-king" },
    { id: 24, name: "Teen Patti Club", image: "/Games/Teen_Patti.webp", rating: 4.6, downloads: "2.5M+", downloadLink: "https://example.com/download/teen-patti-club" },
    { id: 25, name: "Teen Patti VIP", image: "/Games/Teen_Patti_Master.jpg", rating: 4.9, downloads: "15M+", downloadLink: "https://example.com/download/teen-patti-vip" },
    { id: 26, name: "Teen Patti Elite", image: "/Games/Teen_Patti.png", rating: 4.8, downloads: "12M+", downloadLink: "https://example.com/download/teen-patti-elite" },
    { id: 27, name: "Teen Patti Premium", image: "/Games/Teen_Patti.webp", rating: 4.9, downloads: "20M+", downloadLink: "https://example.com/download/teen-patti-premium" },
    { id: 28, name: "Circle Rush", image: "/Games/Bet54.png", rating: 4.5, downloads: "100K+", downloadLink: "https://example.com/download/circle-rush" },
    { id: 29, name: "Circle Spin", image: "/Games/Dior123.png", rating: 4.6, downloads: "50K+", downloadLink: "https://example.com/download/circle-spin" },
    { id: 30, name: "Circle Win", image: "/Games/Golds_Bet.png", rating: 4.4, downloads: "200K+", downloadLink: "https://example.com/download/circle-win" }
  ],
  "Live Casino": [
    { id: 31, name: "Circle Master", image: "/Games/Bet54.png", rating: 4.9, downloads: "10M+", downloadLink: "https://example.com/download/circle-master" },
    { id: 32, name: "Circle King", image: "/Games/Dior123.png", rating: 4.8, downloads: "8M+", downloadLink: "https://example.com/download/circle-king" },
    { id: 33, name: "Circle Pro", image: "/Games/Golds_Bet.png", rating: 4.7, downloads: "5M+", downloadLink: "https://example.com/download/circle-pro" },
    { id: 34, name: "Circle Elite", image: "/Games/Bet54.png", rating: 4.6, downloads: "3M+", downloadLink: "https://example.com/download/circle-elite" },
    { id: 35, name: "Circle Plus", image: "/Games/Dior123.png", rating: 4.7, downloads: "2M+", downloadLink: "https://example.com/download/circle-plus" },
    { id: 36, name: "Circle Star", image: "/Games/Golds_Bet.png", rating: 4.5, downloads: "1M+", downloadLink: "https://example.com/download/circle-star" },
    { id: 37, name: "Circle Live", image: "/Games/Bet54.png", rating: 4.8, downloads: "4M+", downloadLink: "https://example.com/download/circle-live" },
    { id: 38, name: "Circle VIP", image: "/Games/Dior123.png", rating: 4.6, downloads: "2.5M+", downloadLink: "https://example.com/download/circle-vip" },
    { id: 39, name: "Circle Royal", image: "/Games/Golds_Bet.png", rating: 4.9, downloads: "15M+", downloadLink: "https://example.com/download/circle-royal" }
  ]
};

const rummy = {
  "Recently Launched": [
    { id: 16, name: "Teen Patti Master", image: "/Games/Teen_Patti_Master.jpg", rating: 4.8, downloads: "12M+", downloadLink: "https://example.com/download/teen-patti-master" },
    { id: 17, name: "Teen Patti Gold", image: "/Games/Teen_Patti.png", rating: 4.9, downloads: "20M+", downloadLink: "https://example.com/download/teen-patti-gold" },
    { id: 18, name: "Teen Patti Pro", image: "/Games/Teen_Patti.webp", rating: 4.7, downloads: "18M+", downloadLink: "https://example.com/download/teen-patti-pro" },
    { id: 19, name: "Teen Patti Star", image: "/Games/Teen_Patti_Master.jpg", rating: 4.8, downloads: "16M+", downloadLink: "https://example.com/download/teen-patti-star" },
    { id: 20, name: "Teen Patti Live", image: "/Games/Teen_Patti.png", rating: 4.6, downloads: "3M+", downloadLink: "https://example.com/download/teen-patti-live" },
    { id: 21, name: "Teen Patti Plus", image: "/Games/Teen_Patti.webp", rating: 4.7, downloads: "2M+", downloadLink: "https://example.com/download/teen-patti-plus" }
  ],
  "Most Popular": [
    { id: 22, name: "Teen Patti Royal", image: "/Games/Teen_Patti_Master.jpg", rating: 4.5, downloads: "1M+", downloadLink: "https://example.com/download/teen-patti-royal" },
    { id: 23, name: "Teen Patti King", image: "/Games/Teen_Patti.png", rating: 4.8, downloads: "4M+", downloadLink: "https://example.com/download/teen-patti-king" },
    { id: 24, name: "Teen Patti Club", image: "/Games/Teen_Patti.webp", rating: 4.6, downloads: "2.5M+", downloadLink: "https://example.com/download/teen-patti-club" },
    { id: 25, name: "Teen Patti VIP", image: "/Games/Teen_Patti_Master.jpg", rating: 4.9, downloads: "15M+", downloadLink: "https://example.com/download/teen-patti-vip" },
    { id: 26, name: "Teen Patti Elite", image: "/Games/Teen_Patti.png", rating: 4.8, downloads: "12M+", downloadLink: "https://example.com/download/teen-patti-elite" },
    { id: 27, name: "Teen Patti Premium", image: "/Games/Teen_Patti.webp", rating: 4.9, downloads: "20M+", downloadLink: "https://example.com/download/teen-patti-premium" }
  ],
};

const teenpatti = {
  "Recently Launched": [
    { id: 28, name: "Circle Rush", image: "/Games/Bet54.png", rating: 4.5, downloads: "100K+", downloadLink: "https://example.com/download/circle-rush" },
    { id: 29, name: "Circle Spin", image: "/Games/Dior123.png", rating: 4.6, downloads: "50K+", downloadLink: "https://example.com/download/circle-spin" },
    { id: 30, name: "Circle Win", image: "/Games/Golds_Bet.png", rating: 4.4, downloads: "200K+", downloadLink: "https://example.com/download/circle-win" },
    { id: 31, name: "Circle Master", image: "/Games/Bet54.png", rating: 4.9, downloads: "10M+", downloadLink: "https://example.com/download/circle-master" },
    { id: 32, name: "Circle King", image: "/Games/Dior123.png", rating: 4.8, downloads: "8M+", downloadLink: "https://example.com/download/circle-king" },
    { id: 33, name: "Circle Pro", image: "/Games/Golds_Bet.png", rating: 4.7, downloads: "5M+", downloadLink: "https://example.com/download/circle-pro" }
  ],
  "Most Popular": [
    { id: 34, name: "Circle Elite", image: "/Games/Bet54.png", rating: 4.6, downloads: "3M+", downloadLink: "https://example.com/download/circle-elite" },
    { id: 35, name: "Circle Plus", image: "/Games/Dior123.png", rating: 4.7, downloads: "2M+", downloadLink: "https://example.com/download/circle-plus" },
    { id: 36, name: "Circle Star", image: "/Games/Golds_Bet.png", rating: 4.5, downloads: "1M+", downloadLink: "https://example.com/download/circle-star" },
    { id: 37, name: "Circle Live", image: "/Games/Bet54.png", rating: 4.8, downloads: "4M+", downloadLink: "https://example.com/download/circle-live" },
    { id: 38, name: "Circle VIP", image: "/Games/Dior123.png", rating: 4.6, downloads: "2.5M+", downloadLink: "https://example.com/download/circle-vip" },
    { id: 39, name: "Circle Royal", image: "/Games/Golds_Bet.png", rating: 4.9, downloads: "15M+", downloadLink: "https://example.com/download/circle-royal" }
  ],
};

export const gamesData = {
  userReviews,
  featuredGames,
  all,
  rummy,
  teenpatti,
};