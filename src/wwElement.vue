<template>
  <div class="my-element">
    <p :style="textStyle">I am a custom element !</p>
  </div>

  <div class="flex space-x-4">


<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>

</div>
</template>



<script>
import "./output.css";
export default {
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    textStyle() {
      return {
        color: this.content.textColor,
      };
    },
  },
};
</script>



<style lang="scss" scoped>
.my-element {
  p {
    font-size: 18px;
  }
}
</style>
