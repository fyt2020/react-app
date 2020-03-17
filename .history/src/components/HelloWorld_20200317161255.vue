<template>
  <div class="hello">
    <div class="wrapper">
      <div class="tree__box">

        <h1>第三次提交</h1>

        <span  @click="showBtn">编辑</span>


       



        <el-tree
          :data="data1"
          :props="defaultProps"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent"
          ref="tree1"
          @node-click="choseOne"
        ></el-tree>

        <input type="text" v-model="orgVal" v-show="addShow" />
        <button @click="addOrg" v-show="addShow">保存</button>
        <!-- <Tree :data="data5" :render="renderContent" class="demo-tree-render"></Tree> -->
      </div>
    </div>
    <!-- <loading /> -->
  </div>
</template>
<script>
import { setInterval } from "timers";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  mounted() {
    this.getOrgData();
  },
  components: {
    loading: {
      render(createElement) {
        return createElement("script", {
          attrs: {
            type: "text/javascript",
            src: "/static/utils/script.min.js"
          }
        });
      }
    }
  },

  data() {
    return {

      orgVal: "",
      addShow: false,
      parentId: "",
      buttonKey:false,// 组织btn  v-show

      data1: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "orgName"
      },
      // return {
      //   data: JSON.parse(JSON.stringify(data)),
      //   data: JSON.parse(JSON.stringify(data))
      // },

      restaurants: ["zx", "cv", "bn", "nm"],
      state: "",

      data1: [
        { url: require("@/assets/logo.png") },
        { url: require("@/assets/logo.png") },
        { url: require("@/assets/logo.png") }
      ],
      result: {
        id: 1,
        orgId: "otgywab6uqa2g2a5",
        orgName: "上海市刑侦总队",
        createTime: 1555400472000,
        updateTime: 1575860551783,
        orgDescription: "市局",
        status: "1",
        area: "上海市 虹口区",
        address: "上海市",
        linkman: "张三",
        linkPhone: "15888888885",
        linkEmail: "test@qq.com",
        parentId: "",
        belongOrgName: "上海",
        cStatus: "启用",
        value: "otgywab6uqa2g2a5",
        label: "上海市刑侦总队",
        children: [
          {
            id: 103,
            orgId: "qpkss",
            orgName: "青浦看守所",
            createTime: 1575860689772,
            updateTime: 1575860689772,
            orgDescription: "",
            status: "1",
            area: "上海市 青浦区",
            address: "",
            linkman: "无",
            linkPhone: "18204125563",
            linkEmail: "",
            parentId: "1.",
            belongOrgName: "上海市刑侦总队",
            cStatus: "启用",
            value: "qpkss",
            label: "青浦看守所",
            children: [
              {
                id: 109,
                orgId: "das",
                orgName: "das",
                createTime: 1576575379302,
                updateTime: 1576575379302,
                orgDescription: "",
                status: "1",
                area: "上海市 青浦区",
                address: "",
                linkman: "dasdas",
                linkPhone: "13437160811",
                linkEmail: "",
                parentId: "1.103.",
                belongOrgName: "青浦看守所",
                cStatus: "启用",
                value: "das",
                label: "das",
                children: []
              },
              {
                id: 113,
                orgId: "ewda",
                orgName: "测试",
                createTime: 1582272871524,
                updateTime: 1582272871524,
                orgDescription: "",
                status: "1",
                area: "上海市 青浦区",
                address: "",
                linkman: "da",
                linkPhone: "13566778877",
                linkEmail: "",
                parentId: "1.103.",
                belongOrgName: "青浦看守所",
                cStatus: "启用",
                value: "ewda",
                label: "测试",
                children: []
              }
            ]
          },
          {
            id: 104,
            orgId: "srlpcs",
            orgName: "松润路派出所",
            createTime: 1575860739106,
            updateTime: 1575860739106,
            orgDescription: "",
            status: "1",
            area: "上海市 青浦区",
            address: "",
            linkman: "无",
            linkPhone: "15423695562",
            linkEmail: "",
            parentId: "1.",
            belongOrgName: "上海市刑侦总队",
            cStatus: "启用",
            value: "srlpcs",
            label: "松润路派出所",
            children: []
          },
          {
            id: 111,
            orgId: "TYSKJ01",
            orgName: "天远视科技",
            createTime: 1577434881380,
            updateTime: 1577434881380,
            orgDescription: "",
            status: "1",
            area: "上海市 浦东新区",
            address: "",
            linkman: "张三",
            linkPhone: "15821563214",
            linkEmail: "",
            parentId: "1.",
            belongOrgName: "上海市刑侦总队",
            cStatus: "启用",
            value: "TYSKJ01",
            label: "天远视科技",
            children: []
          }
        ]
      }
     
    };
  },
  methods: {
    getOrgData(){
          let VM = this;
          VM.data1 = this.result.children;
    },
    choseOne(data) {
       console.log(data)
    },
    addOrg(data) {
      if (!this.orgVal) {
        this.$Message.error("新增信息不能为空");
        return;
      } else {
        if (!data.children) {
          this.$set(data, "children", []);
        }
        const newChild = { id: 111, orgName: this.orgVal, children: [] };
        this.data1.push( newChild )
      }
    },
    
    showBtn(){
          this.buttonKey = !this.buttonKey;
    },

    append(data) {
      this.addShow = true;
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              type="primary"
              size="mini"
              circle
              icon="el-icon-plus"
              class="org__add"
              v-show={this.buttonKey}
              on-click={() => this.append(data)}
            ></el-button>
            <el-button
              type="primary"
              size="mini"
              class="org__add"
              icon="el-icon-minus"
              v-show={this.buttonKey}
              circle
              on-click={() => this.remove(node, data)}
            ></el-button>
          </span>
        </span>
      );
    }
  }
};
</script>
<style scoped>
.hello {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  border: 1px solid red;
}

.my-autocomplete > li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete .highlighted .addr {
  color: #ddd;
}
.splitting.cells img {
  width: 100%;
  display: block;
}

@supports (display: grid) {
  .splitting.cells {
    position: relative;
    overflow: hidden;
    background-size: cover;
    visibility: hidden;
  }

  .splitting .cell-grid {
    background: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: repeat(var(--row-total), 1fr) / repeat(var(--col-total), 1fr);
  }
  .list-box {
    /* width: 500px; */
    display: flex;
  }
  .list-box .new {
    display: flex;
    width: 1000px;
    overflow: hidden;
  }
  .list-box .list-item {
    width: 120px;
    height: 120px;
    margin-right: 20px;
  }

  .list-box .list-item.new {
    animation: run 1s ease-in-out infinite;
  }
  @keyframes run {
    0% {
      border: 3px solid rgba(0, 255, 255, 1);
    }
    20% {
      border: 3px solid rgba(0, 255, 255, 0.8);
    }
    40% {
      border: 3px solid rgba(0, 255, 255, 0.6);
    }
    60% {
      border: 3px solid rgba(0, 255, 255, 0.4);
    }
    80% {
      border: 3px solid rgba(0, 255, 255, 0.2);
    }
    90% {
      border: 3px solid rgba(0, 255, 255, 0);
    }
    100% {
      border: 3px solid rgba(0, 255, 255, 1);
    }
  }

  .list-box .list-item .img {
    width: 120px;
    height: 120px;
  }

  .splitting .cell {
    background: inherit;
    position: relative;
    overflow: hidden;
  }

  .splitting .cell-inner {
    background: inherit;
    position: absolute;
    visibility: visible;
    /* Size to fit the whole container size */
    width: calc(100% * var(--col-total));
    height: calc(100% * var(--row-total));
    /* Position properly */
    left: calc(-100% * var(--col-index));
    top: calc(-100% * var(--row-index));
  }

  /* Helper variables for advanced effects */
  .splitting .cell {
    --center-x: calc((var(--col-total) - 1) / 2);
    --center-y: calc((var(--row-total) - 1) / 2);

    /* Offset from center, positive & negative */
    --offset-x: calc(var(--col-index) - var(--center-x));
    --offset-y: calc(var(--row-index) - var(--center-y));

    /* Absolute distance from center, only positive */
    --distance-x: calc((var(--offset-x) * var(--offset-x)) / var(--center-x));

    /* Absolute distance from center, only positive */
    --distance-y: calc((var(--offset-y) * var(--offset-y)) / var(--center-y));
  }
}

/* Recommended styles for Splitting */
.splitting .word,
.splitting .char {
  display: inline-block;
}

/* Psuedo-element chars */
.splitting .char {
  position: relative;
}

/**
 * Populate the psuedo elements with the character to allow for expanded effects
 * Set to `display: none` by default; just add `display: block` when you want
 * to use the psuedo elements
 */
.splitting .char::before,
.splitting .char::after {
  content: attr(data-char);
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  transition: inherit;
  user-select: none;
}

/* Expanded CSS Variables */

.splitting {
  /* The center word index */
  --word-center: calc((var(--word-total) - 1) / 2);

  /* The center character index */
  --char-center: calc((var(--char-total) - 1) / 2);

  /* The center character index */
  --line-center: calc((var(--line-total) - 1) / 2);
}

.splitting .word {
  /* Pecent (0-1) of the word's position */
  --word-percent: calc(var(--word-index) / var(--word-total));

  /* Pecent (0-1) of the line's position */
  --line-percent: calc(var(--line-index) / var(--line-total));
}

.splitting .char {
  /* Percent (0-1) of the char's position */
  --char-percent: calc(var(--char-index) / var(--char-total));

  /* Offset from center, positive & negative */
  --char-offset: calc(var(--char-index) - var(--char-center));

  /* Absolute distance from center, only positive */
  --distance: calc(
    (var(--char-offset) * var(--char-offset)) / var(--char-center)
  );

  /* Distance from center where -1 is the far left, 0 is center, 1 is far right */
  --distance-sine: calc(var(--char-offset) / var(--char-center));

  /* Distance from center where 1 is far left/far right, 0 is center */
  --distance-percent: calc((var(--distance) / var(--char-center)));
}

.wrapper {
  height: 100%;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tree__box {
  width: 300px;
}

.loading .char {
  overflow: hidden;
  color: transparent;
  letter-spacing: 2px;
}
.loading .char:before,
.loading .char:after {
  visibility: visible;
  color: #000;
}
.loading .char:before {
  animation: _before 1.8s cubic-bezier(0.9, 0, 0.2, 1) infinite;
  animation-delay: calc(0.9s + (0.1s * (var(--char-index))));
  transform: translateY(0);
  opacity: 1;
}
.loading .char:after {
  animation: _after 1.8s cubic-bezier(0.9, 0, 0.2, 1) infinite;
  animation-delay: calc(0.9s + (0.1s * (var(--char-index))));
  transform: translateY(100%);
  opacity: 0;
}

@keyframes _before {
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
@keyframes _after {
  to {
    transform: translate(0);
    opacity: 1;
  }
}
</style>
