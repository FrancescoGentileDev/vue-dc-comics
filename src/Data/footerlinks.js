class LinkCreate {
    constructor(link, text) {
      this.link = link;
      this.text = text
    }
  }
  


let links =
    [
        {
          title: "dc comics",
          links: [
            new LinkCreate("#", "Characters"),
            new LinkCreate("#", "comics"),
            new LinkCreate("#", "movies"),
            new LinkCreate("#", "tv"),
            new LinkCreate("#", "games"),
            new LinkCreate("#", "videos"),
            new LinkCreate("#", "news")
          ]
        },
        {
          title: "shop",
          links: [
            new LinkCreate("#", "shop dc"),
            new LinkCreate("#", "shop dc Collectibles"),
          ]
        },
        {
          title: "dc",
          links: [
            new LinkCreate("#", "terms of use"),
            new LinkCreate("#", "privacy policy (New)"),
            new LinkCreate("#", "ad choices"),
            new LinkCreate("#", "Advertising"),
            new LinkCreate("#", "Jobs"),
            new LinkCreate("#", "Subscription"),
            new LinkCreate("#", "talent workshops"),
            new LinkCreate("#", "CPSC Certificates"),
            new LinkCreate("#", "Ratings"),
            new LinkCreate("#", "Shop Help"),
            new LinkCreate("#", "Contact us"),
          ]
        },
        {
          title: "Sites",
          links: [
            new LinkCreate("#", "dc"),
            new LinkCreate("#", "MAD Magazine"),
            new LinkCreate("#", "DC Kids"),
            new LinkCreate("#", "DC Universe"),
            new LinkCreate("#", "DC Power Visa"),
          ]
        },
  
      ]












export default links