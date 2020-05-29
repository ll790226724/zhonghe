<template>
  <div class="key_talents">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '833px'}">
      重点人才专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '1471px'}" src="/static/images/Box-Bg.png" />
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '10px', left: '10px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '74px'}">
      高层次人才供需地图
    </div>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '88px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '117px', left: '119px'}" />
    <data-loader :style="{position: 'absolute', top: '94px', left: '145px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '人才数量统计', digital: 5200, suffix: '人'}" :options="{separator: ''}" :style="{width: '196px', height: '39px'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" />
    </data-loader>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '154px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '183px', left: '119px'}" />
    <data-loader :style="{position: 'absolute', top: '160px', left: '145px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '人才引进统计', digital: 67, suffix: '次'}" :options="{separator: ''}" :style="{width: '158px', height: '39px'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" />
    </data-loader>
    <div :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '49px', left: '1504px'}">
      >>
    </div>
    <div :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '46px', left: '1536px'}">
      区域紧缺人才地图
    </div>
    <div :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '128px', left: '1490px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '157px', left: '1588px'}" />
    <data-loader :style="{position: 'absolute', top: '134px', left: '1614px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '紧缺人才数量', digital: 564, suffix: '人'}" :options="{separator: ''}" :style="{width: '178px', height: '39px'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" letterSpacing="0.8px" :suffixStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" />
    </data-loader>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'
import {
  DataLoader,
  DigitalRoll,
} from '@byzanteam/vis-components'

export const key_talents = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    DigitalRoll,
  },

  data () {
    return {
      craneStates: {
      },
    }
  },
}
export default key_talents
</script>
