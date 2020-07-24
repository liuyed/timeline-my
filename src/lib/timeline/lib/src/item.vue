<script>
import "../styles/timeline.less";

function isCssColor (color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/)
}

export default {
  name: "myTimelineItem",
  inject: ["timeline"],
  props: {
    color: {
      type: String,
      default: "my__primary"
    },
    fillDot: Boolean,
    hideDot: Boolean,
    icon: String,
    iconColor: String,
    large: Boolean,
    left: Boolean,
    right: Boolean,
    small: Boolean
  },
  computed: {
    hasIcon() {
      return !!this.icon || !!this.$slots.icon;
    }
  },
  methods: {
    genBody() {
      return this.$createElement(
        "div",
        {
          staticClass: "my-timeline-item__body"
        },
        this.$slots.default
      );
    },
    genIcon () {
      if (this.$slots.icon) {
        return this.$slots.icon
      }

      return this.$createElement(VIcon, {
        props: {
          color: this.iconColor,
          dark: !this.theme.isDark,
          small: this.small,
        },
      }, this.icon)
    },
    setBackgroundColor (color, data ={}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        // istanbul ignore next 
        return data
      }
      if (typeof data.class === 'string') {
        // istanbul ignore next
        // istanbul ignore next
        return data
      }
      if (isCssColor(color)) {
        data.style = {
          ...data.style,
          'background-color': `${color}`,
          'border-color': `${color}`,
        }
      } else if (color) {
        data.class = {
          ...data.class,
          [color]: true,
        }
      }

      return data
    },
    genInnerDot () {
      const data = this.setBackgroundColor(this.color)

      return this.$createElement('div', {
        staticClass: 'my-timeline-item__inner-dot',
        ...data,
      }, [this.hasIcon && this.genIcon()])
    },
    genDot () {
      return this.$createElement('div', {
        staticClass: 'my-timeline-item__dot',
        class: {
          'my-timeline-item__dot--small': this.small,
          'my-timeline-item__dot--large': this.large,
        },
      }, [this.genInnerDot()])
    },
    genDivider () {
      const children = []

      if (!this.hideDot) children.push(this.genDot())

      return this.$createElement('div', {
        staticClass: 'my-timeline-item__divider',
      }, children)
    },
    genOpposite () {
      return this.$createElement('div', {
        staticClass: 'my-timeline-item__opposite',
      }, this.$slots.opposite)
    },
  },
  render (h) {
    const children = [
      this.genBody(),
      this.genDivider(),
    ]

    if (this.$slots.opposite) children.push(this.genOpposite())

    return h('div', {
      staticClass: 'my-timeline-item',
      class: {
        'my-timeline-item--fill-dot': this.fillDot,
        'my-timeline-item--before': this.timeline.reverse ? this.right : this.left,
        'my-timeline-item--after': this.timeline.reverse ? this.left : this.right,
      },
    }, children)
  },
};
</script>