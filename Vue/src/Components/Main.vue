<template>
    <div class="container">
        <header>
            <div class="menu-btn" @click="showMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <div class="logo">
                <img src="../../src/assets/images/logo.png"/>
            </div>
            <ul class="nav-menu">
                <li v-for="item in menu">
                    <a v-html="item.menuText" v-scroll-to="'#' + item.scroll"></a>
                </li>
            </ul>
            <div id="language" v-model="currentLocale" :bind="getDataByLocale" @click="toggleLang">
                <img v-for="locale in locales" :bind="currentLocale" class="lang-option" :src="locale.img"
                     :value="locale.id">
            </div>
        </header>
        <section class="main">
            <div class="home-wrapper">
                <h2 v-html="main.name_text"></h2>
                <h1 v-html="main.decription_text"></h1>
            </div>
        </section>
        <section v-for="item in about" class="about" :id="item.id">
            <div class="row">
                <div class="col-md-4 col-sm-8">
                    <img :src="contacts.img">
                    <h4 v-html="contacts.cont_head"></h4>
                    <a :href="contacts.phone_link" v-html="contacts.cont_phone"></a>
                    <p v-html="contacts.cont_email_text"></p>
                    <a class="mail-link" href="mailto:info@stamata.lt" v-html="contacts.cont_email"></a>
                    <p class="down" v-scroll-to="'#' + menu[4].scroll" v-html="contacts.cont_text"></p>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="about-thumb">
                        <h3 v-html="item.name"></h3>
                        <div class="content">
                            <ul>
                                <li v-for="item1 in item.text"><p v-html="item1"></p></li>
                            </ul>
                            <p v-if="item.text1" v-for="item2 in item.text1" v-html="item2"></p>
                        </div>
                        <a class="more" @click="toggleContent" v-html="item.button_text"></a>
                    </div>
                </div>
            </div>
        </section>
        <section v-for="item in paslaugos" class="about" :id="item.id">
            <div class="row">
                <div class="col-md-4 col-sm-8">
                    <img :src="item.img"/>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="about-thumb">
                        <h3 v-html="item.name"></h3>
                        <div class="content">
                            <ul>
                                <li v-for="item1 in item.text"><p v-html="item1"></p></li>
                            </ul>
                            <p v-if="item.text1" v-for="item2 in item.text1" v-html="item2"></p>
                        </div>
                        <a class="more" @click="toggleContent" v-html="item.button_text"></a>
                    </div>
                </div>
            </div>
        </section>
        <section id="Susisiekti">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                        <h2 v-html="contacts.contact_us"></h2>
                        <p v-for="item in contacts.company_details" v-html="item"></p>
                    </div>
                </div>

                <div class="col-md-12 col-sm-12">
                    <form @submit.prevent="submit" action="../../mailer.php" id="contact-form">
                        <input v-model="contacts_form.name" type="text" class="form-control" name="name" :placeholder="contacts.form_name">
                        <input v-model="contacts_form.email" type="email" class="form-control" name="email" :placeholder="contacts.form_email">
                        <textarea v-model="contacts_form.message" class="form-control" rows="5" name="message"
                                  :placeholder="contacts.form_message"></textarea>
                      <div class="g-recaptcha" data-sitekey="6Lck6ogUAAAAADBVI0S548zIhbC6g0VTmMMZigPH"></div>
                        <button id="submit" type="submit" class="form-control button" value="send-mail" name="submit"
                                v-html="contacts.button_text"></button>

                        <div class="responce" v-html="responseText"></div>
                        <p v-html="error"></p>
                    </form>
                </div>

            </div>
        </section>
      <footer>
        <div class="container">
          <a>stamata.lt
          </a>
        </div>
      </footer>
    </div>


</template>

<script>

    import * as data_lt from '../../data/data_lt'
    import * as data_ru from '../../data/data_ru'
    import axios from 'axios'

    export default {
        name: "Pagrindinis",
        data() {
            return {
                currentLocale: 'lt',
                locales: [
                    {id: 'lt', img: require("../assets/images/flag-lt.png")},
                    {id: 'ru', img: require("../assets/images/flag-ru.png")}
                ],
                menu: "",
                paslaugos: "",
                about: "",
                main: "",
                contacts_form: "",
                error: "",
                contacts: {},
                responseText: null,
            }
        },
        mounted() {
            this.getDataByLocale();
        },
        methods: {
            getDataByLocale() {
                if (this.currentLocale === 'lt') {
                    this.getLtData();

                } else {
                    this.getRuData();
                }
            },
            toggleLang() {
                let target = event.target;
                let lang = target.getAttribute('value');

                if (lang === 'ru') {
                    this.getRuData();
                } else {
                    this.getLtData();
                }
            },
            getLtData() {
                this.currentLocale = 'lt';
                this.menu = data_lt.menu;
                this.paslaugos = data_lt.paslaugos;
                this.about = data_lt.about;
                this.main = data_lt.main_section;
                this.contacts = data_lt.contacts;
            },
            getRuData() {
                this.currentLocale = 'ru';
                this.menu = data_ru.menu;
                this.paslaugos = data_ru.paslaugos;
                this.about = data_ru.about;
                this.main = data_ru.main_section;
                this.contacts = data_ru.contacts;
            },
            showMenu() {
                let menu = document.querySelector(".nav-menu");
                let btn = document.querySelector(".menu-btn");
                menu.classList.toggle("show");
                btn.classList.toggle("change");
            },
            toggleContent() {
                let target = event.target.previousElementSibling;
                target.classList.toggle("active");
            },
            submit() {
                let formData = new FormData;
                let values = Object.values(this.contacts);
                for (let key in values) {
                    formData.append(key, values[key]);
                }
                let capchaRes = grecaptcha.getResponse();
                if (capchaRes.length > 0) {
                    axios.post("../../mailer.php", {
                        data: {
                            'name': this.contacts.name,
                            'email': this.contacts.email,
                            'message':this.contacts.message,
                            'capcha':capchaRes
                        }
                    })
                        .then(res => {
                            this.responseText = res.data;

                        })
                        .catch(e => {
                            this.error = e.response.data;
                        })
                } else {
                    this.error = "Užpildykite formą"
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .down {
        display: block;
        text-decoration: underline;
        cursor: pointer;
    }
    header {
        position: fixed;
        top: 0;
        width: 1110px;
        background-color: #f4f4f4;
        z-index: 1;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            float: left;
        }
        ul {
            height: 60px;
            margin: 0;
            padding-left: 0;
            width: 84%;
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
        #language {
            width: 50px;
            display: flex;
            justify-content: space-between;
            height: 60px;
            align-items: center;
            .lang-option {
                cursor: pointer;
                height: 15px;
                width: 20px;
            }
        }
        .menu-btn {
            cursor: pointer;
            display: none;
            .bar1, .bar2, .bar3 {
                width: 26px;
                height: 3px;
                background-color: #000000;
                margin: 6px 0;
                transition: 0.4s;
            }
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
        margin-top: 60px;
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
            opacity: 0.8;
        }
        ul {
            padding-left: 0;
            li {
                list-style: none;
            }
        }
    }

    .form-control {
        width: 100%;
        padding-left: 20px;
        &.button {
            width: 300px;
        }
    }

    #Susisiekti .form-control {
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

    #Susisiekti input {
        height: 55px;
    }

    #Susisiekti button#submit {
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

    #Susisiekti button#submit:hover {
        background: #3d3d3f;
        color: #ffffff;
    }

    .more {
        display: none;
    }

    @media only screen and (max-width: 1200px) {
        header {
            width: 930px;
        }
    }

    @media only screen and (max-width: 992px) {
        header {
            width: 690px;
            .nav-menu {
                display: none;
                &.show {
                    display: block;
                    position: absolute;
                    background: #f4f4f4;
                    top: 59px;
                    height: 130px;
                    width: 100%;
                }
            }
            .menu-btn {
                display: inline-block;
            }
            .change .bar1 {
                -webkit-transform: rotate(-45deg) translate(-9px, 6px);
                transform: rotate(-45deg) translate(-8px, 5px);
            }

            .change .bar2 {
                opacity: 0;
            }

            .change .bar3 {
                -webkit-transform: rotate(45deg) translate(-8px, -8px);
                transform: rotate(45deg) translate(-7px, -5px);
            }
        }
        .about-thumb {
            .content {
                display: none;
                &.active {
                    display: block;
                }
            }
        }
        .more {
            display: inline-block;
            cursor: pointer;
            width: 120px;
            border: 1px solid $orange;
            border-radius: 15px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            background-color: $white;
        }
    }

    @media only screen and (max-width: 767px) {
        header {
            width: 510px;
        }
        .form-control {
            &.button {
                width: 100%;
            }
        }
        .main {
            .home-wrapper {
                width: 95%;
            }
        }
        .more{
            width: 100%;
        }
    }

    @media only screen and (max-width: 576px) {
        header {
            width: 95%;
        }
    }


</style>
