<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader-container {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
  --d: 30px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  color: #25b09b;
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: l27 1s infinite steps(8);
}
@keyframes l27 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
