<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span="8" id="order-list" class="pos-order">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table border style="text-align:center;" :data="tableData">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量"></el-table-column>
                <el-table-column prop="price" label="金额"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="delShop(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="total">
                <span>总数：{{totalCount}}</span> &nbsp;&nbsp;
                <span>总价：{{totalMoney}}</span>
              </div>
              <div class="handle-group">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger" @click="delAllShop">删除</el-button>
                <el-button type="success">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">挂单</el-tab-pane>
            <el-tab-pane label="外卖">外卖</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="16">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <ul class='cookList'>
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class='cookList'>
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class='cookList'>
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class='cookList'>
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'pos',
    data() {
      return {
        tableData: [],
        oftenGoods: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
        totalCount: 0,
        totalMoney: 0
      }
    },
    mounted() {
      let orderHeight = document.body.clientHeight;
      document.getElementById('order-list').style.height = orderHeight + 'px';
      this.created();
    },
    methods: {
      created() {
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
          .then(response => {
            this.oftenGoods = response.data;
          })
          .catch(error => {
            console.log(error);
          });
        //读取分类商品列表
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
          .then(response => {
            this.type0Goods = response.data[0];
            this.type1Goods = response.data[1];
            this.type2Goods = response.data[2];
            this.type3Goods = response.data[3];
          })
          .catch(error => {
            console.log(error);
            alert('网络错误，不能访问');
          });
      },
      //添加订单列表的方法
      addOrderList(goods) {

        let isHave = false;
        //判断这个商品是否已经存在于订单列表
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].goodsId === goods.goodsId) {
            isHave = true; //存在
          }
        }
        //根据isHave的值判断订单列表中是否已经有此商品
        if (isHave) {
          //存在就进行数量添加
          let arr = this.tableData.filter(e => e.goodsId === goods.goodsId);
          arr[0].count++;
        } else {
          //不存在就推入数组
          let newGoods = {goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1};
          this.tableData.push(newGoods);

        }

        this.alterMoney();
      },
      alterMoney() {
        this.totalCount = 0; //汇总数量清0
        this.totalMoney = 0;
        //进行数量和价格的汇总计算
        this.tableData.forEach((element) => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + (element.price * element.count);
        });
      },
//      删除单个商品
      delShop(goods) {
        this.tableData = this.tableData.filter(e => e.goodsId != goods.goodsId);
        this.alterMoney();
      },
      delAllShop() {
        this.tableData = [];
        this.totalCount = 0; //汇总数量清0
        this.totalMoney = 0;
        this.alterMoney();
      }
    }
  }
</script>
<style scoped>
  .pos-order { padding: 10px; background: #f9fafc; border-right: 1px solid #00bfff; }
  .el-table th { text-align: center; }
  .handle-group { margin-top: 15px; }
  .title {
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
  }
  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
  }
  .o-price {
    color: #58B7FF;
  }
  .cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
  }
  .cookList li span {
    display: block;
    float: left;
  }
  .foodImg {
    width: 40%;
  }
  .foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
  }
  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .goods-type { clear: both; padding: 10px; }
  .total { margin-top: 15px; }
</style>
