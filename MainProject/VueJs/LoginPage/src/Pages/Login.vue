<template>
  <div class="container col-md-4 bg-info mt-4">
    <h1 class="text-center mt-4 p-3">Login</h1>
    <form @submit.prevent="onLogin()">
      <div class="px-3">
        <h6 for="email" class="font-weight-bold">Email</h6>
        <input type="text" class="form-control mb-4" placeholder="Please Enter an email" v-model='email'>
        <div class="error text-danger" v-if="errors.email">{{ errors.email }}</div>
      </div>
      <div class="px-3">
        <h6 for="Password" class="font-weight-bold">Password</h6>
        <input type="password" class="form-control mb-4" placeholder="Password" v-model="password">
        <div class="error text-danger" v-if="errors.password">{{ errors.password }}</div>
      </div>
      <form class="ms-3" >
        <router-link to="/" class="btn btn-primary" type="submit">Login</router-link>
      </form>
      <p class="text-center pb-4">Not a member?<router-link to="/registration">Register</router-link>
      </p>
    </form>

  </div>
</template>

<script>
import SignupValidations from '../services/SignupValidations';
import axios from 'axios';
import { getLoginErrorMessage } from '../services/LoginValidations';
import { isUserAuthenticated, saveDetailsInLocalStorage } from '../services/LocalStorage';
import emitter from 'tiny-emitter/instance';

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: [],
    }
  },
  beforeRouteEnter(to, from, next) {
    let isLoggedIn = isUserAuthenticated();
    if (isLoggedIn) {
      next(vm => {
        vm.$router.push('/');
      });
    } else {
      next(true);
    }
  },
  methods: {
    onLogin() {
      emitter.emit('show-loading', true)
      let Validations = new SignupValidations(
        this.email,
        this.password,
      );
      this.errors = Validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
        AIzaSyBvWm5Lo2R3bB9X_D9qGdSJtXE9d2fU1oY`,
        {
          email: this.email,
          password: this.password,
          // returnSecureToken: true
        }
      )
        .then((response) => {
          emitter.emit('logged-in-event', true)
          emitter.emit('show-loading', false)
          console.log(response.data.email);
          saveDetailsInLocalStorage(response.data);
          emitter.emit('success-message-event', 'Successfully Logged in');
          // this.$router.replace('/');
        })
        .catch((error) => {
          // console.log(error.response.data.error.message);
        emitter.emit('error-message-event', getLoginErrorMessage(error.response.data.error.message));
          // console.log(error.response.data.error);
        });
    },
  },


};
</script>

<style lang="scss" scoped>

</style>