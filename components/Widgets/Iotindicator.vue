<template>
  <card>
    <div class="header">
      <h3 class="card-title">
        {{ config.selectedDevice.name }} - {{ config.variableFullName }}
      </h3>
    </div>
    <i class="fa " :class="[config.icon]"></i>
  </card>
</template>
<script>
export default {
  //props: ['config'],
  data() {
    return {
      config: {
        userId: "userid",
        selectedDevice: {
          name: "home",
          dId: "12345",
          templateName: "Power Sensor",
          templateId: "236574685t7g5",
          saverRule: true
        },
        variableFullName: "Pump",
        variable: "uniquestr",
        icon: "fa-sun",
        column: "col-6",
        widgets: "indicator",
        class: "danger"
      }
    };
  }
};
</script>
