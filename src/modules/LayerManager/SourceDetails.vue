<template>
  <div class="source-details">
    <label>Last updated on</label>
    <p>{{ lastUpdated }} from <a :href="sourceURL" target="_blank" rel="noopener">{{sourceName}}</a></p>
  </div>
</template>

<script>
export default {
  props: {
    lastUpdated: String,
    sourceURL: String,
    sourceName: String
  }
};
</script>

<style lang="scss" scoped>
.source-details {
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
  padding: 15px;
  border-radius: 0 0 5px 5px;

  label {
      font-size: 0.8rem;
      opacity: 0.7;
  }

  p {
      margin: 0;
      padding: 5px 0;
      
      a {
          color: var(--color-accent);
      }
  }
}
</style>
