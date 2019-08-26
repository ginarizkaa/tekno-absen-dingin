<template>
  <q-btn
    :glossy="negative === 'true'"
    :color="color"
    :id="uid()"
    :disabled="filler === 'true'"
    :style="{height: buttonHeight(), 'background-color': filler === 'true' ? 'transparent !important' : ''}"
    @click="navigate()"
    :class="className"
  >
    <img
      :class="{ 'ipad': isIpad() }"
      v-if="imageUrl !== ''"
      :style="{height: imageHeight(), 'display': filler === 'true' ? 'none': ''}"
      :src="imageUrl"
      class="responsive"
    >
    <div
      :class="{ 'self-end': !noImage() && !isIpad(), 'self-end-ipad': !noImage() && isIpad() }"
      class="col-12 button-text"
      :style="{fontSize: getFontSize(), 'display': filler === 'true' ? 'none': ''}"
    >{{label}}</div>
  </q-btn>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'navigation-button',
  computed: {
    color: {
      get: function () {
        return this.$props.negative === 'true' ? 'negative' : ''
      }
    },
    className: {
      get: function () {
        return (
          'navigation-button col-' +
          this.colWidth +
          (this.noImage() ? ' no-image' : '') +
          ' ' + this.$props.additionalClass
        )
      }
    }
  },
  mounted () {
    this.setSquare()
    this.$watch('colWidth', function () {
      setTimeout(() => {
        this.setSquare()
      }, 175)
    })
  },
  updated () {},
  props: {
    additionalClass: '',
    label: '',
    page: '',
    package: '',
    packageUrl: '',
    colWidth: {
      type: Number,
      default: 11
    },
    height: {
      type: Number,
      default: 200
    },
    imageUrl: {
      type: String,
      default: 'statics/images/pngs/line_chart.png'
    },
    filler: {
      type: String,
      default: 'false'
    },
    square: {
      type: String,
      default: 'true'
    },
    negative: {
      type: String,
      default: 'false'
    },
    param: {}
  },
  data () {
    return {
      realHeight: this.height
    }
  },
  methods: {
    noImage () {
      return this.imageUrl === ''
    },
    buttonHeight () {
      return this.realHeight + 'px'
    },
    navigate () {
      let vm = this
      if (this.page && this.page !== '') {
        setTimeout(function () {
          vm.$router.push({ path: vm.page, params: { param: vm.param } })
        }, 300)
      }
      if (this.package && this.package !== '') {
        vm.openAppPackage(this.package, this.packageUrl)
      }
    },
    imageHeight () {
      return this.noImage() ? this.realHeight : 0.3 * this.realHeight + 'px'
    },
    getFontSize () {
      return this.noImage() ? '1.3em' : this.realHeight / 200 + 0.3 + 'em'
    },
    setSquare () {
      if (this.square === 'true') {
        let button = this.$utils.findDOM('#' + this.uid())
        let width = button[0].clientWidth
        this.$set(this, 'realHeight', width)
      }
    }
  }
}
</script>

<style>

.navigation-button {
  margin-bottom: 5%;
  margin: 2%;
}

button.navigation-button > div.q-btn-inner {
  margin-bottom: 15%;
}

.q-btn.navigation-button {
  text-transform: none;
  background-color: #2e2c3f !important;
}

.q-btn.navigation-button.bg-negative.glossy {
  background: var(--q-color-negative) !important;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.12) 51%,
    rgba(0, 0, 0, 0.04)
  ) !important;
}

.button-text {
  font-weight: 300;
}

button.no-image > div.q-btn-inner {
  margin: auto !important;
}

div.col-12.button-text.self-end {
  margin-top: 10px;
  position: absolute;
  bottom: 10%;
  padding-left: 5px;
  padding-right: 5px;
}

div.col-12.button-text.self-end-ipad {
  vertical-align: bottom;
  margin-top: 7%;
  bottom: 10%;
  padding-left: 5px;
  padding-right: 5px;
}

img.ipad {
  margin-top: 7%;
}
</style>
