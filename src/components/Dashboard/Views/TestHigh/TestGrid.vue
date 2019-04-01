<template>
  <card>
    <h1 slot="header" class="card-title" @click="alertTest()">
      가맹점 기본 정보
    </h1>
    <h2 slot="header" class="card-title">
      가맹점 기본 정보
    </h2>
    <h3 slot="header" class="card-title">
      가맹점 기본 정보
    </h3>
    <h4 slot="header" class="card-title">
      가맹점 기본 정보
    </h4>
    <div class="card-header">
      <h1 slot="header" class="card-title">
      가맹점 기본 정보
      </h1>
      <h2 slot="header" class="card-title">
        가맹점 기본 정보
      </h2>
      <h3 slot="header" class="card-title">
        가맹점 기본 정보
      </h3>
      <h4 slot="header" class="card-title">
        가맹점 기본 정보
      </h4>
    </div>
    <div class="card-body">
      <div class="form-group">
        <div class="row">
          <label class="col-md-2 col-form-label">INPUT BOX</label>
          <div class="col-md-10">
            <input type="text" class="form-control" value="form-control 안녕하세요"/>
            <input type="text" class="form-control form-text" value="form-control form-text 안녕하세요"/>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-2">SELECT BOX</div>
          <div class="col-md-10">
            <div class="card-columns">
              <el-select class="select" size="large" value="class='select' size='large'">
                <el-option v-for="option in TS1"
                          class="select"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
                <el-select class="select" size="medium" value="size='medium'">
                <el-option v-for="option in TS1"
                          class="select"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
                <el-select class="select" size="small" value="size='small'">
                <el-option v-for="option in TS1"
                          class="select"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <div class="card-columns">
              <el-select class="select-default" size="large" value="select-default">
                <el-option v-for="option in TS1"
                          class="select-default"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
                <el-select class="select-danger" size="medium" value="select-danger">
                <el-option v-for="option in TS1"
                          class="select-danger"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
                <el-select class="select-warning" size="small" value="select-warning">
                <el-option v-for="option in TS1"
                          class="select-warning"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <div class="card-columns">
              <el-select class="select-primary" size="large" value="select-primary">
                <el-option v-for="option in TS1"
                          class="select-primary"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
                <el-select class="select-info" size="medium" value="select-info">
                <el-option v-for="option in TS1"
                          class="select-info"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
                <el-select class="select-success" size="small" value="select-success">
                <el-option v-for="option in TS1"
                          class="select-success"
                          :value="option.value"
                          :label="option.label"
                          :key="option.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="card-columns">
          <input type="text" class="form-control" value="card-columns 한줄을 3등분"/>
          <input type="text" class="form-control form-text" value="card-columns 한줄을 3등분"/>
          <input type="text" class="form-control form-text" value="card-columns 한줄을 3등분"/>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <ag-grid-vue style="width: 100%; height: 150px;"
                      class="ag-theme-fresh"
                      :columnDefs="columnDefs"
                      :rowData="rowData">
          </ag-grid-vue>
        </div>
      </div>
      <div class="form-group">
        <ag-grid-vue style="width: 100%; height: 150px;"
                    class="ag-theme-fresh"
                    :columnDefs="columnDefs"
                    :rowData="rowData">
        </ag-grid-vue>
      </div>
    </div>
  </card>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import { DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option } from 'element-ui'

export default {
  components: {
    AgGridVue,
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Slider.name]: Slider,
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button,
    [Option.name]: Option,
    [Select.name]: Select
  },
  data() {
    return {
      columnDefs: null,
      rowData: null,
      TS1: [
        { label: '단건1', value: '1' },
        { label: '단건2', value: '2' },
        { label: '단건3', value: '3' }
      ],
      TS2: [
        { LABEL: '복수1', VALUE: '1' },
        { LABEL: '복수2', VALUE: '2' },
        { LABEL: '복수3', VALUE: '3' },
        { LABEL: '복수4', VALUE: '4' },
        { LABEL: '복수5', VALUE: '5' },
        { LABEL: '복수6', VALUE: '6' }
      ],
      countries: [{ value: 'Bahasa Indonesia', label: 'Bahasa Indonesia' },
      { value: 'Bahasa Melayu', label: 'Bahasa Melayu' },
      { value: 'Català', label: 'Català' },
      { value: 'Dansk', label: 'Dansk' },
      { value: 'Deutsch', label: 'Deutsch' },
      { value: 'English', label: 'English' },
      { value: 'Español', label: 'Español' },
      { value: 'Eλληνικά', label: 'Eλληνικά' },
      { value: 'Français', label: 'Français' },
      { value: 'Italiano', label: 'Italiano' },
      { value: 'Magyar', label: 'Magyar' },
      { value: 'Nederlands', label: 'Nederlands' },
      { value: 'Norsk', label: 'Norsk' },
      { value: 'Polski', label: 'Polski' },
      { value: 'Português', label: 'Português' },
      { value: 'Suomi', label: 'Suomi' },
      { value: 'Svenska', label: 'Svenska' },
      { value: 'Türkçe', label: 'Türkçe' },
      { value: 'Íslenska', label: 'Íslenska' },
      { value: 'Čeština', label: 'Čeština' },
      { value: 'Русский', label: 'Русский' },
      { value: 'ภาษาไทย', label: 'ภาษาไทย' },
      { value: '中文 (简体)', label: '中文 (简体)' },
      { value: 'W">中文 (繁體)', label: 'W">中文 (繁體)' },
      { value: '日本語', label: '日本語' },
      { value: '한국어', label: '한국어' }]
    }
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];

    this.rowData = [
      { make: '가나다', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  },
  methods: {
    alertTest() {
      console.log('aaaaaaaaaaaaaaaaaaa')
      console.log(this.TS1)
      console.log(this.TS2)
      console.log(this.TS3)
      console.log(this.countries)
    }
  },
}
</script>
