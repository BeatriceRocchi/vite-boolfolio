<script>
export default {};
</script>

<template>
  <header>
    <div class="container">
      <div class="logo-box">
        <img src="../assets/img/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li class="underline-effect thin-effect">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="underline-effect thin-effect">
            <router-link :to="{ name: 'projects' }">Projects</router-link>
          </li>
          <li class="underline-effect thin-effect">
            <router-link :to="{ name: 'resume' }">Resume</router-link>
          </li>
          <li class="underline-effect thin-effect">
            <router-link :to="{ name: 'contacts' }">Contacts</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables.scss";

header {
  height: 100px;
  color: white;
  background-color: $color-primary;
  position: fixed;
  width: 100%;
  z-index: 999;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .logo-box {
      height: 100%;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    nav {
      ul {
        display: flex;
        li {
          margin-left: 10px;
          font-size: 1.2rem;
          a {
            color: rgba(white, 0.7);
            text-transform: uppercase;
            text-decoration: none;
            padding: 10px;
            border-radius: 8px;

            &.active {
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
