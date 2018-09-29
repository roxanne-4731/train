<template>
  <div>
    <input class="uk-input" type="text" v-model="user.password">
    <input class="uk-input" type="text" v-model="user.username">
    <ValidationMessage ></ValidationMessage>
  </div>
</template>


<script>
  import ValidationMessage from './validation.messge'
  import {required, minLength} from 'vuelidate/lib/validators';

  export default {
    components: {
      ValidationMessage
    },
    data() {
      return {
        user: {

          username: '',
          password: ''
        }
      }
    },
    validations: {
      user: {
        username: {
          required
        },
        password: {
          required,
          minLength: minLength(5)
        }
      }
    }

  }
</script>


<style>

</style>
