<template>
  <div class="row">
    <div>{{ hello }}</div>
    <div class="col-md-12">
      <div class="header text-left">
        <h3 class="title">가맹점정보 상세</h3>
      </div>
      <card>
        <h4 slot="header" class="card-title">
          가맹점 기본 정보
        </h4>
        <div class="row">
          <label class="col-md-2 col-form-label">아이디</label>
          <div class="col-md-2">
            <input type="text" disabled="" class="form-control" value="nice_pay"/>
          </div>
          <label class="col-md-2 col-form-label">패스워드</label>
          <div class="col-md-2">
            <p-button type="default" size="sm" style="margin:0;" @click="alertTest();">재발행</p-button>
          </div>
          <label class="col-md-2 col-form-label">접근키</label>
          <div class="col-md-2">
            <fg-input value="3oDjFfBUWvfJGaO"></fg-input>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">제휴사ID(사용처ID)</label>
            <div class="col-md-6">
              <input type="text" disabled="" class="form-control" value="nice_pay(V246)"/>
            </div>
            <label class="col-md-2 col-form-label">사용처 명</label>
            <div class="col-md-2">
              <input type="text" disabled="" class="form-control" value="나이스 페이"/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">가맹점 속성</label>
            <div class="col-md-6">
              <p-radio label="Merchant" v-model="radios.radio1" :inline="true">Merchant</p-radio>
              <p-radio label="PI" v-model="radios.radio1" :inline="true">PI</p-radio>
            </div>
            <label class="col-md-2 col-form-label">가맹점 유형</label>
            <div class="col-md-2">
              <p-radio label="대행" v-model="radios.radio2" :inline="true">대행</p-radio>
              <p-radio label="독자" v-model="radios.radio2" :inline="true">독자</p-radio>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">가맹점 구분</label>
            <div class="col-md-10">
              <p-radio label="대표 가맹점" v-model="radios.radio3" :inline="true">대표 가맹점</p-radio>
              <p-radio label="영업점" v-model="radios.radio3" :inline="true">영업점</p-radio>
              <p-radio label="하위 가맹점" v-model="radios.radio3" :inline="true">하위 가맹점</p-radio>
              <p-button type="default" size="sm" style="margin:0;" @click="notifyTest();">하위 가맹점 리스트 보기</p-button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">대표 아이디</label>
            <div class="col-md-2">
              <input type="text" disabled="" class="form-control" value="nice_pay"/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">사업자등록 상호명</label>
            <div class="col-md-2">
              <fg-input value="나이스페이먼츠(주)"></fg-input>
            </div>
            <div class="col-md-8">
              <span class="help-block">가맹점의 사업자등록증상의 정식상호명</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">사업자등록번호</label>
            <div class="col-md-1">
              <fg-input class="" value=""></fg-input>
            </div>
            <div>
              <label class="col-form-label">-</label>
            </div>
            <div class="col-md-1">
              <fg-input class="" value=""></fg-input>
            </div>
            <div>
              <label class="col-form-label">-</label>
            </div>
            <div class="col-md-2">
              <fg-input class="" value=""></fg-input>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">사업자 구분</label>
            <div class="col-md-10">
              <p-radio label="영세" v-model="radios.radio1" :inline="true">영세</p-radio>
              <p-radio label="중소" v-model="radios.radio2" :inline="true">중소</p-radio>
              <p-radio label="중견" v-model="radios.radio3" :inline="true">중견</p-radio>
              <p-radio label="준중견" v-model="radios.radio4" :inline="true">준중견</p-radio>
              <p-radio label="일반" v-model="radios.radio5" :inline="true">일반</p-radio>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">서비스 구분</label>
            <div class="col-md-10">
              <p-checkbox v-model="checkboxes.chk1" :inline="true">온라인 결제</p-checkbox>
              <p-checkbox v-model="checkboxes.chk2" :inline="true">오프라인 결제</p-checkbox>
              <p-checkbox v-model="checkboxes.chk3" :inline="true">T멤버쉽</p-checkbox>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">가맹점 혜택 구분</label>
            <div class="col-md-10">
              <p-checkbox v-model="checkboxes.chk1" :inline="true">할인</p-checkbox>
              <p-checkbox v-model="checkboxes.chk2" :inline="true">결제</p-checkbox>
              <p-checkbox v-model="checkboxes.chk3" :inline="true">적립</p-checkbox>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">할인/적립/결제 가능 상품군</label>
            <div class="col-md-10">

            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">사용 결제수단</label>
            <label class="col-md-2 col-form-label">신용카드</label>
            <div class="col-md-8">
              <p-checkbox v-model="checkboxes.chk1" :inline="true">신용카드</p-checkbox>
              <p-checkbox v-model="checkboxes.chk2" :inline="true">자동결제가능</p-checkbox>
              <p-checkbox v-model="checkboxes.chk3" :inline="true">비회원결제가능</p-checkbox>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label"></label>
            <label class="col-md-2 col-form-label">폰빌</label>
            <div class="col-md-8">
              <p-checkbox v-model="checkboxes.chk1" :inline="true">폰빌</p-checkbox>
              <p-checkbox v-model="checkboxes.chk2" :inline="true">자동결제가능</p-checkbox>
              <p-checkbox v-model="checkboxes.chk3" :inline="true">비회원결제가능</p-checkbox>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label"></label>
            <label class="col-md-2 col-form-label">계좌이체</label>
            <div class="col-md-8">
              <p-checkbox v-model="checkboxes.chk1" :inline="true">계좌이체</p-checkbox>
              <p-checkbox v-model="checkboxes.chk2" :inline="true">자동결제가능</p-checkbox>
              <p-checkbox v-model="checkboxes.chk3" :inline="true">비회원결제가능</p-checkbox>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label"></label>
            <label class="col-md-2 col-form-label">가상화폐</label>
            <div class="col-md-8">
              <p-checkbox v-model="checkboxes.chk1" :inline="true">가상화폐</p-checkbox>
              <p-checkbox v-model="checkboxes.chk2" :inline="true">자동결제가능</p-checkbox>
              <p-checkbox v-model="checkboxes.chk3" :inline="true">비회원결제가능</p-checkbox>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label"></label>
            <label class="col-md-2 col-form-label">추가결제수단</label>
            <div class="col-md-8">
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">사용 할인수단</label>
            <div class="col-md-10">
              <p-checkbox v-model="checkboxes.chk1" :inline="true">OK캐쉬백</p-checkbox>
              <p-checkbox v-model="checkboxes.chk2" :inline="true">T멤버쉽</p-checkbox>
              <p-checkbox v-model="checkboxes.chk3" :inline="true">쿠폰</p-checkbox>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">부분취소 가능여부</label>
            <div class="col-md-10">
              <p-radio label="불가" v-model="radios.radio1" :inline="true">불가</p-radio>
              <p-radio label="부분취소 가능(쿠폰제외)" v-model="radios.radio2" :inline="true">부분취소 가능(쿠폰제외)</p-radio>
              <p-radio label="부분취소 가능(쿠폰포함, 쿠폰조건 체크)" v-model="radios.radio3" :inline="true">부분취소 가능(쿠폰포함, 쿠폰조건 체크)</p-radio>
              <p-radio label="부분취소 가능(쿠폰포함, 쿠폰 부분취소 가능)" v-model="radios.radio4" :inline="true">부분취소 가능(쿠폰포함, 쿠폰 부분취소 가능)</p-radio>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">가맹점 상태</label>
            <div class="col-md-10">
              <p-radio label="정상거래" v-model="radios.radio1" :inline="true">정상거래</p-radio>
              <p-radio label="지급보류" v-model="radios.radio2" :inline="true">지급보류</p-radio>
              <p-radio label="사용중지" v-model="radios.radio3" :inline="true">사용중지</p-radio>
              <p-radio label="계약해지" v-model="radios.radio4" :inline="true">계약해지</p-radio>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">가맹점 전용회원</label>
            <div class="col-md-10">
              <p-radio label="범용회원" v-model="radios.radio1" :inline="true">범용회원</p-radio>
              <p-radio label="전용회원" v-model="radios.radio2" :inline="true">전용회원</p-radio>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">금융정보서비스 추가정산여부</label>
            <div class="col-md-2">
              <fg-input>
                <el-select class="select"
                            size="large"
                            placeholder="Single Select"
                            v-model="selects.simple">
                  <el-option v-for="option in selects.countries"
                              class="select-danger"
                              :value="option.value"
                              :label="option.label"
                              :key="option.label">
                  </el-option>
                </el-select>
              </fg-input>
            </div>
            <label class="col-md-2 col-form-label">가승인 비밀번호 확인여부</label>
            <div class="col-md-6">
              <p-radio label="확인안함" v-model="radios.radio1" :inline="true">확인안함</p-radio>
              <p-radio label="비밀번호확인" v-model="radios.radio2" :inline="true">비밀번호확인</p-radio>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">선인증 서비스 사용여부</label>
            <div class="col-md-2">
              <p-radio label="사용" v-model="radios.radio1" :inline="true">사용</p-radio>
              <p-radio label="미사용" v-model="radios.radio2" :inline="true">미사용</p-radio>
            </div>
            <label class="col-md-2 col-form-label">선인증 서비스 사용기간</label>
            <div class="col-md-2">
              <el-date-picker v-model="datePicker" type="date" :picker-options="pickerOptions1"/>
            </div>
            <div class="col-md-2">
              <el-date-picker v-model="datePicker2" type="date" :picker-options="pickerOptions1"/>
            </div>
            <div class="col-md-2">
              <p-radio label="60일" v-model="radios.radio1" :inline="true">60일</p-radio>
              <p-radio label="90일" v-model="radios.radio2" :inline="true">90일</p-radio>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">서비스 구분</label>
            <div class="col-md-2">

            </div>
            <label class="col-md-2 col-form-label">VAN연동</label>
            <div class="col-md-2">

            </div>
          </div>
        </div>
        <br/>
        <div class="form-group text-center">
          <label class="form-control">가맹점 기본정보 변경 시, “기본정보저장” 버튼을 클릭하여 반영하여 주십시요. 기본정보가 반영되지 않으면, 하위 탭의 정보들도 저장되지 않습니다.</label>
        </div>
        <div class="form-group text-right">
          <p-button type="defalut">기본정보저장</p-button>
        </div>
      </card>
    </div>

    <div class="col-md-12">
      <card>
        <h4 slot="header" class="card-title">
          오프라인 설정정보
        </h4>
        <div class="row">
          <label class="col-md-2 col-form-label">T Pay 결제 가능여부</label>
          <div class="col-md-2">
          </div>
          <label class="col-md-2 col-form-label">분류</label>
          <div class="col-md-2">
            <fg-input>
              <el-select class="select"
                          size="large"
                          v-model="selects.simple">
                <el-option v-for="option in selects.countries"
                            class="select-danger"
                            :value="option.value"
                            :label="option.label"
                            :key="option.label">
                </el-option>
              </el-select>
            </fg-input>
          </div>
          <label class="col-md-2 col-form-label">마케팅</label>
          <div class="col-md-2">
            <fg-input></fg-input>
          </div>
        </div>
        <div class="row">
          <label class="col-md-2 col-form-label">시스템</label>
          <div class="col-md-2">
            <fg-input></fg-input>
          </div>
          <label class="col-md-2 col-form-label">POS 개발</label>
          <div class="col-md-2">
            <fg-input></fg-input>
          </div>
          <label class="col-md-2 col-form-label">POS AS</label>
          <div class="col-md-2">
            <fg-input></fg-input>
          </div>
        </div>
        <div class="form-group text-right">
          <p-button type="defalut">사용처 정보저장</p-button>
        </div>
      </card>
      <div class="row buttons-with-margin">
        <div class="col-md-12">
          <p-button>인증정보</p-button>
          <p-button>정산/지급정보</p-button>
          <p-button>부가 정보</p-button>
          <p-button>신용카드 정보</p-button>
          <p-button>폰빌 정보</p-button>
          <p-button>계좌이체 정보</p-button>
          <p-button>수수료 정보</p-button>
        </div>
      </div>
      <card>
        <h4 slot="header" class="card-title">
          신용카드 정보
        </h4>
        <div class="row">
          <label class="col-md-2 col-form-label">대표VanSiteNo</label>
          <div class="col-md-2">
            <fg-input value="30000000"></fg-input>
          </div>
          <div class="col-md-2">
            <p-button type="defalut" style="margin:0;">대표 VanSiteNo 검색</p-button>
          </div>
        </div>
        <div class="row">
          <label class="col-md-2 col-form-label">매입VanSiteNo</label>
          <div class="col-md-2">
            <fg-input value="33242310"></fg-input>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">VAN 정보 (일반)</label>
            <div class="col-md-10">
              <input type="text" disabled="" class="form-control" value="KSNET,KIS,FDIK,SMARTRO,NICE,KICC"/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">VAN 정보 (매입)</label>
            <div class="col-md-2">
              <fg-input>
                <el-select class="select"
                            size="large"
                            v-model="selects.simple">
                  <el-option v-for="option in selects.countries"
                              class="select-danger"
                              :value="option.value"
                              :label="option.label"
                              :key="option.label">
                  </el-option>
                </el-select>
              </fg-input>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">매입유형</label>
            <div class="col-md-2">
              <p-radio label="자동매입요청" v-model="radios.radio1" :inline="true">자동매입요청</p-radio>
              <p-radio label="수동매입요청" v-model="radios.radio2" :inline="true">수동매입요청</p-radio>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">매입유형</label>
            <div class="col-md-2">
              <p-radio label="자동" v-model="radios.radio1" :inline="true">자동</p-radio>
              <p-radio label="수동" v-model="radios.radio2" :inline="true">수동</p-radio>
              <p-radio label="안함" v-model="radios.radio3" :inline="true">안함</p-radio>
            </div>
            <div class="col-md-8">
              <span class="help-block">(독자: 안함, 대행: 자동, 일부 차액정산요청/결과처리 별도 가맹점은 수동)</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">할부유형</label>
            <div class="col-md-6">
              <fg-input>
                <el-select class="select"
                            size="large"
                            v-model="selects.simple">
                  <el-option v-for="option in selects.countries"
                              class="select-danger"
                              :value="option.value"
                              :label="option.label"
                              :key="option.label">
                  </el-option>
                </el-select>
              </fg-input>
            </div>
            <label class="col-md-2 col-form-label">최대 할부 개월수</label>
            <div class="col-md-2">
              <fg-input>
                <el-select class="select"
                            size="large"
                            v-model="selects.simple">
                  <el-option v-for="option in selects.countries"
                              class="select-danger"
                              :value="option.value"
                              :label="option.label"
                              :key="option.label">
                  </el-option>
                </el-select>
              </fg-input>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label class="col-md-2 col-form-label">거래상태</label>
            <div class="col-md-4">
              <p-radio label="정상거래" v-model="radios.radio1" :inline="true">정상거래</p-radio>
              <p-radio label="지급보류" v-model="radios.radio2" :inline="true">지급보류</p-radio>
              <p-radio label="사용중지" v-model="radios.radio3" :inline="true">사용중지</p-radio>
              <p-radio label="계약해지" v-model="radios.radio4" :inline="true">계약해지</p-radio>
            </div>
          </div>
        </div>
        <div class="row">
          <label class="col-md-2 col-form-label">비고</label>
          <div class="col-md-10">
            <fg-input></fg-input>
          </div>
        </div>
      </card>
      <card>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body table-full-width" style="width: 100%">
              <el-table :data="tableData">
                  <el-table-column min-width="30">
                      <p-checkbox v-model="checkboxes.chk1" size="sm"></p-checkbox>
                  </el-table-column>
                  <el-table-column label="" property="id"></el-table-column>
                  <el-table-column label="">
                    <fg-input></fg-input>
                  </el-table-column>
                  <el-table-column label="">
                      <div class="row">
                        <div class="col-9">
                          <fg-input></fg-input>
                        </div>
                        <div class="col-1">
                          <span class="help-block">%</span>
                        </div>
                      </div>
                  </el-table-column>
                  <el-table-column label="">
                    <div class="row">
                      <div class="col-9">
                        <fg-input></fg-input>
                      </div>
                      <div class="col-1">
                        <span class="help-block">일</span>
                      </div>
                    </div>
                  </el-table-column>
                  <el-table-column label="" min-width="150">
                    <div class="row">
                      <div class="col-1">
                        <span class="help-block">월</span>
                      </div>
                      <div class="col-2">
                        <fg-input></fg-input>
                      </div>
                      <div class="col-1">
                        <span class="help-block">화</span>
                      </div>
                      <div class="col-2">
                        <fg-input></fg-input>
                      </div>
                      <div class="col-1">
                        <span class="help-block">수</span>
                      </div>
                      <div class="col-2">
                        <fg-input></fg-input>
                      </div>
                      <div class="col-1">
                        <span class="help-block">목</span>
                      </div>
                      <div class="col-2">
                        <fg-input></fg-input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1">
                        <span class="help-block">금</span>
                      </div>
                      <div class="col-2">
                        <fg-input></fg-input>
                      </div>
                      <div class="col-1">
                        <span class="help-block">토</span>
                      </div>
                      <div class="col-2">
                        <fg-input></fg-input>
                      </div>
                      <div class="col-1">
                        <span class="help-block">일</span>
                      </div>
                      <div class="col-2">
                        <fg-input></fg-input>
                      </div>
                    </div>
                  </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { Card, Modal } from 'src/components/UIComponents'
import swal from 'sweetalert2'
import NotificationTemplate from './NotificationTemplate'
import { DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option } from 'element-ui'
import PProgress from 'src/components/UIComponents/Progress.vue'
import PSwitch from 'src/components/UIComponents/Switch.vue'
import Vue from 'vue'
import { Table, TableColumn } from 'element-ui'
import gql from 'graphql-tag'
Vue.use(Table)
Vue.use(TableColumn)

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`query {
      filterCodesJPA(filter:{
        size: 5
        page: 1
      }){
        content {
          key
        }
        count
        page
      }
    }`,
  },
  components: {
    Card,
    Modal,
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Slider.name]: Slider,
    [Tag.name]: Tag,
    [Input.name]: Input,
    [Button.name]: Button,
    [Option.name]: Option,
    [Select.name]: Select,
    PSwitch,
    PProgress,
    NotificationTemplate
  },
  methods: {
    alertTest() {
      swal({
        title: `alert 테스트입니다.`,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-success btn-fill'
      })
    },
    notifyTest() {
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notify({
        component: NotificationTemplate,
        icon: 'nc-icon nc-app',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        type: this.type[color]
      })
    }
  },
  data() {
    return {
      radios: {
        radio1: '1',
        radio2: '2',
        radio3: '3',
        radio4: '4',
        radio5: '5',
        radio6: '6'
      },
      checkboxes: {

      },
      selects: {
        simple: '',
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
        { value: '한국어', label: '한국어' }],
        multiple: 'ARS'
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
      datePicker2: '',
      tableData: [
        { id: '하나' },
        { id: 'NH농협' },
        { id: '국민' },
        { id: '삼성' },
        { id: '신한' },
        { id: '현대' },
        { id: '롯데' },
        { id: '비씨' }
      ],
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      },
      modals: {
        classic: false,
        notice: false,
        mini: false
      },

    }
  }
}
</script>
