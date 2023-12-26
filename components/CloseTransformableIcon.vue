<template>
  <button>
    <span class="icon">
      <span class="lines" />
    </span>
  </button>
</template>

<style scoped>
button {
  position: relative;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}

.icon {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
}

.lines,
.lines:before,
.lines:after {
  position: absolute;
  display: block;
  width: 100%;
  left: 0;
  background: darkslategray;
  transition: 0.3s;
}

.lines {
  height: 2px;
  margin-top: -2px;
  top: 50%;
  border-radius: 999px;
}

.lines:before,
.lines:after {
  content: "";
  height: 100%;
  border-radius: 999px;

  /* Try different values here: .25rem, .5rem, .2rem, 5rem, 10rem... */
  transform-origin: 5rem center;
}

.lines:before {
  top: 8px;
}

.lines:after {
  top: -8px;
}

/* CLOSE ICON */

.close {
  transform: scale3d(0.8, 0.8, 0.8);
}

.close .lines {
  background: transparent;
}

.close .lines:before,
.close .lines:after {
  top: 0;
  transform-origin: 50% 50%;
}

.close .lines:before {
  transform: rotate3d(0, 0, 1, 45deg);
}

.close .lines:after {
  transform: rotate3d(0, 0, 1, -45deg);
}
</style>
