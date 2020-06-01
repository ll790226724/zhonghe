<template>
  <div class="talents_competitiveness">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '833px'}">
      省域人才综合竞争力
    </div>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/visualMap'
import china from '../../public/static/china.json'

import BuiltInMixin from '../mixins/built_in'

Echarts.registerMap('china', china);

export const talents_competitiveness = {
  mixins: [BuiltInMixin],

  components: {
  },

  data () {
    return {
      craneStates: {
      },
    }
  },
}
export default talents_competitiveness
</script>
