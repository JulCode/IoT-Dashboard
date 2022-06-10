<template>
  <div class="row">
    <div class="col-4">
      <Iotbutton :config="configButton"> </Iotbutton>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      configButton: {
        userId: "userid",
        selectedDevice: {
          name: "home",
          dId: "12345",
          templateName: "Power Sensor",
          templateId: "236574685t7g5",
          saverRule: true
        },
        variableFullName: "Pump",
        variable: "var1",
        icon: "fa-sun",
        column: "col-6",
        widgets: "indicator",
        class: "success",
        message: "{'fanstatus': 'stop'}"
      },
      configIndicator: {
        userId: "userid",
        selectedDevice: {
          name: "home",
          dId: "12345",
          templateName: "Power Sensor",
          templateId: "236574685t7g5",
          saverRule: true
        },
        variableFullName: "Pump",
        variable: "var1",
        icon: "fa-sun",
        column: "col-6",
        widgets: "indicator",
        class: "success"
      }
    };
  },
  methods: {}
};
</script>
