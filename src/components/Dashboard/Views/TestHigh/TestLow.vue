<template>
  <div class="extended-forms">
    <card>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-10">
            <h6 class="card-title">▶조회 설정</h6>
          </div>
          <div class="col-sm-2"><p-button type="primary">초기화</p-button><p-button>조회</p-button></div>
        </div>
        <div class="row">
            <div class="form-group">
              <div class="row">
                <label class="col-lg-1 col-form-label">거래일자</label>
                <div class="col-lg-2">
                  <fg-input>
                    <el-select class="select-default" size="medium" v-model="selects.simple">
                      <el-option v-for="option in selects.options"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                      </el-option>
                    </el-select>
                  </fg-input>
                </div>
                <div class="col-sm-1">
                  <el-date-picker v-model="datePicker" type="date" :picker-options="pickerOptions1"/>
                </div>
                <div class="col-sm-1">
                  <input type="text" placeholder="00" class="form-control"/>시
                </div>

                <div class="col-sm-1">
                  <input type="text" placeholder="00" class="form-control"/>분
                </div>

                <div class="col-sm-1">
                  <el-date-picker v-model="datePicker" type="date" :picker-options="pickerOptions1"/>
                </div>
                <div class="col-sm-1">
                  <input type="text" placeholder="00" class="form-control"/>시
                </div>

                <div class="col-sm-1">
                  <input type="text" placeholder="00" class="form-control"/>분
                </div>

                <div class="col-sm-3">
                  <p-radio v-model="enabledRadio" label="2" :inline="true">평일</p-radio>
                  <p-radio v-model="enabledRadio" label="1" :inline="true">1주</p-radio>
                  <p-radio v-model="enabledRadio" label="1" :inline="true">1개월</p-radio>
                </div>
              </div>

              <div class="row">
                  <label class="col-lg-2 col-form-label">제휴사/가맹점</label>
                  <div class="col-sm-2">
                    <fg-input placeholder="제휴가/가맹점ID 입력"></fg-input>
                  </div>
                  <div class="col-sm-2">
                    <fg-input placeholder="매장/가맹점ID 입력"></fg-input>
                  </div>
                  <p-button size="small">검색</p-button>
                <label class="col-lg-1 col-form-label">가맹점유형</label>
                <div class="col-lg-1">
                  <fg-input>
                    <el-select class="select-default" size="medium" placeholder="전체" v-model="selects.simple">
                      <el-option v-for="option in selects.options"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                      </el-option>
                    </el-select>
                  </fg-input>
                </div>
                  <label class="col-lg-1 col-form-label">가맹점회원ID</label>
                  <fg-input/>

              </div>


              <div class="row">
                <label class="col-lg-1 col-form-label">가맹점<br/>거래번호</label>
                <fg-input/>
                <label class="col-lg-1 col-form-label">승인번호</label>
                <fg-input/>
                <label class="col-lg-1 col-form-label">TXNO</label>
                <fg-input/>
                <label class="col-lg-1 col-form-label">원거래번호</label>
                <fg-input/>
              </div>

              <div class="row">
                <label class="col-lg-1 col-form-label">결제방식/<br/>결제사명</label>
                <div class="col-lg-2">
                  <fg-input>
                    <el-select class="select-default" size="medium" placeholder="전체" v-model="selects.simple">
                      <el-option v-for="option in selects.options"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                      </el-option>
                    </el-select>
                  </fg-input>
                </div>
                <div class="col-lg-2">
                  <fg-input>
                    <el-select class="select-default" size="medium" placeholder="전체" v-model="selects.simple">
                      <el-option v-for="option in selects.options"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                      </el-option>
                    </el-select>
                  </fg-input>
                </div>
                <label class="col-lg-1 col-form-label">결제구분</label>
                <div class="col-lg-1">
                  <fg-input>
                    <el-select class="select-default" size="medium" placeholder="전체" v-model="selects.simple">
                      <el-option v-for="option in selects.options"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                      </el-option>
                    </el-select>
                  </fg-input>
                </div>
                <label class="col-lg-1 col-form-label">금융정보<br/>인증거래</label>
                <div class="col-lg-4">
                  <fg-input>
                    <el-select class="select-default" size="medium" placeholder="전체" v-model="selects.simple">
                      <el-option v-for="option in selects.options"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                      </el-option>
                    </el-select>
                  </fg-input>
                </div>
              </div>

              <div class="row">
                <label class="col-lg-1 col-form-label">거래상태</label>
                <div class="col-lg-2">
                  <fg-input>
                    <el-select class="select-default" size="medium" placeholder="전체" v-model="selects.simple">
                      <el-option v-for="option in selects.options"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                      </el-option>
                    </el-select>
                  </fg-input>
                </div>

                <label class="col-lg-1 col-form-label">거래금액</label>
                <div class="col-lg-2">
                  <fg-input/>
                </div>
                ~
                <div class="col-lg-2"><fg-input/></div>

                <label class="col-lg-1 col-form-label">MBR-No</label>
                <div class="col-lg-2">
                  <fg-input/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </card>

    <card>
      <div class="row">
        <div class="col-sm-8">
          <h6 class="card-title">▶조회 결과</h6>
        </div>

          <label>Items per page</label>
          <div class="col-sm-1">
            <fg-input>
              <el-select class="select-default" size="medium" placeholder="10" v-model="selects.simple">
                <el-option v-for="option in selects.pages"
                          class="select-danger"
                          :value="option.value"
                          :label="option.label"
                          :key="option.label">
                </el-option>
              </el-select>
            </fg-input>
          </div>
          <p-button type="info" size="small">엑셀 다운로드</p-button>
      </div>

      <div class="card-body table-responsive table-full-width">
        <el-table :data="tableData" >
          <el-table-column label="조회기간 : 2018.09.31 12:00:00 ~ 2018.11.29 13:00:00 검색건수 : 총 0건" :span-method="objectSpanMethod">
            <el-table-column label="총 결제건수" property="총 결제건수" width="120"></el-table-column>
            <el-table-column label="승인건수" property="승인건수" width="120"></el-table-column>
            <el-table-column label="취소건수" property="취소건수" width="120"></el-table-column>
            <el-table-column label="총 결제금액" property="총 결제금액" width="120"></el-table-column>
            <el-table-column label="취소금액" property="취소금액" width="120"></el-table-column>
            <el-table-column label="실 결제금액" property="실 결제금액" width="120"></el-table-column>
            <el-table-column label="결제구분 별 건수">
              <el-table-column label="승인거래" property="승인거래" width="120"></el-table-column>
              <el-table-column label="인증거래" property="인증거래" width="120"></el-table-column>
              <el-table-column label="테스트거래" property="테스트거래" width="120"></el-table-column>
            </el-table-column>
            <el-table-column label="거래상태 별 건수">
              <el-table-column label="승인완료" property="승인완료" width="120"></el-table-column>
              <el-table-column label="매입요청" property="매입요청" width="120"></el-table-column>
              <el-table-column label="매입완료" property="매입완료" width="120"></el-table-column>
              <el-table-column label="재매입요청" property="재매입요청" width="120"></el-table-column>
              <el-table-column label="재매입완료" property="재매입완료" width="120"></el-table-column>
              <el-table-column label="부분취소" property="부분취소" width="120"></el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>

      <div class="card-body table-responsive table-full-width">
        <el-table :data="tableData" :span-method="arraySpanMethod">
          <el-table-column label="조회기간 : 2018.09.31 12:00:00 ~ 2018.11.29 13:00:00 검색건수 : 총 0건">
            <el-table-column label="No" property="No" width="120"></el-table-column>
            <el-table-column label="TXNO" property="TXNO" width="120"></el-table-column>
            <el-table-column label="원거래번호" property="원거래번호" width="120"></el-table-column>
            <el-table-column label="가맹점유형" property="가맹점유형" width="80"></el-table-column>
            <el-table-column label="가맹점거래번호" property="가맹점거래번호" width="95"></el-table-column>
            <el-table-column label="가맹점(가맹점ID)" property="가맹점(가맹점ID)" width="120"></el-table-column>
            <el-table-column label="매장/하위 가맹점ID" property="매장/하위 가맹점ID" width="100"></el-table-column>
            <el-table-column label="MBR-No" property="MBR-No" width="120"></el-table-column>
            <el-table-column label="상품명" property="상품명" width="120"></el-table-column>
            <el-table-column label="거래일시" property="거래일시" width="120"></el-table-column>
            <el-table-column label="취소일시" property="취소일시" width="120"></el-table-column>
            <el-table-column label="승인결과" property="승인결과" width="120"></el-table-column>
            <el-table-column label="총 결제금액" property="총 결제금액" width="120"></el-table-column>
            <el-table-column label="결제내역">
              <el-table-column label="결제방식" property="결제방식" width="120"></el-table-column>
              <el-table-column label="결제사" property="결제사" width="120"></el-table-column>
              <el-table-column label="승인번호" property="승인번호" width="120"></el-table-column>
              <el-table-column label="할부" property="할부" width="120"></el-table-column>
            </el-table-column>
            <el-table-column label="할인내역">
              <el-table-column label="11Pay쿠폰" property="11Pay쿠폰" width="120"></el-table-column>
              <el-table-column label="가맹점쿠폰" property="가맹점쿠폰" width="120"></el-table-column>
              <el-table-column label="기타(OCR/마일리지)" property="기타(OCR/마일리지)" width="110"></el-table-column>
            </el-table-column>
            <el-table-column label="가맹점회원ID" property="가맹점회원ID" width="120"></el-table-column>
            <el-table-column label="서브몰ID" property="서브몰ID" width="120"></el-table-column>
            <el-table-column label="서브몰TEL" property="서브몰TEL" width="120"></el-table-column>
            <el-table-column label="거래상태" property="거래상태" width="120"></el-table-column>
            <el-table-column label="결제구분" property="결제구분" width="120"></el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </card>
    <!-- end card -->
  </div>
</template>
<script>
import Vue from 'vue'
import { DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option } from 'element-ui'
import PProgress from 'src/components/UIComponents/Progress.vue'
import PSwitch from 'src/components/UIComponents/Switch.vue'
import { Table, TableColumn } from 'element-ui'
Vue.use(Table)
Vue.use(TableColumn)
export default {
  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Slider.name]: Slider,
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button,
    [Option.name]: Option,
    [Select.name]: Select,
    PSwitch,
    PProgress
  },
  data() {
    return {
      enabledRadio: '2',
      disabledRadio: '2',
      switches: {
        defaultOn: true,
        defaultOff: false,
        plainOn: true,
        plainOff: false,
        withIconsOn: true,
        withIconsOff: false
      },
      sliders: {
        simple: 30,
        rangeSlider: [20, 50]
      },
      selects: {
        simple: '',
        options: [{ value: '거래일', label: '거래일' },
        { value: '취소일', label: '취소일' }],
        pages: [{ value: '10', label: '10' },
        { value: '15', label: '15' },
        { value: '20', label: '20' }]
      },
      tags: {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      },
      pickerOptions1: {
        shortcuts: [{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        },
        {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        },
        {
          text: 'A week ago',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      datePicker: '',
      dateTimePicker: '',
      timePicker: '',
      tableData: [{}]
    }
  },
  methods: {
    handleClose(tag) {
      this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.tags.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      let inputValue = this.tags.inputValue
      if (inputValue) {
        this.tags.dynamicTags.push(inputValue)
      }
      this.tags.inputVisible = false
      this.tags.inputValue = ''
    }


  }
}
</script>
<style>
.extended-forms .el-select {
  width: 100%;
}
</style>
