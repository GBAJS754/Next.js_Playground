const Data = {
  page: 1,
  per_page: 1,
  photos: [
    {
      id: 3225517,
      width: 4664,
      height: 5830,
      url: "https://www.pexels.com/photo/photo-of-stream-during-daytime-3225517/",
      photographer: "Michael Block",
      photographer_url: "https://www.pexels.com/@michael-block-1691617",
      photographer_id: 1691617,
      avg_color: "#6D7B7C",
      src: {
        original:
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
        large2x:
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        large:
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        medium:
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=350",
        small:
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=130",
        portrait:
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        landscape:
          "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        tiny: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
      },
      liked: false,
      alt: "Photo Of Stream During Daytime",
    },
  ],
  total_results: 8000,
  next_page: "https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature",
};

export type DataType = typeof Data;
