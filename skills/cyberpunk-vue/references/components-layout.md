# 布局组件属性参考

## CpContainer 容器

赛博朋克风格页面布局容器。
当子元素包含 CpHeader 或 CpFooter 时自动切换为垂直排列。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `direction` | `'horizontal' \| 'vertical'` | `''` | 排列方向，可选值：horizontal / vertical |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-layout-border-color` | `var(--cp-border, #282830)` | 可控的分割线颜色和发光线颜色 |
| `--cp-layout-glow-color` | `var(--cp-color-primary, #00f0ff)` |  |
| `--cp-header-height` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-divider-margin` | `0` |  |
| `--cp-footer-height` | `var(--cp-layout-footer-height, 60px)` |  |
| `--cp-main-under-header-offset` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-main-under-footer-offset` | `var(--cp-layout-footer-height, 60px)` |  |
| `--cp-main-scrollbar-safe-top` | `var(--cp-main-under-header-offset)` |  |
| `--cp-main-scrollbar-safe-bottom` | `var(--cp-main-under-footer-offset)` |  |
| `--cp-main-body-header-placeholder-height` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-main-body-footer-placeholder-height` | `var(--cp-layout-footer-height, 60px)` |  |
| `--cp-aside-width` | `300px` |  |
| `--cp-aside-under-header-offset` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-aside-under-footer-offset` | `var(--cp-layout-footer-height, 60px)` |  |
| `--cp-aside-scrollbar-safe-top` | `var(--cp-aside-under-header-offset)` |  |
| `--cp-aside-scrollbar-safe-bottom` | `var(--cp-aside-under-footer-offset)` |  |
| `--cp-aside-sidebar-header-placeholder-height` | `var(--cp-layout-header-height, 60px)` |  |
| `--cp-aside-sidebar-footer-placeholder-height` | `var(--cp-layout-footer-height, 60px)` |  |

### 示例

```vue
<CpContainer>
  <CpHeader>头部</CpHeader>
  <CpMain>主内容</CpMain>
  <CpFooter>底部</CpFooter>
</CpContainer>
```

---

## CpRow 行容器

Flex 行容器，配合 CpCol 实现 24 栅格布局系统。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `gutter` | `number` | `0` | 栅格间隔 (px) |
| `justify` | `\| 'start'` | `'start'` | 水平排列方式 |
| `align` | `'top' \| 'middle' \| 'bottom'` | `'top'` | 垂直对齐方式 |
| `tag` | `string` | `'div'` | 自定义元素标签 |
| `wrap` | `boolean` | `true` | 是否自动换行 |
| `span` | `number` | `24` | 栅格占据的列数 (0-24) |
| `offset` | `number` | `0` | 栅格左侧偏移列数 |
| `push` | `number` | `0` | 栅格向右移动列数 |
| `pull` | `number` | `0` | 栅格向左移动列数 |
| `tag` | `string` | `'div'` | 自定义元素标签 |

### 示例

```vue
<CpRow :gutter="20">
  <CpCol :span="12">左半</CpCol>
  <CpCol :span="12">右半</CpCol>
</CpRow>
```

---

## CpPatternBackground 图案背景

图案背景组件，用于展示各种装饰性背景图案。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `pattern` | `'grid' \| 'checkerboard' \| 'dots' \| 'stripes' \| 'cross'` | `'grid'` | 图案类型 |
| `size` | `number \| string` | `20` | 图案尺寸（格子大小/点间距） |
| `color` | `string` | `'currentColor'` | 图案颜色，支持 CSS 颜色值和渐变 |
| `backgroundColor` | `string` | `'transparent'` | 背景颜色 |
| `direction` | `'horizontal' \| 'vertical' \| 'diagonal' \| 'diagonal-reverse'` | `'diagonal'` | 图案方向（仅对 stripes 有效） |
| `opacity` | `number` | `1` | 图案透明度 0-1 |
| `lineWidth` | `number \| string` | `1` | 线条粗细（仅对 grid/stripes/cross 有效） |
| `dotScale` | `number` | `0.1` | 点大小比例（仅对 dots 有效） |
| `cover` | `boolean` | `false` | 是否覆盖整个父容器（绝对定位） |
| `decorative` | `boolean` | `true` | 是否作为装饰层（禁用鼠标事件） |

### 示例

```vue
<!-- 基础网格背景 -->
<CpPatternBackground pattern="grid" color="var(--cp-primary)" />

<!-- 棋盘格背景 -->
<CpPatternBackground pattern="checkerboard" :size="20" />

<!-- 装饰层覆盖 -->
<CpPatternBackground pattern="dots" cover decorative :opacity="0.1" />
```

---

