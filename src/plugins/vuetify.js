import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
import VuetifyConfirm from 'vuetify-confirm';

Vue.use(Vuetify);


const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: 'ff4800', // #ff4800
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
        },
      },
  },
  icons: {
    iconfont: 'mdi',
  }
});

Vue.use(VuetifyConfirm, {vuetify})

export default vuetify