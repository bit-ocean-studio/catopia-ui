<script setup lang="ts"></script>

<script></script>

<template>
  <button
    style="background-color: transparent; border-radius: 4px; border: none"
    class="btn"
  >
    button
  </button>
</template>

<style scoped>
.btn {
  text-align: center;
  color: #fff;
  font-size: 25px;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  border-radius: 60px;
}

.btn:hover {
  animation: animate 8s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

.btn::before {
  content: '';
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 100%;
  border-radius: 40px;
  opacity: 0;
  transition: 0.5s;
}

.btn:hover::before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
</style>
