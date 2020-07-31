<template>
  <div class="high_talents">
    <img ref="background" src="/hxrc/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/hxrc/images/Title-Bg.png" />
    <div @click="()=>[openNavigator()]" :style="{cursor: 'pointer', width: '454px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', lineHeight: 1, position: 'absolute', top: '38px', left: '733px'}">
      高端人才专题
    </div>
    <div ref="talent-stock" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '230px', left: '118px'}">
      人才存量
    </div>
    <div ref="apply-route" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '230px', left: '596px'}">
      申报途径
    </div>
    <div ref="talent-type" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '230px', left: '1046px'}">
      人才认定分类
    </div>
    <div ref="talent-past" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '578px', left: '596px'}">
      人才原来状况
    </div>
    <div ref="talent-now" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '578px', left: '1046px'}">
      人才现在情况
    </div>
    <div ref="talent-abroad" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '578px', left: '1496px'}">
      人才境内外分类
    </div>
    <div ref="talent-stock-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '232px', left: '81px'}">
      >>
    </div>
    <div ref="apply-route-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '232px', left: '559px'}">
      >>
    </div>
    <div ref="talent-type-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '232px', left: '1009px'}">
      >>
    </div>
    <div ref="talent-past-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '580px', left: '559px'}">
      >>
    </div>
    <div ref="talent-now-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '580px', left: '1009px'}">
      >>
    </div>
    <div ref="talent-abroad-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '580px', left: '1459px'}">
      >>
    </div>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'

export const high_talents = {
  mixins: [BuiltInMixin],

  components: {
  },

  data () {
    return {
      craneStates: {
        selectOptions: [],
        department: {},
      },
    }
  },
}
export default high_talents
</script>