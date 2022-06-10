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
    <base-button
      :type="config.class"
      size="lg"
      class="mb-3 pull-right"
      @click="sendValue()"
    >
      Add
    </base-button>
  </card>
</template>
<script>
export default {
  props: ["config"],
  data() {
    return {
      sending: false
    };
  },
  mounted() {},
  methods: {
    sendValue() {
      this.sending = true;
      setTimeout(() => {
        this.sending = false;
      }, 500);

      const toSend = {
        topic: `${this.config.userId}/${this.config.selectedDevice.dId}/${this.config.variable}$/actdata`,
        msg: {
          value: this.config.message
        }
      };
      console.log(toSend);
      this.$emit("mqtt-sender", toSend);
    },
    getIconColorClass() {
      if (!this.sending) {
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
