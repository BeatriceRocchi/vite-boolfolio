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
    <div class="container">
      <p class="section-intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis
        vel officiis maiores, enim quidem sapiente rerum rem, dolores earum
        expedita debitis recusandae. Eius labore molestiae tempora atque aliquam
        provident.
      </p>

      <div class="card">
        <div class="row row-cols-2 text-center">
          <!-- Frontend -->
          <div class="col">
            <div class="icon-box">
              <i class="fa-regular fa-images"></i>
            </div>

            <h4>Frontend Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              iste.
            </p>

            <h5>Languages</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>JavaScript</li>
            </ul>

            <h5>Tools</h5>
            <ul>
              <li>Bootstrap</li>
              <li>Vue JS</li>
            </ul>
          </div>
          <!-- /Frontend -->

          <!-- Backend -->
          <div class="col">
            <div class="icon-box">
              <i class="fa-solid fa-shield-halved"></i>
            </div>

            <h4>Backend Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              iste.
            </p>

            <h5>Languages</h5>
            <ul>
              <li>PHP</li>
            </ul>

            <h5>Tools</h5>
            <ul>
              <li>Laravel</li>
            </ul>
          </div>
          <!-- /Backend -->
        </div>
      </div>
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
  width: 70%;

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
    margin-bottom: 40px;
  }

  .card {
    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;

      .icon-box {
        height: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $color-secondary;
        border-radius: 50%;
        i {
          font-size: 1.8rem;
          color: white;
        }
      }

      h4,
      h5 {
        margin: 20px 0 10px;
      }
    }
  }
}
</style>
