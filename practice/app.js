const app = Vue.createApp({
  data() {
    return {
      url: "https://x.com/home",
      showProfile: true,
      name: "Azubuike chima",
      age: 29,
      hobby: "coding and reading",
      x: 0,
      y: 0,
      books: [
        {
          title: "Lord of the ring",
          author: "Chima Francis",
          age: 2,
          img: "assets/image1.jfif",
          isFav: true,
        },
        {
          title: "GAme of thrones",
          author: "Chima Francis",
          age: 90,
          img: "assets/image2.jfif",
          isFav: false,
        },
        {
          title: "Lost",
          author: "Chima Francis",
          age: 25,
          img: "assets/image3.jfif",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeName() {
      this.name = "Azubuike Chioma Francisca";
    },
    increaseAge() {
      this.age++;
    },
    decreaseAge() {
      this.age--;
    },
    toggleShowProfle() {
      this.showProfile = !this.showProfile;
      console.log(Hello);
    },
    handleEvent(e, data) {
      console.log(e, e.type, data);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    isFavToggle(book) {
      book.isFav = !book.isFav;
    },
  },
  
});

app.mount("#app");
