<template>
  <header>
    <div class="container">
      <ul>
        <li><a>﻿Apie mus</a></li>
        <li><a>Inventorizacija - kadastriniai matavimai</a></li>
        <li><a>Statybų deklaracijos</a></li>
        <li><a>Silpnųjų srovių projektavimas</a></li>
        <li><a>Susisiekti</a></li>
      </ul>
    </div>

  </header>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">

  header{
    ul{
      height: 60px;
      margin: 0;
      padding-left: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        list-style: none;
        a{
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }

</style>
