<template>
  <div>
    <card>
      <div slot="header">
        <h4 class="card-title">Add new Device</h4>
      </div>
      <div class="row">
        <div class="col-4">
          <base-input label="Device Name" type="text" placeholder="Ex: home, office...">
          </base-input>
        </div>
        <div class="col-4">
          <base-input label="Device Id" type="text" placeholder="Ex: 7777-8888">
          </base-input>
        </div>

        <div class="col-4">
          <slot name="label">
            <label>Template</label>
          </slot>"
          <el-select value="1" placeholder="Select Template" class="select-primary" style="width:100%">

            <el-option class="text-dark" label="Template 1" value="1"></el-option>
            <el-option class="text-dark" label="Template 2" value="2"></el-option>
            <el-option class="text-dark" label="Template 3" value="3"></el-option>

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
  }
};
</script>
