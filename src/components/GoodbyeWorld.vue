<template>
  <div>
    <div class="uk-container">
      <img uk-toggle="target:#modal" src="../assets/logo.png" alt="">
      <div id="modal" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <p>hello</p>
        </div>
      </div>

      <div uk-grid class="uk-child-width-1-1@s uk-flex-right">
        <div class="uk-text-right ">
          <label class="uk-padding-small">choose one of the following choices </label>
        </div>
        <div>
          <div uk-grid class="uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s">
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <label> <input class="uk-radio" type="radio" name="radio1" checked>how are you</label>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <label> <input class="uk-radio" type="radio" name="radio1" checked>how are you</label>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <label> <input class="uk-radio" type="radio" name="radio1" checked>how are you</label>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <label> <input class="uk-radio" type="radio" name="radio1" checked>how are you</label>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <label> <input class="uk-radio" type="radio" name="radio1" checked>how are you</label>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <label> <input class="uk-radio" type="radio" name="radio1" checked>how are you</label>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <label> <input class="uk-radio" type="radio" name="radio1" checked>how are you</label>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <label> <input class="uk-radio" type="radio" name="radio1" checked>how are you</label>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div class="uk-flex uk-flex-between">
            <div>
              <button class="uk-button uk-button-primary"> hello</button>
            </div>
            <div>
              <button class="uk-button uk-button-danger"> Hi</button>
            </div>
          </div>
        </div>
      </div>

      <hr class="uk-divider">
      <form uk-grid class="uk-grid-small uk-child-width-1-1@s">
        <div>
          <div uk-grid class="uk-child-width-1-2@s">
            <div class="uk-text-right">

              <label>
                نوع مراسم خود را انتخاب کنید
                <select name="select" class="uk-select">
                  <option value=""> option 1</option>
                  <option value=""> option 2</option>
                </select>

              </label>
            </div>
            <div class="uk-text-right">

              <label>
                نوع مراسم خود را انتخاب کنید
                <select name="select" class="uk-select">
                  <option value=""> option 1</option>
                  <option value=""> option 2</option>
                </select>

              </label>
            </div>
          </div>
        </div>
        <div>
          <div uk-grid class="uk-child-width-1-2@s">
            <div>
              <label> choose the gender</label>
            </div>
            <div>
              <span uk-icon="icon:user"></span>
              <span uk-icon="icon:users"></span>
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <input type="text">

            <date-picker v-model="date"></date-picker>
          </div>
        </div>
      </form>

    </div>

    <Good :id="image.id"></Good>

  </div>
</template>


<script>
  import Good from './GetTheCardNumber'

  export default {

    components: {
      Good


    },
    data() {
      return {
        date: ''
      }
    }
  }

</script>


<style>

</style>
