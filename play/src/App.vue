<script setup lang="ts">

</script>

<template>
  <div class="playground">
    <header class="playground-header">
      <h1>Cyberpunk Vue Playground</h1>
      <p>Dialog before-close behavior test</p>
    </header>

    <main class="playground-content">
      <section class="demo-section" />
    </main>
  </div>
</template>

<style scoped lang="scss">
.playground {
  min-height: 100vh;
  padding: 24px;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
}

.playground-header {
  text-align: center;
  margin-bottom: 48px;
  padding: 32px;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));

  h1 {
    font-size: 2.5rem;
    background: linear-gradient(90deg, #00ffff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
  }
}

.playground-content {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 4px;

  h2 {
    font-size: 1.5rem;
    color: #00ffff;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 255, 255, 0.2);
  }
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.tips {
  margin: 16px 0;
  opacity: 0.8;
}

.dialog-desc {
  margin-top: 8px;
  opacity: 0.7;
}
</style>
