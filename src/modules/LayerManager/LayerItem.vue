<template>
  <div :class="['layer-item', { active: isActive }]" @click="$emit('click', $event)">
      <i class="material-icons md-18 visibility-icon">{{isActive? 'visibility': 'visibility_off'}}</i>
    <h4 class="title">{{ name }}</h4>
    <p class="value">{{ format(value) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    name: String,
    value: Number
  },
  methods: {
    format(x) {
      return x.toLocaleString()
    }
  }
};
</script>

<style lang="scss" scoped>
.layer-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 15px;
  background: var(--color-primary);
  border-left: 3px solid transparent;
  border-bottom: 1px solid var(--border-color);
  .title {
    text-transform: capitalize;
    flex: 1;
  }

  .visibility-icon {
      margin-right: 10px;
      padding: 5px;
      background: var(--color-primary-light);
      border-radius: 50%;
      opacity: 0.2;
  }

  &.active {
    border-left: 3px solid var(--color-accent);
    color: var(--color-accent);

    .visibility-icon {
        opacity: 1;
    }
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
    border-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    background: var(--color-primary-light);
  }
}
</style>
