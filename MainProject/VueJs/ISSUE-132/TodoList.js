const app = Vue.createApp({

});
app.component("ToDoListComponent",{
  template:`
  <div>
      <h1>To Do List</h1>
      <input type="text" class="form-control" v-model="game">
    </div>
    <div class="mt-3">
      <button class="btn btn-primary" @click="onAddGames()">Add List</button>
    </div>
    <div class="mt-3">
      <ul class="list-group">
        <li class="list-group-item" v-for="(singleGame,index) in games" :key="index">{{singleGame}}
          <button class="edit-btn" @click="onEdit(index)">Edit</button>
          <button class="delete-btn" @click="onDeleteGame(index)">Delete</button>
        </li>
      </ul>
  </div>`,
  data() {
    return{
      selectedIndex:null,
      isEditing:false,
      currentIndex:0,
      editedTask:null,
      games:[],
      singleGame:'',
      game:'',

    };
  },
  methods: {
    onAddGames() {
      if(this.game.length === 0) return;
      else if(!this.isEditing){
        this.games.push(this.game);
        this.game = '';
      }
      else{
        this.games[this.currentIndex] = this.game;
        this.isEditing = false;
        this.game = '';
      } 
    },
    onDeleteGame(index) {
      this.games.splice(index,1);
    },
    onEdit(index) {
      this.currentIndex = index;
      this.game =  this.games[index];
      this.isEditing = true;
    },

  }
});
app.mount('#app');