<template>
  <div class="supply">
    <data-loader ref="job_select" :style="{position: 'absolute', top: '50px', left: '40px'}">
      <Select :style="{width: '380px'}" v-model="craneStates.currentJob">
        <Option v-for="(item, key) in craneStates.jobs" :key="key" value="index" label="name">
          {{item.name}}
        </Option>
      </Select>
    </data-loader>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'
import {
  DataLoader,
} from '@byzanteam/vis-components'
import {
  Select,
  Option,
} from 'element-ui'

export const supply = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    Select,
    Option,
  },

  data () {
    return {
      craneStates: {
        currentJob: '',
        jobs: [{index: 1, name: '高级前端工程师'}, {index: 2, name: 'java工程师'}, {index: 3, name: '用户体验设计师'}, {index: 4, name: '产品经理'}, {index: 5, name: '产品助理'}, {index: 6, name: '智能硬件'}, {index: 7, name: '生活服务'}],
      },
    }
  },
}
export default supply
</script>