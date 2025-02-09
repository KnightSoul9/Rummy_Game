export default function handler(req, res) {
  res.status(200).json({
    featuredGames: [
      { name: "Rummy Sultan", image: "/banner.png", featured: true },
      { name: "Teen Patti Master", image: "/banner.png", featured: true },
      { name: "Rummy Perfect", image: "/banner.png", featured: true }
    ],
    "Recently Launched": [
      { name: "Bet54", image: "/Games/Bet54.png" },
      { name: "Dior123", image: "/Games/Dior123.png" },
      { name: "Golds Bet", image: "/Games/Golds_Bet.png" },
      { name: "Jeet Jackpot Slots", image: "/Games/Jeet_Jackpot_Slots.jpg" },
      { name: "Real Teen Patti", image: "/Games/Real_Teen_Patti.jpg" },
      { name: "RTry", image: "/Games/RTry.jpg" },
      { name: "Rummy 334", image: "/Games/Rummy_334.jpg" },
      { name: "Rummy 2024", image: "/Games/Rummy_2024.webp" },
      { name: "Rummy Alliance", image: "/Games/Rummy_Alliance.jpg" },
      { name: "Rummy Apple", image: "/Games/Rummy_Apple.webp" },
    ],
    "Most Popular": [
      { name: "Rummy Bash", image: "/Games/Rummy_Bash.png" },
      { name: "Rummy Bo", image: "/Games/Rummy_Bo.jpg" },
      { name: "Rummy East", image: "/Games/Rummy_East.webp" },
      { name: "Rummy Gems", image: "/Games/Rummy_Gems.jpg" },
      { name: "Rummy Glee", image: "/Games/Rummy_Glee.jpg" },
      { name: "Rummy Good", image: "/Games/Rummy_Good.webp" },
      { name: "Rummy Lott", image: "/Games/Rummy_Lott.jpg" },
      { name: "Rummy Mars", image: "/Games/Rummy_Mars.png" },
      { name: "Rummy Master", image: "/Games/Rummy_Master.jpg" },
      { name: "Rummy Mate", image: "/Games/Rummy_Mate.jpg" },
    ],
    "Recommend": [
      { name: "Rummy Meet", image: "/Games/Rummy_Meet.jpg" },
      { name: "Rummy Modern", image: "/Games/Rummy_Modern.jpg" },
      { name: "Rummy Only", image: "/Games/Rummy_Only.jpg" },
      { name: "Rummy Ox", image: "/Games/Rummy_Ox.jpg" },
      { name: "Rummy Palms", image: "/Games/Rummy_Palms.jpg" },
      { name: "Rummy Perfect", image: "/Games/Rummy_Perfect.jpg" },
      { name: "Rummy Regal", image: "/Games/Rummy_Regal.jpg" },
      { name: "Rummy Return", image: "/Games/Rummy_Return.jpg" },
      { name: "Rummy Run", image: "/Games/Rummy_Run.png" },
      { name: "Rummy SE", image: "/Games/Rummy_SE.webp" },
    ],
    "Live Casino": [
      { name: "Rummy Sultan", image: "/Games/Rummy_Sultan.webp" },
      { name: "Rummy Up", image: "/Games/Rummy_Up.jpg" },
      { name: "Rummy", image: "/Games/Rummy.webp" },
      { name: "Teen Patti Master", image: "/Games/Teen_Patti_Master.jpg" },
      { name: "Teen Patti", image: "/Games/Teen_Patti.png" },
      { name: "Teen Patti Web", image: "/Games/Teen_Patti.webp" },
    ],
  });
}
