<template>
  <div class="my-element">
    <p :style="textStyle">I am a custom element !</p>
  </div>

  <div class="tw-flex tw-space-x-4">

<button type="button" class="tw-py-3 tw-px-4 tw-inline-flex tw-items-center tw-gap-x-2 tw-text-sm tw-font-medium tw-rounded-lg tw-border tw-border-transparent tw-bg-red-500 tw-text-white hover:tw-bg-red-600 focus:tw-outline-none focus:tw-bg-red-600 disabled:tw-opacity-50 disabled:tw-pointer-events-none">
  Button
</button>

</div>
</template>



<script>

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

<style lang="scss" scoped src="./output.css">
.my-element {
  p {
    font-size: 18px;
  }
}
</style>
