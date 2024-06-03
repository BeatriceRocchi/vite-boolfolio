<script>
export default {};
</script>

<template>
  <header>
    <div class="container">
      <div>Logo</div>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>
            <router-link :to="{ name: 'projects' }">Projects</router-link>
          </li>
          <li><router-link :to="{ name: 'resume' }">Resume</router-link></li>
          <li>
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
  height: 80px;
  color: white;
  background-color: $color-primary;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    nav {
      ul {
        display: flex;
        li {
          margin-left: 40px;
          a {
            color: inherit;
            text-decoration: none;
            padding: 6px;
            border-radius: 8px;

            &.active {
              background-color: rgba(255, 255, 255, 0.3);
            }
          }
        }
      }
    }
  }
}
</style>
