import NavigationButton from '@/components/navigation-button.vue';
import Chart from '../components/chart/chart.vue'
import ChartPanel from '../components/chart-panel/chart-panel.vue'
import SignBoard from '../components/sign-board/sign-board.vue'
import Filler from '../components/filler.vue'
import Search from '../components/search/search.vue'
import SearchResult from '../components/search-result/search-result.vue'
import PDFViewer from '../components/pdf-viewer'
import { Calendar } from 'quasar-calendar'
import Treemap from '../components/treemap/treemap.vue'
import Geomap from '../components/geomap/geomap.vue'
import DrilldownIcon from '../components/drilldown-icon.vue'
import './nl2br'

export default ({ Vue }) => {
  Vue.component('navigation-button', NavigationButton)
  Vue.component('chart', Chart)
  Vue.component('chart-panel', ChartPanel)
  Vue.component('sign-board', SignBoard)
  Vue.component('filler', Filler)
  Vue.component('search', Search)
  Vue.component('search-result', SearchResult)
  Vue.component('calendar', Calendar)
  Vue.component('pdf-viewer', PDFViewer)
  Vue.component('treemap', Treemap)
  Vue.component('geomap', Geomap)
  Vue.component('drilldown-icon', DrilldownIcon)
}
