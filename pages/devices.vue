<template>
  <div>
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card-title">Add new Device</h4>
        </div>
        <div class="row">
          <div class="col-4">
            <base-input
              label="Device Name"
              type="text"
              placeholder="Ex: home, office..."
            >
            </base-input>
          </div>
          <div class="col-4">
            <base-input
              label="Device Id"
              type="text"
              placeholder="Ex: 7777-8888"
            >
            </base-input>
          </div>

          <div class="col-4">
            <slot name="label"> <label>Template</label> </slot>"
            <el-select
              value="1"
              placeholder="Select Template"
              class="select-primary"
              style="width:100%"
            >
              <el-option
                class="text-dark"
                label="Template 1"
                value="1"
              ></el-option>
              <el-option
                class="text-dark"
                label="Template 2"
                value="2"
              ></el-option>
              <el-option
                class="text-dark"
                label="Template 3"
                value="3"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="row pull-right">
          <div class="col-12">
            <base-button type="primary" size="lg" class="mb-3">
              Add
            </base-button>
          </div>
        </div>
      </card>
    </div>
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card-title">Devices</h4>
        </div>
        <el-table :data="devices">
          <el-table-column label="#" min-width="50" align="center">
            <div slot-scope="{ row, $index }">
              {{ $index + 1 }}
            </div>
          </el-table-column>
          <el-table-column label="Name" prop="name"></el-table-column>
          <el-table-column label="Device Id" prop="dId"></el-table-column>
          <el-table-column
            label="Template"
            prop="templateName"
          ></el-table-column>
          <el-table-column label="Actions" width="180">
            <div slot-scope="{ row, $index }">
              <el-tooltip content="Database Saver">
                <base-switch
                  :value="row.saverRule"
                  type="primary"
                  on-text="On"
                  off-text="Off"
                  @click="updateSaverRules($index)"
                ></base-switch>
              </el-tooltip>

              <el-tooltip
                content="Delete"
                effect="light"
                :open-delay="300"
                placement="top"
              >
                <base-button
                  type="danger"
                  size="sm"
                  icon
                  class="btn-link"
                  @click="deleteDevice(row)"
                >
                  <i class="tim-icons icon-simple-remove"></i>
                </base-button>
              </el-tooltip>
            </div>
          </el-table-column>
        </el-table>
      </card>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { Select, Option } from "element-ui";

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      devices: [
        {
          dId: "12345",
          name: "Home",
          templateName: "Power Sensor",
          templateId: "236574685t7g5",
          saverRule: true
        },
        {
          dId: "45",
          name: "office",
          templateName: "Power Sensor",
          templateId: "236574685t7g5",
          saverRule: false
        }
      ]
    };
  },
  methods: {
    deleteDevice(id) {
      alert("Delete " + id.name);
    },
    updateSaverRules(id) {
      this.devices[id].saverRule = !this.devices[id].saverRule;
    }
  }
};
</script>
