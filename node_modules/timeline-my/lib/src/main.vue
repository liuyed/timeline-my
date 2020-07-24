<script>
import '../styles/timeline.less'

export default {
  name: "myTimeline",
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    alignTop: Boolean,
    dense: Boolean
  },
  provide() {
    return {
      timeline: this
    };
  },
  computed: {
    classes() {
      return {
        "my-timeline--align-top": this.alignTop,
        "my-timeline--dense": this.dense,
        "my-timeline--reverse": this.reverse
      };
    }
  },

  render(h) {
    const reverse = this.reverse;
    const classes = {
      ...this.classes
    };
    let slots = this.$slots.default || [];
    if (reverse) {
      slots = slots.reverse();
    }
    return h(
      "div",
      {
        staticClass: "my-timeline",
        class: classes
      },
      slots
    );
  }
};
</script>
<style lang="sass">
</style>