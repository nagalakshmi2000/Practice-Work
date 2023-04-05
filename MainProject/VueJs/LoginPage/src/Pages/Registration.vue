
<template>
  <div class="container col-md-4 bg-info mt-4">
    <h1 class="text-center mt-4 p-3">Registration</h1>
    <form @submit.prevent="onRegister()">
      <div class="px-3">
        <h6 for="" class="font-weight-bold">Email</h6>
        <input type="email" class="form-control mb-4" placeholder="Your Email" v-model.trim="email">
        <div class="'error text-danger" v-if="errors.email">{{ errors.email }}</div>

      </div>
      <div class="px-3">
        <h6 for="" class="font-weight-bold">Password</h6>
        <input type="Password" class="form-control mb-4" placeholder="Your Password" v-model.trim="password">
        <div class="'error text-danger" v-if="errors.password">{{ errors.password }}</div>
      </div>
      <div class="p-3">
        <button type="submit" class="btn btn-primary mb-2 ">Submit</button>
      </div>
      <p class="text-center pb-4 mb-4">Have already an account? <router-Link to="/login" class="fw-bold text-body">Login
          here</router-Link>
      </p>

    </form>

  </div>
</template>

<script>
import SignupValidations from '../services/SignupValidations';
import axios from 'axios';
import { getLoginErrorMessage } from '../services/LoginValidations';
import emitter from 'tiny-emitter/instance';
import {isUserAuthenticated,saveDetailsInLocalStorage } from '../services/LocalStorage';
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
    onRegister() {
      emitter.emit('show-loading', true)
      let Validations = new SignupValidations(
        this.email,
        this.password,
      );
      this.errors = Validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        AIzaSyBvWm5Lo2R3bB9X_D9qGdSJtXE9d2fU1oY`,
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
      ).then((response => {
        console.log(response);
        axios.post(`https://vue-posts-af023-default-rtdb.firebaseio.com/user.json`, {
    userId:response.data.email,
    isAdmin:false
      })
        emitter.emit('success-message-event', 'Successfully Registered');
      }))
        .catch((error) => {
          console.log(error.response.data.error.message);

          emitter.emit('error-message-event', getLoginErrorMessage(error.response.data.error.message));
          // console.log(error.response.data.error);
        });


    }
  },


};
</script>

<style lang="scss" scoped>

</style>