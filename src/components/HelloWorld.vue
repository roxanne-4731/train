<template>
  <div>
    <!--<nav class="uk-navbar uk-navbar-container uk-margin">-->
    <!--<div class="uk-navbar-left">-->
    <!--<ul class="uk-navbar-nav">-->
    <!--<li><a href="">Contact</a></li>-->
    <!--<li class="uk-active"><a href="">Home </a></li>-->
    <!--<li class="uk-parent"><a href="">List</a></li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--<div class="uk-navbar-right">-->
    <!--<ul class="uk-navbar-nav">-->
    <!--<li>-->
    <!--<a href="">Logo</a>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</nav>-->


    <div class="uk-section-primary uk-preserve-color">

      <div
        uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 0">

        <nav class="uk-navbar-container uk-visible@m">
          <div class="uk-container uk-container-expand">
            <div uk-navbar>

              <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li>
                  <a href="#">Parent</a>
                  <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li class="uk-active"><a href="#">Active</a></li>
                      <li><a href="#">Item</a></li>
                      <li><a href="#">Item</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#">Item</a></li>
              </ul>

            </div>
          </div>
        </nav>
        <div class="uk-offcanvas-content uk-hidden@m">
          <nav class="uk-navbar uk-navbar-container" style="position: relative; z-index: 980;">
            <div class="uk-navbar-left">
              <a class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="target:#offcanvas-nav-primary" href="#"></a>
            </div>
          </nav>
          <div id="offcanvas-nav-primary" uk-offcanvas="overlay:true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
              salam
            </div>
          </div>

        </div>


      </div>

    </div>


    <div class="uk-container">
      <!--&lt;!&ndash;That's it for the customer &ndash;&gt;-->
      <!--<div class="uk-height-medium uk-background-muted">-->
      <!--<div class="card uk-card uk-card-default uk-card-body " uk-sticky="bottom:true" style="z-index: 1"> stick-->
      <!--please-->
      <!--</div>-->
      <!--</div>-->


      <div class="uk-container uk-margin">
        <div class="uk-padding-small" uk-sticky=" bottom:true; offset:75"
             style="z-index:10; background-color: lawngreen">
          <div uk-grid class="uk-margin uk-child-width-1-4@l uk-child-width-1-4@m uk-child-width-1-4@s"
          >
            <div>
              <div class="uk-flex uk-flex-center uk-flex-middle">
                <div>
                  <div class="number uk-text-center" style="width: 25px; line-height: 25px">
                    <span style="font-size: 20px">1</span>
                  </div>
                </div>
                <div>
                  <span class="uk-margin-left">ثبت سفارش</span>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-flex uk-flex-center uk-flex-middle">
                <div>
                  <div class="number uk-text-center" style="width: 25px; line-height: 25px">
                    <span style="font-size: 20px">1</span>
                  </div>
                </div>
                <div>
                  <span class="uk-margin-left">ثبت سفارش</span>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-flex uk-flex-center uk-flex-middle">
                <div>
                  <div class="number uk-text-center" style="width: 25px; line-height: 25px">
                    <span style="font-size: 20px">1</span>
                  </div>
                </div>
                <div>
                  <span class="uk-margin-left">ثبت سفارش</span>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-flex uk-flex-center uk-flex-middle">
                <div>
                  <div class="number uk-text-center" style="width: 25px; line-height: 25px">
                    <span style="font-size: 20px">1</span>
                  </div>
                </div>
                <div>
                  <span class="uk-margin-left">ثبت سفارش</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div uk-grid class="uk-padding-small uk-child-width-1-1">
          <div>
            <div>
              <input type="text" class="uk-input" style="width: 50% !important;">
            </div>
          </div>
          <div>
            <div uk-grid class=" uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l">
              <div>

                <div class=" uk-card uk-card-default uk-card-body ">
                  <div class="uk-inline">
                    <img src="../assets/logo.png" width="" height="" alt="" uk-image>
                    <div uk-dropdown="mode:click">
                    </div>
                  </div>

                </div>
              </div>
              <div>

                <div class="uk-card uk-card-default uk-card-body">

                  <img src="../assets/logo.png" width="" height="" alt="" uk-image>
                </div>
              </div>
              <div>
                <div class="uk-inline">
                  <div class="uk-card uk-card-default uk-card-body">
                    <img src="../assets/logo.png" width="" height="" alt="" uk-image>
                  </div>
                  <div
                    uk-dropdown="mode:click; pos:bottom-center; offset:-100; animation:uk-animation-slide-bottom; duration:1000">
                    <div uk-grid class="uk-child-width-1-1">
                      <div>
                        <div class="card  uk-card uk-card-default uk-card-body"></div>
                      </div>
                      <div>
                        <div class="card uk-card uk-card-default uk-card-body"></div>
                      </div>
                      <did>
                        <div class="card uk-card uk-card-default uk-card-body"></div>
                      </did>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <div class="uk-card uk-card-small uk-card-default uk-card-body ">
                  <img src="../assets/logo.png" width="" height="" alt="" uk-image>
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">
                  <img src="../assets/logo.png" width="" height="" alt="" uk-image>
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">
                  <img src="../assets/logo.png" width="" height="" alt="" uk-image>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div id="container" class="uk-container">


        <div uk-grid class="uk-child-width-1-4@s uk-child-width-1-2@m uk-child-width-1-1@l">
          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>
        </div>


        <div uk-grid class=" uk-child-width-1-4@s">

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>
        </div>


        <div uk-grid class="uk-grid-small uk-child-width-1-4@s">

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>
        </div>


        <div uk-grid class="uk-grid-medium uk-child-width-1-4@s">

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">hello</div>
          </div>
        </div>


      </div>
      <!--<div>-->
      <!--<div class="card uk-margin uk-card uk-card-primary uk-card-body" uk-sticky style="z-index: 0"> hello roksna</div>-->
      <!--</div>-->

      <!--<div>-->
      <!--<div class="card uk-margin uk-card uk-card-primary uk-card-body" uk-sticky="offset:100" style="z-index: 0"> hello roksna</div>-->
      <!--</div>-->
      <!--<div>-->
      <!--<div class="card uk-margin uk-card uk-card-primary uk-card-body" uk-sticky="top : 100" > hello roksna</div>-->
      <!--</div>-->

      <div uk-grid class="uk-margin-bottom uk-grid-divider uk-grid-large uk-child-width-1-4@s">

        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>
      </div>

      <div uk-grid class=" uk-grid-collapse uk-child-width-1-4@s" uk-grid="parallax:150">

        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>
      </div>

      <div uk-grid class="uk-child-width-expand@s">
        <div>
          <div uk-grid class="uk-child-width-expand@s">
            <div>
              <div class="uk-card uk-card-default uk-card-body">self</div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">self</div>
            </div>
          </div>
        </div>
        <div>
          <div uk-grid id="grid-1" class="uk-child-width-expand@s">
            <div>
              <div class="uk-card uk-card-default uk-card-body">self</div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">self</div>
            </div>
            <div>
              <div class="uk-card uk-card-default uk-card-body">self</div>
            </div>
          </div>
        </div>

      </div>

      <div uk-grid class="uk-flex-center@s uk-flex-right@m">

        <div>
          <div class="uk-card uk-card-default uk-card-body">self</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">self</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">self</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">self</div>
        </div>
      </div>
      <div uk-grid class="uk-child-width-expand@s">

        <div>
          <div class="uk-card uk-card-default uk-card-body">self</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">self</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">self</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body">self</div>
        </div>

      </div>


      <div uk-grid class="uk-child-width-expand@s">
        <div>
          <div class="uk-card uk-card-default uk-card-body"> hello</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body"> hello</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> hello</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> hello</div>
        </div>

      </div>
      <div class="uk-flex uk-flex-around">
        <div class="uk-margin-right">
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>
        <div class="uk-margin-right">
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>


      </div>

      <div class="uk-flex uk-flex-between">
        <div class="uk-margin-right">
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>
        <div class="uk-margin-right">
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body">hello</div>
        </div>
      </div>


      <div uk-grid class="uk-flex-center@s uk-flex-right@m uk-flex-between@l">
        <div>
          <div class="uk-card uk-card-default uk-card-body"> roxanne</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body"> roxanne</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body"> roxanne</div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body"> roxanne</div>
        </div>
      </div>

      <div uk-grid class="uk-flex-top">
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
      </div>

      <div uk-grid class="uk-flex-stretch">
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
      </div>

      <div uk-grid class="uk-flex-middle">
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
      </div>

      <div uk-grid class="uk-flex-bottom uk-margin">
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body"> GonijoAAA</div>
        </div>
      </div>

      <div class="uk-flex uk-flex-wrap uk-flex-wrap-top">

        <div class="uk-card uk-card-default uk-card-body"> GonijoAAA1</div>

        <div class="uk-card uk-card-default uk-card-body"> GonijoAAA2</div>

        <div class="uk-card uk-card-default uk-card-body"> GonijoAAA3</div>

        <div class="uk-card uk-card-default uk-card-body"> GonijoAAA4</div>

      </div>

      <div class="uk-flex uk-flex-auto">
        <div class="uk-card uk-card-default uk-card-body uk-flex-first uk-flex-last@s"> neko1</div>
        <div class="uk-card uk-card-default uk-card-body"> neko2</div>
        <div class="uk-card uk-card-default uk-card-body uk-flex-last uk-flex-frist@s"> neko3</div>

      </div>

      <div uk-grid class="uk-child-width-expand@s">
        <div>

          <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">flower</h3>
            <p>fie fnwekfnwne fn eoiioeofnoeijf fienfn oijoijoief </p>
          </div>

        </div>

        <div>

          <div class="uk-card uk-card-default uk-card-body uk-card-hover">
            <h3 class="uk-card-title">flower</h3>
            <p>fie fnwekfnwne fn eoiioeofnoeijf fienfn oijoijoief </p>
          </div>

        </div>

        <div>

          <div class="uk-card uk-card-default uk-card-body uk-card-hover">
            <div class="uk-card-header">
              <h3 class="uk-card-title">hello</h3>
            </div>
            <p>fie fnwekfnwne fn eoiioeofnoeijf fienfn oijoijoief </p>
          </div>
        </div>

        <div>
          <div class="uk-card uk-card-default uk-card-body uk-card-hover">
            <div class="uk-card-header">
              <h3 class="uk-card-title">hello</h3>
            </div>
            <div class="uk-card-body">
              <p>body is in here</p>
            </div>
            <div class="uk-card-footer">
              <h4>footer</h4>
            </div>

          </div>

        </div>
      </div>

      <div>
        <div class="uk-card uk-card-default uk-card-body" uk-sticky> hello roksna</div>
      </div>
    </div>
    <div class="uk-inline">
      <img src="../assets/logo.png" alt="">
      <div class="uk-overlay uk-overlay-default uk-position-bottom uk-dark">
        <p>hello roksana</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        show: true
      }
    },
    methods:{
      onClick(){
        this.show = !this.show
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .card {
    background-color: antiquewhite !important;
    border-radius: 10px;
  }

  .uk-card {
    background-color: lightblue;
  }

  .number {
    background-color: aquamarine;
    display: inline-block;
    border: 2px solid black;
    border-radius: 50%;
  }

  .number1 {
    font-size: 30px;
  }


</style>
