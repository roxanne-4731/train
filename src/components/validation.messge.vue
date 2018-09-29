<template>
  <div v-if="invalid">
    <span v-if="validation.required">
      فیلد {{caption}} الزامی می باشد.
    </span>
    <span v-if="!validation.minLength">
      فیلد {{caption}} باید حداقل {{minLength}} حرف داشته باشد.
    </span>
  </div>
</template>


<script>
  export default {
    name: 'validation-messages',
    props: {
      caption: String,
      validation: Object
    },
    computed: {
      invalid() {
        return this.validation && this.validate.$invalid && this.validate.$dirty;
      },
      minLength(){
        return this.validation.$params.minLength && this.validation
      }
    }
  }
</script>

<style>

</style>
