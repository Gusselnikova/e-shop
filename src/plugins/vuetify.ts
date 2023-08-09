import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1264,
    },
    mobileBreakpoint: 960,
    scrollBarWidth: 24,
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#0061D0',
      },
    },
  },
})