import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QForm,
  QInput,
  Notify,
  QTable,
  QTh,
  QTr,
  QTd,
  QSelect,
  QFooter,
  QSpace,
  QMarkupTable,
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QForm,
    QInput,
    QTable,
    QTh,
    QTr,
    QTd,
    QSelect,
    QFooter,
    QSpace,
    QMarkupTable,

  },
  directives: {
  },
  plugins: {
    Notify
  }
 })