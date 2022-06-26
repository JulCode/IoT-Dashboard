<template>
  <card>
    <template slot="header">
      <h5 class="card-category" style="font-size: 20px;">
        {{ config.selectedDevice.name }} - {{ config.variableFullName }}
      </h5>
      <h3 class="card-title"></h3>
      <GmapMap
        style="width: 100%; height: 350px;"
        :zoom="4"
        :center="{ lat: 45, lng: -72 }"
        ref="map"
      >
        <GmapMarker :position="position" :clickable="true" :draggable="false">
        </GmapMarker>
      </GmapMap>
    </template>
  </card>
</template>
<script>
export default {
  name: "mapa",
  props: ["config"],
  data() {
    return {
      position: {
        lat: 0,
        lng: 0
      }
    };
  },
  mounted() {
    // userId/dId/variable/sdata
    const topic =
      this.config.userId +
      "/" +
      this.config.selectedDevice.dId +
      "/" +
      this.config.variable +
      "/sdata";
    console.log("topic: " + topic);
    this.$nuxt.$on(topic, this.processReceivedData);
  },
  beforeDestroy() {
    // this.$nuxt.$off( this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata");
    this.$nuxt.$off(this.topic);
  },
  methods: {
    processReceivedData(data) {
      try {
        console.log("received Localization maps");
        console.log(data);
        this.position = data; // atribuir a localização que chega a topic
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
