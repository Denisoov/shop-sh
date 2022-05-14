<script>
export default {
  props: {
    color: {
      type: String,
      default: () => "#595959",
    },
  },
};
</script>

<template>
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 5L20 15L10 25"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
