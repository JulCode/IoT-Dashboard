<template>
  <div class="row">
    <div class="col-4">
      <Iotindicator :config="config1"></Iotindicator>
    </div>
    <div class="col-4">
      <Iotindicator :config="config2"></Iotindicator>
    </div>
    <div class="col-4">
      <Iotindicator :config="config3"></Iotindicator>
    </div>

    <button @click="sendData()">SEND</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      config1: {
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
      },
      config2: {
        userId: "userid",
        selectedDevice: {
          name: "home",
          dId: "12345",
          templateName: "Power Sensor",
          templateId: "236574685t7g5",
          saverRule: true
        },
        variableFullName: "Light",
        variable: "var2",
        icon: "fa-sun",
        column: "col-6",
        widgets: "indicator",
        class: "success"
      },
      config3: {
        userId: "userid",
        selectedDevice: {
          name: "home",
          dId: "12345",
          templateName: "Power Sensor",
          templateId: "236574685t7g5",
          saverRule: true
        },
        variableFullName: "engine",
        variable: "var3",
        icon: "fa-sun",
        column: "col-6",
        widgets: "indicator",
        class: "success"
      }
    };
  },
  methods: {
    sendData() {
      this.value = !this.value;
      const toSend = {
        value: this.value
      };
      this.$nuxt.$emit("userid/12345/var1/sdata", toSend);
    }
  }
};
</script>
