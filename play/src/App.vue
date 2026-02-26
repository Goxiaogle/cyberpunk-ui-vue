<script setup lang="ts">
import {
  CpContainer,
  CpHeader,
  CpAside,
  CpMain,
  CpMenu,
  CpMenuItem,
  CpSubMenu,
  CpButton,
  CpCard,
  CpPatternBackground,
  CpIcon
} from '@cyberpunk-vue/components'
import {
  SpeedometerOutline,
  SettingsOutline,
  CubeOutline,
  PulseOutline,
  PersonOutline,
  LockClosedOutline,
  DesktopOutline
} from '@vicons/ionicons5'
</script>

<template>
  <div class="playground">
    <CpContainer class="layout-container">
      <CpHeader class="layout-header">
        <div class="logo">
          <span class="logo-text">CYBERPUNK</span>
          <span class="logo-sub">UI-VUE</span>
        </div>
        <div class="header-actions">
          <CpButton type="primary" size="sm" variant="neon">PLAYGROUND</CpButton>
          <CpButton type="primary" size="sm" variant="outline">DOCS</CpButton>
        </div>
      </CpHeader>
      <CpContainer class="layout-body">
        <CpAside width="240px" class="layout-aside">
          <CpMenu default-active="1" class="side-menu">
            <CpMenuItem index="1">
              <template #icon>
                <CpIcon>
                  <SpeedometerOutline />
                </CpIcon>
              </template>
              Dashboard
            </CpMenuItem>
            <CpSubMenu index="2">
              <template #title>Settings</template>
              <template #icon>
                <CpIcon>
                  <SettingsOutline />
                </CpIcon>
              </template>
              <CpMenuItem index="2-1">
                 <template #icon><CpIcon><PersonOutline /></CpIcon></template>
                 Profile
              </CpMenuItem>
              <CpMenuItem index="2-2">
                 <template #icon><CpIcon><LockClosedOutline /></CpIcon></template>
                 Security
              </CpMenuItem>
              <CpMenuItem index="2-3">
                 <template #icon><CpIcon><DesktopOutline /></CpIcon></template>
                 Display
              </CpMenuItem>
            </CpSubMenu>
            <CpMenuItem index="3">
              <template #icon>
                <CpIcon>
                  <CubeOutline />
                </CpIcon>
              </template>
              Components
            </CpMenuItem>
            <CpMenuItem index="4">
              <template #icon>
                <CpIcon>
                  <PulseOutline />
                </CpIcon>
              </template>
              Analytics
            </CpMenuItem>
          </CpMenu>
        </CpAside>
        <CpMain class="layout-main">
          <!-- Background Pattern -->
          <CpPatternBackground
            pattern="grid"
            :size="40"
            :line-width="1"
            color="var(--cp-color-primary)"
            :opacity="0.05"
            cover
            decorative
          />

          <section class="content-section">
            <h2 class="section-title">System Overview</h2>
            <p class="section-desc">
              Restructured layout using <code>CpContainer</code>, <code>CpMenu</code>, and <code>CpCard</code>.
              The theme color has been successfully migrated to <strong>ORANGE</strong>.
            </p>

            <div class="demo-card-grid">

              <CpCard variant="outline">
                123
                <CpCard type="primary" variant="outline">
                  456
                </CpCard>
              </CpCard>

              <CpCard
                v-for="i in 3"
                :key="i"
                :title="`MOD-0${i}`"
                variant="outline"
                type="primary"
                header-border
                hover-scale
              >
                 <template #extra>
                   <span class="status-indicator">● ONLINE</span>
                 </template>
                 <p class="card-content">System status: Operational. All systems go.</p>
                 <template #footer>
                   <div class="card-footer-actions">
                     <CpButton type="primary" size="sm" block>RUN TASK</CpButton>
                   </div>
                 </template>
              </CpCard>
            </div>

            <h3 class="subsection-title">Theme Colors</h3>
            <div class="demo-row">
              <CpButton type="primary">Primary</CpButton>
              <CpButton type="success">Success</CpButton>
              <CpButton type="warning">Warning</CpButton>
              <CpButton type="error">Error</CpButton>
              <CpButton type="info">Info</CpButton>
            </div>

             <h3 class="subsection-title">Card Variants</h3>
             <div class="demo-card-grid">
               <CpCard title="Neon Variant" variant="neon" type="warning">
                 <p>Neon glowing effect for high visibility modules.</p>
               </CpCard>
               <CpCard title="Solid Variant" variant="solid" type="error">
                 <p>Solid background for critical alerts.</p>
               </CpCard>
               <CpCard title="Cyber Variant" variant="cyber" type="success">
                 <p>Cyber style with clipped corners.</p>
               </CpCard>
             </div>

             <!-- Add extra content to demonstrate scrolling -->
             <div style="height: 200px"></div>
          </section>
        </CpMain>
      </CpContainer>
    </CpContainer>
  </div>
</template>

<style lang="scss">
/*
  Use specific body selector to override theme defaults
  defined in :root or body
*/
body {
  /* Override theme to Orange via CSS Variables */
  --cp-color-primary: #ff8c00;
  --cp-color-primary-light: rgba(255, 140, 0, 0.2);
  --cp-color-primary-dark: #cc7000;
  --cp-color-primary-text: #0a0a0f; /* Dark text on bright orange */

  --cp-color-primary-border: var(--cp-color-primary);
  --cp-color-primary-hover: rgba(255, 140, 0, 0.1);

  --cp-glow-primary: 0 0 10px var(--cp-color-primary), 0 0 20px var(--cp-color-primary-light);

  --cp-border-active: var(--cp-color-primary);
  --cp-border-focus: var(--cp-color-primary);

  margin: 0;
  padding: 0;
  overflow: hidden;
}

/* Custom Scrollbar for Webkit browsers */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--cp-bg-base);
}

::-webkit-scrollbar-thumb {
  background: var(--cp-border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--cp-color-primary);
}

.playground {
  height: 100vh;
  background-color: var(--cp-bg-deep);
  color: var(--cp-text-primary);
  font-family: 'Rajdhani', 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
}

.layout-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.layout-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: var(--cp-bg-base);
  border-bottom: 2px solid var(--cp-color-primary);
  box-shadow: var(--cp-glow-primary);
  z-index: 10;
  position: relative;

  .logo {
    display: flex;
    flex-direction: column;

    .logo-text {
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: 4px;
      color: var(--cp-color-primary);
      text-shadow: 2px 2px 0px var(--cp-color-primary-dark);
    }

    .logo-sub {
      font-size: 0.75rem;
      letter-spacing: 8px;
      color: var(--cp-text-secondary);
      margin-top: 2px;
    }
  }

  .header-actions {
    display: flex;
    gap: 16px;
  }
}

.layout-body {
  flex: 1;
  overflow: hidden; /* Prevent double scrollbars */
  display: flex;
}

.layout-aside {
  background-color: var(--cp-bg-elevated);
  border-right: 1px solid var(--cp-border-default);
  z-index: 5;
  height: 100%;
  overflow-y: auto;
}

.side-menu {
  border-right: none !important;
  background-color: transparent !important;
}

.layout-main {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  position: relative;
  height: 100%;
}

.content-section {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding-bottom: 60px; /* Ensure bottom content is not cut off */

  .section-title {
    color: var(--cp-color-primary);
    margin-bottom: 8px;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 800;
    font-style: italic;
    text-shadow: 0 0 10px var(--cp-color-primary-light);
  }

  .subsection-title {
    color: var(--cp-text-primary);
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 1.5rem;
    border-left: 4px solid var(--cp-color-primary);
    padding-left: 12px;
  }

  .section-desc {
    margin-bottom: 48px;
    color: var(--cp-text-secondary);
    font-size: 1.1rem;
    border-left: 4px solid var(--cp-color-primary);
    padding-left: 16px;
  }
}

.demo-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.status-indicator {
  font-size: 0.75rem;
  color: var(--cp-color-success);
  font-weight: bold;
}

.card-content {
  color: var(--cp-text-secondary);
  margin-bottom: 0;
}

.card-footer-actions {
  display: flex;
  justify-content: flex-end;
}

.demo-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--cp-border-default);
  border-radius: 4px;
}
</style>
