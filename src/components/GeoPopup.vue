<template>
  <div
    v-if="getPopupData && getPopupData.show"
    class="geopopup"
    :style="{
      transform: `translate(${getPopupData.x + 10}px, ${getPopupData.y +
        15}px )`
    }"
  >
    <div class="popup-header">
      <i class="material-icons header-icon">bug_report</i>
      <div class="text-area">
        <h4>{{ getPopupData.title }}</h4>
        <span>{{ getPopupData.description }}</span>
      </div>
    </div>
    <div class="content-area">
      <div class="content-item">
        <h4>Confirmed</h4>
        <span>{{ getPopupData.confirmed }}</span>
      </div>
      <div class="content-item">
        <h4>Existing</h4>
        <span>{{ getPopupData.existing }}</span>
      </div>
      <div class="content-item">
        <h4>Deaths</h4>
        <span>{{ getPopupData.deaths }}</span>
      </div>
      <div class="content-item">
        <h4>Recovered</h4>
        <span>{{ getPopupData.recovered }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SlideYUpTransition } from "vue2-transitions";

export default {
  components: {
    SlideYUpTransition
  },
  computed: {
    ...mapGetters("Covid19", ["getPopupData"])
  }
};
</script>

<style lang="scss" scoped>
.geopopup {
  position: absolute;
  width: 250px;
  background: var(--color-secondary);
  top: 0;
  left: 0;
  box-shadow: 0 15px 15px #1c203b3b;
  border-radius: 5px;

  .popup-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--color-primary);
    padding: 10px;
    border-radius: 5px 5px 0 0;

    .header-icon {
      padding: 10px;
      background: var(--color-primary-light);
      border-radius: 50%;
    }

    .text-area {
      margin: 0 10px;
      overflow: hidden;
      h4 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        opacity: 0.5;
      }
    }
  }

  .content-area {
    display: flex;
    flex-direction: column;

    .content-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 15px;

      &:nth-child(odd) {
        background: #0f1b3133;
      }

      &:last-child {
        border-radius: 0 0 5px 5px;
      }
    }
  }
}
</style>
