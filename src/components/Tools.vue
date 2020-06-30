<template>
    <el-container>
      <el-aside><Aside/></el-aside>
      <el-container>
        <el-main>
            <el-row>
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
            </el-row>
            <br />
            <el-row>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </el-row>
            <br />
            <el-row>
                <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
            </el-row>
            <br />
            <el-row>
                <el-select v-model="svalue" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            <br />
            <el-row>
                <el-switch
                    v-model="value1"
                    active-text="按月付费"
                    inactive-text="按年付费">
                </el-switch>
                <el-switch
                    style="display: block"
                    v-model="value2"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="按月付费"
                    inactive-text="按年付费">
                </el-switch>
            </el-row>
            <br />
            <el-row>
                <el-slider
                    v-model="mvalue"
                    range
                    :marks="marks">
                </el-slider>
            </el-row>
            <br /><br />
            <el-row>
                <el-time-picker
                    is-range
                    v-model="dvalue1"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                </el-time-picker>
                <el-time-picker
                    is-range
                    arrow-control
                    v-model="dvalue2"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                </el-time-picker>
            </el-row>
            <br />
            <el-row>
                <el-date-picker
                    v-model="ddvalue2"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions">
                </el-date-picker>
            </el-row>
            <br />
            <el-row>
                <el-rate
                    v-model="ratevalue"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
            </el-row>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Aside from '@/components/Aside.vue'
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    name: 'Calendar',
    props: {

    },
    components: {
        Aside
    },
    data() {
        return {
            value: new Date(),
            radio:'',
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            num:0,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            svalue: '',
            value1: true,
            value2: true,
            mvalue:[30, 60],
            marks: {
                0: '0°C',
                8: '8°C',
                37: '37°C',
                50: {
                    style: {
                        color: '#1989FA'
                    },
                    label: this.$createElement('strong', '50%')
                }
            },
            dvalue1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            dvalue2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            ddvalue2:'',
            pickerOptions: {
                shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                        text: '最近一个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                        text: '最近三个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            ratevalue:3.7
        }
    },
    methord:{
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    }
}
</script>


<style scoped>
.el-aside {
    color: #333;
}
</style>