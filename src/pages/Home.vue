<script>
export default {
  name: "Home",
};
</script>

<template>
  <!-- Section about: brief description and profile picture -->
  <section id="section-about">
    <div class="container">
      <div class="text-box">
        <h1>Full Stack Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          laboriosam, veritatis, ab molestias mollitia explicabo, omnis
          cupiditate excepturi iusto dolor exercitationem. Laudantium,
          praesentium porro assumenda quasi quia architecto nesciunt aperiam
          ducimus, iure dolores ad ipsum reiciendis earum culpa animi quisquam
          blanditiis, ut dolor magni beatae quis! Fugit debitis sapiente
          adipisci voluptate odio quod pariatur nulla, consectetur neque. Quia
          veritatis nisi, temporibus accusantium nobis voluptatum minima illo
          magni totam, corrupti exercitationem quisquam, sequi saepe ab dolore.
          Qui minima itaque officiis eos?
        </p>
      </div>
      <div class="img-box">
        <img src="../assets/img/profile_pic.jpg" alt="Profile picture" />
      </div>
    </div>
  </section>
  <!-- / Section about -->

  <!-- Section technologies -->
  <section id="section-tech">
    <div class="container w-50">
      <p class="section-intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis
        vel officiis maiores, enim quidem sapiente rerum rem, dolores earum
        expedita debitis recusandae. Eius labore molestiae tempora atque aliquam
        provident.
      </p>
    </div>
  </section>
  <!-- / Section technologies -->
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";

#section-about .container {
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 30px;
  }

  .img-box {
    margin-left: 50px;
    height: 400px;
    aspect-ratio: 1;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: left;
    }
  }
}

#section-tech {
  padding: 40px 0;
  background-color: $color-primary-light;

  .section-intro {
    font-weight: 400;
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
