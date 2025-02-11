export default function handler(req, res) {
    res.status(200).json({
      featuredGames: [
        { id: 1, name: "Rummy Sultan", image: "/banner.png", featured: true },
        { id: 2, name: "Teen Patti Master", image: "/banner.png", featured: true },
        { id: 3, name: "Rummy Perfect", image: "/banner.png", featured: true }
      ],
      "Recently Launched": [
        { id: 4, name: "Bet54", image: "/Games/Bet54.png" },
        { id: 5, name: "Dior123", image: "/Games/Dior123.png" },
        { id: 6, name: "Golds Bet", image: "/Games/Golds_Bet.png" },
        { id: 7, name: "Jeet Jackpot Slots", image: "/Games/Jeet_Jackpot_Slots.jpg" },
        { id: 8, name: "Real Teen Patti", image: "/Games/Real_Teen_Patti.jpg" },
        { id: 9, name: "RTry", image: "/Games/RTry.jpg" },
        { id: 10, name: "Rummy 334", image: "/Games/Rummy_334.jpg" },
        { id: 11, name: "Rummy 2024", image: "/Games/Rummy_2024.webp" },
        { id: 12, name: "Rummy Alliance", image: "/Games/Rummy_Alliance.jpg" },
        { id: 13, name: "Rummy Apple", image: "/Games/Rummy_Apple.webp" },
      ],
      "Most Popular": [
        { id: 14, name: "Rummy Bash", image: "/Games/Rummy_Bash.png" },
        { id: 15, name: "Rummy Bo", image: "/Games/Rummy_Bo.jpg" },
        { id: 16, name: "Rummy East", image: "/Games/Rummy_East.webp" },
        { id: 17, name: "Rummy Gems", image: "/Games/Rummy_Gems.jpg" },
        { id: 18, name: "Rummy Glee", image: "/Games/Rummy_Glee.jpg" },
        { id: 19, name: "Rummy Good", image: "/Games/Rummy_Good.webp" },
        { id: 20, name: "Rummy Lott", image: "/Games/Rummy_Lott.jpg" },
        { id: 21, name: "Rummy Mars", image: "/Games/Rummy_Mars.png" },
        { id: 22, name: "Rummy Master", image: "/Games/Rummy_Master.jpg" },
        { id: 23, name: "Rummy Mate", image: "/Games/Rummy_Mate.jpg" },
      ],
      "Recommend": [
        { id: 24, name: "Rummy Meet", image: "/Games/Rummy_Meet.jpg" },
        { id: 25, name: "Rummy Modern", image: "/Games/Rummy_Modern.jpg" },
        { id: 26, name: "Rummy Only", image: "/Games/Rummy_Only.jpg" },
        { id: 27, name: "Rummy Ox", image: "/Games/Rummy_Ox.jpg" },
        { id: 28, name: "Rummy Palms", image: "/Games/Rummy_Palms.jpg" },
        { id: 29, name: "Rummy Perfect", image: "/Games/Rummy_Perfect.jpg" },
        { id: 30, name: "Rummy Regal", image: "/Games/Rummy_Regal.jpg" },
        { id: 31, name: "Rummy Return", image: "/Games/Rummy_Return.jpg" },
        { id: 32, name: "Rummy Run", image: "/Games/Rummy_Run.png" },
        { id: 33, name: "Rummy SE", image: "/Games/Rummy_SE.webp" },
      ],
      "Live Casino": [
        { id: 34, name: "Rummy Sultan", image: "/Games/Rummy_Sultan.webp" },
        { id: 35, name: "Rummy Up", image: "/Games/Rummy_Up.jpg" },
        { id: 36, name: "Rummy", image: "/Games/Rummy.webp" },
        { id: 37, name: "Teen Patti Master", image: "/Games/Teen_Patti_Master.jpg" },
        { id: 38, name: "Teen Patti", image: "/Games/Teen_Patti.png" },
        { id: 39, name: "Teen Patti Web", image: "/Games/Teen_Patti.webp" },
      ],
    });
  }
  