<template>
  <div class="container">
    <header>
      <ul>
        <li v-for="item in menu" >
          <a v-html="item.menuText" v-scroll-to="'#' + item.scroll" ></a>
        </li>
      </ul>
      <select id="language" v-model="currentLocale" @change="eachLocale">
        <option v-for="locale in locales" :bind="currentLocale" :value="locale.id">
        {{locale.id}}
        </option>
      </select>


    </header>
    <section class="main">
      <div class="home-wrapper">
        <h2>MB Stamata</h2>
        <h1>Art Studio from Asia passionated in creativity since
        2018</h1>
        <a href="#about" class=""><i
        class="fa fa-angle-double-down"></i></a>


      </div>
    </section>
    <section v-for="item in apie" class="about">
      <div class="row"  :id="item.id">
        <div class="col-md-4 col-sm-8">
          <img src="../assets/images/contacts.jpeg">
            <h4>Sumunmis galite susisiekti tel.: +370 601 52996</h4>
            <p>elektroniniu paštu</p>
            <a>info@stamata.lt</a>
            <p>arba užpildykite žemiau esančia forma ir mes su jumis susisieksim</p>

        </div>
        <div class="col-md-8 col-sm-12">

          <div class="about-thumb">
            <h3 v-html="item.name"></h3>
            <ul>
              <li v-for="item1 in item.text"><p v-html="item1"></p></li>
            </ul>
            <p v-if="item.text1" v-for="item2 in item.text1" v-html="item2"></p>
          </div>
        </div>
      </div>
    </section>
    <section v-for="item in paslaugos" class="about" >
      <div class="row" :id="item.id">
        <div class="col-md-4 col-sm-8">
          <img src="../assets/images/contacts.jpeg">
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="about-thumb">
            <h3 v-html="item.name"></h3>
            <ul>
              <li v-for="item1 in item.text"><p v-html="item1"></p></li>
            </ul>
            <p v-if="item.text1" v-for="item2 in item.text1" v-html="item2"></p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
        <div class="row">

          <div class="col-md-12 col-sm-12">
            <!-- SECTION TITLE -->
            <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
              <h2>Susisiekite su mumus</h2>
             <p>STAMATA, MB</p>
              <p>Vadovas: Vladas Stabingis</p>
              <p>Įmonės kodas: 304690726</p>
              <p>Tel.: +370-601-52996</p>
              <p>El. p.: info@statmatavimai.lt</p>
              <p>Susisiekite su mumis ir sužinokite Jus dominančių paslaugų kainą ar kitą informaciją.</p>
            </div>
          </div>

          <div class="col-md-12 col-sm-12">
            <!-- CONTACT FORM HERE -->
              <form action="#" method="post" id="contact-form">
                  <input type="text" class="form-control" name="name" placeholder="Vardas">
                  <input type="email" class="form-control" name="email" placeholder="E-paštas">
                  <textarea class="form-control" rows="5" name="message" placeholder="Žinutė"></textarea>
                  <button id="submit" type="submit" class="form-control button" value="send-mail" name="submit">
                    Siųsti
                  </button>
              </form>
          </div>

        </div>
    </section>
  </div>


</template>

<script>

  import * as data_lt from '../../data/data_lt'
  import * as data_ru from '../../data/data_ru'

  export default {
    name: "Pagrindinis",
    data() {
      return {
        currentLocale: 'lt',
        locales: [{id: 'lt', img: require("../assets/images/flag-lt.png") }, {id: 'ru', img: require("../assets/images/flag-ru.png")}],
        menu: "",
        paslaugos: "",
        apie: ""
      }
    },
    mounted() {
      this.eachLocale();
    },
    methods: {
      eachLocale() {
        if (this.currentLocale === 'lt') {
          this.menu = data_lt.menu;
          this.paslaugos = data_lt.paslaugos;
          this.apie = data_lt.apie;
        } else {
          this.menu = data_ru.menu;
          this.paslaugos = data_ru.paslaugos;
          this.apie = data_ru.apie
        }

      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    position: relative;
    ul {
      height: 60px;
      margin: 0;
      padding-left: 0;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        list-style: none;
        a {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    select{
      position: absolute;
      top: 20px;
      right: 0;
    }
    select#language option[value="lt"]{
      background-image: url("../assets/images/flag-lt.png");
      background-size: cover;
    }
    select#language option[value="ru"]{
      background-image: url("../assets/images/flag-ru.png");
      background-size: cover;
    }
  }

  .main {
    height: 75vh;
    background-image: url("../assets/images/bg2.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    .home-wrapper {
      background: rgba(250, 250, 250, 0.8);
      padding: 32px 12px;
      border-radius: 5px;
      text-align: center;
      width: 70%;
    }
  }

  .about {
    padding-top: 100px;
    img {
      width: 100%;
    }
    .col-md-4 {
      a {
        background: #e8e8e8;
        border-radius: 8px;
        color: #000000;
        padding: 6px 12px;
        display: inline-block;
        &:hover {
          background: #000000;
          color: #ffffff;
        }
      }
    }
    ul{
      padding-left: 0;
      li{
        list-style: none;
      }
    }
  }
  .form-control{
    width: 100%;
    padding-left: 20px;
    &.button{
      width: 300px;
    }
  }
  #contact .form-control {
    border: none;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 5px;
    box-shadow: none;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    -webkit-transition: all ease-in-out 0.4s;
    transition: all ease-in-out 0.4s;
  }

  #contact input {
    height: 55px;
  }

  #contact button#submit {
    background: #d7b065;
    border: none;
    border-radius: 40px;
    color: #ffffff;
    font-weight: bold;
    height: 55px;
    line-height: 55px;
    padding: 0;
    margin-top: 24px;
  }

  #contact button#submit:hover {
    background: #3d3d3f;
    color: #ffffff;
  }

</style>
