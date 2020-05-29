<template>
  <div class="supply">
    <img ref="background" src="/static/images/Bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <img ref="title-bg" :style="{width: '701px', height: '123px', position: 'absolute', top: '0px', left: '607px'}" src="/static/images/Title-Bg.png" />
    <div ref="page-title" :style="{width: '701px', color: '#fff', fontSize: '42px', fontWeight: 600, textAlign: 'center', position: 'absolute', top: '27px', left: '607px'}">
      人才供需专题
    </div>
    <img ref="box-bg" :style="{width: '440px', height: '1059px', position: 'absolute', top: '10px', left: '10px'}" src="/static/images/Box-Bg.png" />
    <data-loader ref="job_select" :style="{position: 'absolute', top: '50px', left: '40px'}">
      <Select :style="{width: '380px'}" v-model="craneStates.currentJob">
        <Option v-for="(item, key) in craneStates.jobs" :key="key" :value="item.index" :label="item.name">
          {{item.name}}
        </Option>
      </Select>
    </data-loader>
    <data-loader ref="supply-demand-count" :style="{width: '400px', height: '50px', backgroundColor: 'rgba(106, 214, 255, .02)', borderRadius: '5px', position: 'absolute', top: '196px', left: '30px'}" />
    <div ref="value-circle" :style="{height: '10px', width: '10px', borderRadius: '10px', borderWidth: '1px', borderColor: '#6ad6ff', borderStyle: 'solid', position: 'absolute', top: '225px', left: '100px'}" />
    <data-loader ref="supply-demand-count" :style="{position: 'absolute', top: '202px', left: '126px'}">
      <digital-roll ref="talent-age-index-content" titlePosition="left" :content="{title: '企业人才需求数量', digital: 5200}" :options="{separator: ','}" :style="{width: '235px', height: '39px', position: 'absolute', top: '0px', left: 'undefinedpx'}" :titleStyle="{color: '#367391', fontSize: '16px', fontWeight: '400'}" :digitalStyle="{fontSize: '32px', color: '#6ad6ff', fontWeight: '400', fontFamily: 'Oswald-Regular', format: '11', letterSpacing: '2.4px'}" />
    </data-loader>
    <div ref="talent-index-icon" :style="{color: '#6ad6ff', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '305px', left: '40px'}">
      >>
    </div>
    <div ref="talent-demand" :style="{color: '#fff', fontSize: '18px', fontWeight: '600', textAlign: 'left', letterSpacing: '1px', position: 'absolute', top: '302px', left: '74px'}">
      需求岗位排名
    </div>
    <brick-tabs :tabNavs="craneStates.tabNavs" :activeTab="craneStates.tabCurrent" :style="{position: 'absolute', top: '352px', left: '110px'}" v-model="craneStates.tabCurrent" />
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'
import {
  DataLoader,
  DigitalRoll,
  BrickTabs,
} from '@byzanteam/vis-components'
import {
  Select,
  Option,
} from 'element-ui'

export const supply = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    DigitalRoll,
    BrickTabs,
    Select,
    Option,
  },

  data () {
    return {
      craneStates: {
        currentJob: '',
        jobs: [{index: 1, name: '高级前端工程师'}, {index: 2, name: 'java工程师'}, {index: 3, name: '用户体验设计师'}, {index: 4, name: '产品经理'}, {index: 5, name: '产品助理'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}],
        tabCurrent: '岗位排名',
        tabNavs: [{uuid: 1, label: '岗位排名'}, {uuid: 2, label: '岗位薪资排名'}],
      },
    }
  },
}
export default supply
</script>
