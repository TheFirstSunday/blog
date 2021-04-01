<template>
  <div class="side-bar">
    <div class="bar-info">
      <div class="info-avatar">
        <el-image :src="avatar" />
      </div>
      <div class="info-title"> Sunday </div>
      <div class="info-intro">
        <el-tooltip effect="dark" :content="motto" :disabled="motto.length < 22" placement="top">
          <div class="intro-motto">
            {{ motto }}
          </div>
        </el-tooltip>
      </div>
      <div class="info-icon">
        <el-tooltip effect="dark" content="Github" placement="top">
          <a href="https://github.com/TheFirstSunday" target="_blank" class="icon-svg">
            <svg
              t="1617290442983"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1121"
              width="32"
              height="32"
            >
              <path
                d="M938.666667 512a426.666667 426.666667 0 0 1-291.84 404.48 22.186667 22.186667 0 0 1-19.2-2.986667 21.76 21.76 0 0 1-8.96-17.493333v-113.92a170.666667 170.666667 0 0 0-21.333334-87.893333 10.666667 10.666667 0 0 1 0-11.52 11.52 11.52 0 0 1 8.533334-5.973334c104.106667-10.666667 162.133333-52.053333 162.133333-164.693333a200.96 200.96 0 0 0-50.773333-143.36 183.466667 183.466667 0 0 0 8.106666-51.2 184.746667 184.746667 0 0 0-6.4-46.08 20.906667 20.906667 0 0 0-22.613333-15.36 189.866667 189.866667 0 0 0-104.106667 50.346667 422.826667 422.826667 0 0 0-160.426666 0A189.866667 189.866667 0 0 0 327.68 256a20.906667 20.906667 0 0 0-22.613333 15.36A184.746667 184.746667 0 0 0 298.666667 317.44a183.466667 183.466667 0 0 0 8.106666 51.2A200.96 200.96 0 0 0 256 512c0 118.613333 64.426667 158.293333 182.613333 168.106667a158.293333 158.293333 0 0 0-29.44 65.28v5.12a29.013333 29.013333 0 0 0 0 5.973333 25.173333 25.173333 0 0 1-27.306666 21.76 42.666667 42.666667 0 0 1-18.346667-5.12 227.84 227.84 0 0 1-60.586667-53.76 430.506667 430.506667 0 0 0-34.133333-34.56 116.906667 116.906667 0 0 0-25.173333-16.64 20.906667 20.906667 0 0 0-20.48 0 21.333333 21.333333 0 0 0-9.813334 17.92v2.56a21.333333 21.333333 0 0 0 9.813334 17.92 193.706667 193.706667 0 0 1 39.253333 44.8 282.026667 282.026667 0 0 0 67.84 73.386667 105.813333 105.813333 0 0 0 59.733333 17.92h15.36V896a21.76 21.76 0 0 1-8.96 17.493333 22.186667 22.186667 0 0 1-19.2 2.986667A426.666667 426.666667 0 1 1 938.666667 512z"
                p-id="1122"
                fill="#bba477"
              ></path>
            </svg>
          </a>
        </el-tooltip>
        <el-tooltip effect="dark" content="管理后台" placement="top">
          <a href="https://github.com/TheFirstSunday" target="_blank" class="icon-svg">
            <svg
              t="1617290844257"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1977"
              width="32"
              height="32"
            >
              <path
                d="M878.159424 565.40635l-327.396585 0c-11.307533 0-20.466124 9.168824-20.466124 20.466124l0 327.396585c0 11.307533 9.15859 20.466124 20.466124 20.466124l327.396585 0c11.2973 0 20.466124-9.15859 20.466124-20.466124l0-327.396585C898.625548 574.575174 889.456724 565.40635 878.159424 565.40635zM857.6933 892.802936l-286.464337 0 0-286.464337 286.464337 0L857.6933 892.802936zM430.606225 565.40635l-327.396585 0c-11.2973 0-20.466124 9.168824-20.466124 20.466124l0 327.396585c0 11.307533 9.168824 20.466124 20.466124 20.466124l327.396585 0c11.307533 0 20.466124-9.15859 20.466124-20.466124l0-327.396585C451.072349 574.575174 441.913758 565.40635 430.606225 565.40635zM410.140101 892.802936l-286.464337 0 0-286.464337 286.464337 0L410.140101 892.802936zM430.606225 115.601878l-327.396585 0c-11.2973 0-20.466124 9.15859-20.466124 20.466124l0 327.386352c0 11.307533 9.168824 20.466124 20.466124 20.466124l327.396585 0c11.307533 0 20.466124-9.15859 20.466124-20.466124l0-327.386352C451.072349 124.760468 441.913758 115.601878 430.606225 115.601878zM410.140101 442.98823l-286.464337 0 0-286.454104 286.464337 0L410.140101 442.98823zM965.529307 277.744745l-214.433814-214.433814c-3.837398-3.837398-9.046027-5.996574-14.46955-5.996574-5.433756 0-10.632151 2.159176-14.479783 5.996574l-214.433814 214.433814c-7.992021 7.992021-7.992021 20.957311 0 28.949332l214.433814 214.433814c4.001127 3.990894 9.240455 5.996574 14.479783 5.996574 5.229095 0 10.468422-2.00568 14.46955-5.996574l214.433814-214.433814c3.837398-3.837398 5.996574-9.046027 5.996574-14.46955C971.525881 286.790772 969.366705 281.582143 965.529307 277.744745zM736.625944 477.709009l-185.494715-185.484482 185.494715-185.494715 185.484482 185.494715L736.625944 477.709009z"
                p-id="1978"
                fill="#bba477"
              ></path>
            </svg>
          </a>
        </el-tooltip>
        <el-tooltip effect="dark" content="掘金" placement="top">
          <a href="https://github.com/TheFirstSunday" target="_blank" class="icon-svg">
            <svg id="icon-juejin" viewBox="0 0 1024 1024">
              <path
                d="M208 479l-44 36 349 276 347-276-44-36-304 239-304-239z"
                fill="#bba477"
              ></path>
              <path
                d="M345 368l-42 36 209 166 210-167-46-34-164 130-167-131zM511 235l-70 55 71 56 68-55-69-56z"
                fill="#bba477"
              ></path>
            </svg>
          </a>
        </el-tooltip>
        <el-tooltip effect="dark" content="2621949203@qq.com" placement="top">
          <a href="mailto:2621949203@qq.com" class="el-icon-message"></a>
        </el-tooltip>
      </div>
    </div>

    <div class="bar-tag">
      <div class="tag-title">文章排序</div>
      <div class="link-empty"> 暂无文章 </div>
    </div>
    <div class="bar-tag">
      <div class="tag-title"> 文章标签 </div>
      <div class="link-empty"> 暂无标签 </div>
    </div>
    <div class="bar-tag">
      <div class="tag-title">友情链接</div>
      <div class="link-list">
        <div class="link-empty"> 暂无链接 </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import avatar from '@/assets/images/avatar.png'

  export default defineComponent({
    name: 'LayoutSideBar',
    data() {
      return {
        motto: '愿你历尽千帆, 归来仍是少年!',
        avatar: avatar
      }
    }
  })
</script>

<style lang="less" scoped>
  .side-bar {
    width: 350px;
    height: calc(100% - 100px);
    margin-left: 30px;
    position: sticky;
    top: 100px;

    .bar-info {
      position: relative;
      padding: 50px 20px 40px;
      background-color: #fff;
      border-radius: 5px;
      color: #bba477;
      margin-bottom: 20px;

      .info-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: -40px;
        transform: translateX(-50%);
        cursor: pointer;
      }

      .info-title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        letter-spacing: 2px;
      }

      .info-intro {
        .intro-motto {
          margin: 20px 0;
          font-weight: 600;
          text-align: center;
          font-size: 14px;
          letter-spacing: 1px;
          @include overRow;
        }
      }
      .info-icon {
        display: flex;
        align-items: center;
        justify-content: space-around;

        a {
          font-size: 32px;
          color: #bba477;
        }

        .icon-svg {
          width: 32px;
          height: 32px;
        }
      }
    }
    .bar-tag {
      position: relative;
      padding: 0 20px 20px;
      background-color: #fff;
      border-radius: 5px;
      margin-bottom: 20px;

      .tag-title {
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #bba477;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 2px;
        position: relative;

        .all-article {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .tag-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .list-box {
          margin: 0 20px 15px 0;
          cursor: pointer;
        }

        .list-active {
          border: 1px dashed rgba(0, 0, 0, 0.3);
        }
      }
      .sort-list {
        justify-content: space-around;

        .list-box {
          margin-right: 0;
        }
      }
      .link-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .link-box {
          width: 50%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #333;
          font-size: 16px;
          padding: 0 5px;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          &:hover {
            background-color: #f7f7f7;
          }
        }
      }
      .link-empty {
        width: 100%;
        text-align: center;
        letter-spacing: 2px;
        color: #909399;
      }
    }
  }
</style>
