const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Good Morning',
      link: "https://vuejs.org/guide/introduction.html",
      html: '<h1>Html Content</h1>',
      count: 0,
      login: false,
      name: "Raja",
      firstName: '',
      lastName: '',
      country: '',
      myfName: '',
      mylName: '',
      isLoggedIn: true,
      watcherMsg: '',
      posts: [
        {
          name: 'lakshmi',
          age: '20',
        },
        {
          name: 'Ram',
          age: '22',
        },
        {
          name: 'Ajay',
          age: '21',
        },
        {
          name: 'Ganesh',
          age: '22'
        }
      ],
      person: {
        name: "name1",
        age: "age1",
        college: 'TEC',
      }
    };
  },
  watch: {
    login() {
      if (this.isLoggedIn) {
        this.watcherMsg = " watcher login"
      }
      else {
        this.watcherMsg = "watcher No"
      }
    }
  },
  computed: {
    fName() {
      console.log('Abc');
      return this.firstName + " " + this.lastName;
    },
    myFullName() {
      return this.myfName + " " + this.mylName;
    },
    computedLoggedIn() {
      return this.isLoggedIn ? "user is loggedIn" : "not loggedIn";
    }
  },
  methods: {
    onIncrement() {
      this.count = this.count + 1;
    },
    onDecrement() {
      if (this.count === 0) {
        return this.count;
      }
      this.count = this.count - 1;
    },
    // logIn() {
    //   this.login = !this.login;
    // },
    // onChange(event){
    //   this.name=event.target.value;
    // }
    // fName(){
    //   console.log("executing");
    //   return this.firstName + " " + this.lastName;
    // },
    myFirstName(event) {
      this.myfName = event.target.value;
    },
    myLastName(event) {
      this.mylName = event.target.value;
    },
    onLogin() {
      this.watcherMsg = 'watcher is Login';
    },
    onLogout() {
      this.watcherMsg = 'watcher is LogOut';
    }
  },

});
app.mount('#app');