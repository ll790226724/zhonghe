module.exports = {
  id: 'job_select',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 50],
  children: [
    {
      component: 'element-ui/el-select',
      props: {
        'v-model': 'cranetState.currentJob'
      },
      children: [
        {
          component: 'element-ui/el-option',
          vfor: {
            data: "craneState.jobs",
            exports: {item: 'item', index: 'key'}
          },
          props: {
            value: "index",
            label: "name"
          },
          content: '{{item.name}}',
        }
      ]
    }
  ]

}
