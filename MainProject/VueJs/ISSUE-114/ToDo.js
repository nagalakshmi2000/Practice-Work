const app = Vue.createApp({
  data() {
    return {
      selectedIndex: null,
      isEditing: false,
      currentIndex: 0,
      editedTask: null,
      games: [],
      singleGame: '',
      game: ''
    };
  },
  methods: {
    onAddGames() {
      if (this.game.length === 0) return;
      else if (!this.isEditing) {
        this.games.push(this.game);
        this.game = '';
      } else {
        this.games[this.currentIndex] = this.game;
        this.isEditing = false;
        this.game = ''; 
      }
    },
    onDeleteGame(index) {
      this.games.splice(index, 1);
    },
    onEdit(index) {
      this.currentIndex = index;
      this.game = this.games[index];
      this.isEditing = true;
    }
  }
});
app.mount('#app');
