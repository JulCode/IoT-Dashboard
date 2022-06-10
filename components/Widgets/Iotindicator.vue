<template>
  <card>
    <div class="header">
      <h3 class="card-title">
        {{ config.selectedDevice.name }} - {{ config.variableFullName }}
      </h3>
    </div>
    <i
      class="fa "
      :class="[config.icon, getIconColorClass()]"
      style="font-size: 30px"
    ></i>
  </card>
</template>
<script>
export default {
  props: ["config"],
  data() {
    return {
      value: false
    };
  },
  mounted() {
    const topic =
      this.config.userId +
      "/" +
      this.config.selectedDevice.dId +
      "/" +
      this.config.variable +
      "/sdata";
    this.$nuxt.$on(topic, this.processReceiveData);
    console.log(topic);
  },
  methods: {
    processReceiveData(data) {
      console.log("processReceiveData", data);
      this.value = data.value;
    },
    getIconColorClass() {
      if (!this.value) {
        return "text-dark";
      }
      switch (this.config.class) {
        case "success":
          return "text-success";
        case "warning":
          return "text-warning";
        case "danger":
          return "text-danger";
        case "primary":
          return "text-primary";
      }
    }
  }
};
</script>
