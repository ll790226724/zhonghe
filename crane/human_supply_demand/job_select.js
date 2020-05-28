module.exports = {
  id: 'job_select',
  component: '@byzanteam/vis-components/data-loader',
  position: [40, 50],
  children: [
    {
      component: 'element-ui/Select',
      props: {
        $style: {
          width: '380px',
        },
        'v-model': 'craneStates.currentJob'
      },
      children: [
        {
          component: 'element-ui/Option',
          vfor: {
            data: "craneStates.jobs",
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
