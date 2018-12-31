<template xmlns:mail-to="http://www.w3.org/1999/xhtml">
  <div class="container">
    <section class="main">
      <div class="home-wrapper">
        <h3>Being an artist</h3>
        <h1>Art Studio from Asia passionated in creativity since
          2018</h1>
        <a href="#about" class="wow fadeInUp smoothScroll arrow-btn"><i
          class="fa fa-angle-double-down"></i></a>
      </div>
    </section>
    <div class="about">
      <div class="row">
        <div class="col-md-4 col-sm-8">
          <img src="../assets/images/contacts.jpeg">
          <div class="wow fadeInUp" data-wow-delay="0.4s">
            <h4>Interested to Work?</h4>
            <p>Sed varius augue nec pharetra scelerisque. Maecenas sapien ex, rutrum sit amet dapibus eu,
              tincidunt vitae nulla.</p>
            <a  >hello@company.com</a>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="about-thumb">
            <div class="wow fadeInUp section-title" data-wow-delay="0.6s">
              <h3>MB Stamata - teikiamos paslaugos</h3>

            </div>
            <div class="wow fadeInUp" data-wow-delay="0.8s">
              <ul>
                <li>Kadastriniai matavimai – inventorizacija nekilnojamojo turto teisinei registracijai:
                  <ul>
                    <li>Įvairios paskirties pastatams, kiemo inžineriniams statiniams.</li>
                    <li>Susisiekimo komunikacijoms keliams, aikštelėms, geležinkeliams, inžineriniams
                      tinklams ir trasoms.
                    </li>
                    <li>Statinio padalijimas, amalgamacija.</li>
                    <li>Patalpų naudojimosi tvarkos projektai.</li>
                  </ul>
                </li>
                <li>Statybų užbaigimo deklaracijos dokumentai.</li>
                <li>Silpnųjų srovių projektai šioms dalims:
                  <ul>
                    <li>Elektros įvadai.</li>
                    <li>Gaisro signalizavimo sistemos.</li>
                    <li>Apsaugos ir signalizacijos nuo įsilaužimo sistemos.</li>
                    <li>Vaizdo stebėjimo sistemos.</li>
                    <li>Įeigos kontrolės ir perimetro apsaugos sistemos.</li>
                    <li>Ryšių (telekomunikacijų) tinklai.</li>
                  </ul>
                </li>
                <li><strong>Kadastriniai matavimai atliekami Vilniuje, Kaune, Alytuje, Marijampolėje ir
                  visoje Lietuvoje.</strong></li>

                <li>Dirbame su individualiais užsakovais ir įmonėmis.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "Pagrindinis"
    }
</script>

<style scoped lang="scss">
    .main{
        height: 75vh;
        background-image: url("../assets/images/bg2.jpg");
        display: flex;
        align-items: center;
        justify-content: center;
        background-position: center;
        background-size: cover;
        .home-wrapper {
          background: rgba(250,250,250,0.8);
          padding: 32px 12px;
          border-radius: 5px;
          text-align: center;
          width: 70%;
        }
      }
  .about{
    padding-top: 100px;
    img{
      width: 100%;
    }
    .col-md-4{
      a{
        background: #e8e8e8;
        border-radius: 8px;
        color: #000000;
        padding: 6px 12px;
        display: inline-block;
        margin-bottom: 40px;
        &:hover{
          background: #000000;
          color: #ffffff;
        }
      }
    }
  }

</style>
