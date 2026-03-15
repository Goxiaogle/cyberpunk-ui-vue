/**
 * Batch JSDoc completion script
 * Usage: node scripts/complete-jsdoc.mjs
 */
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(fileURLToPath(import.meta.url), '..', '..')

// Component doc data: { description?, slots?, exposes?, example? }
const DOCS = {
  spacerProps: {
    description: '间距组件，用于快速在元素之间添加间距',
  },
  iconProps: {
    slots: [['default', '默认插槽，用于传入自定义 SVG 内容']],
  },
  textProps: {
    slots: [['default', '文字内容']],
    example: '<CpText type="primary">主色文字</CpText>',
  },
  dividerProps: {
    example: '<CpDivider />\n<CpDivider type="primary" variant="gradient" />',
  },
  configProviderProps: {
    slots: [['default', '应用根内容']],
    example: '<CpConfigProvider :defaults="{ CpButton: { shape: \'round\' } }">\n  <App />\n</CpConfigProvider>',
  },
  formProps: {
    description: '表单容器，提供表单布局（label 位置、行内模式）、验证管理和全局配置注入',
    slots: [['default', '表单内容（CpFormItem 组合）']],
    exposes: [
      ['validate()', '校验全部字段，返回 Promise'],
      ['validateField(prop)', '校验指定字段'],
      ['resetFields()', '重置所有字段到初始值并清除验证'],
      ['clearValidate(props?)', '仅清除验证状态'],
    ],
    example: '<CpForm :model="formData" :rules="rules" label-position="right">\n  <CpFormItem label="用户名" prop="username" required>\n    <CpInput v-model="formData.username" />\n  </CpFormItem>\n</CpForm>',
  },
  formItemProps: {
    description: '表单项组件，包含标签、内容区和错误信息区域，支持验证规则和 Form 上下文继承',
    slots: [
      ['default', '表单控件'],
      ['label', '自定义标签内容'],
      ['error', '自定义错误信息 (作用域: { error })'],
    ],
    exposes: [
      ['validate()', '验证该表单项'],
      ['resetField()', '重置该表单项'],
      ['clearValidate()', '清除验证状态'],
      ['validateState', '当前验证状态 (ref)'],
      ['validateMessage', '当前验证信息 (ref)'],
    ],
    example: '<CpFormItem label="名称" prop="name" required reserve-error-space>\n  <CpInput v-model="formData.name" />\n</CpFormItem>',
  },
  inputProps: {
    slots: [['prefix', '输入框前缀'], ['suffix', '输入框后缀']],
    exposes: [
      ['focus()', '使输入框聚焦'],
      ['blur()', '使输入框失焦'],
      ['inputRef', '原生 input 元素引用'],
    ],
    example: '<CpInput v-model="username" placeholder="请输入用户名" />\n<CpInput v-model="password" type="password" show-password />',
  },
  inputNumberProps: {
    example: '<CpInputNumber v-model="count" :min="0" :max="100" />\n<CpInputNumber v-model="price" :step="0.5" :precision="2" />',
  },
  textareaProps: {
    example: '<CpTextarea v-model="content" :rows="4" placeholder="请输入内容" />\n<CpTextarea v-model="content" show-word-limit :maxlength="200" />',
  },
  switchProps: {
    example: '<CpSwitch v-model="enabled" />\n<CpSwitch v-model="enabled" active-text="ON" inactive-text="OFF" />',
  },
  sliderProps: {
    example: '<CpSlider v-model="value" />\n<CpSlider v-model="range" range />',
  },
  dropdownProps: {
    example: '<CpDropdown v-model="selected" :options="options" />\n<CpDropdown v-model="selected" :options="options" filterable />',
  },
  checkboxProps: {
    example: '<CpCheckbox v-model="checked">同意协议</CpCheckbox>',
  },
  checkboxGroupProps: {
    example: '<CpCheckboxGroup v-model="selected">\n  <CpCheckbox label="A">选项 A</CpCheckbox>\n  <CpCheckbox label="B">选项 B</CpCheckbox>\n</CpCheckboxGroup>',
  },
  radioProps: {
    example: '<CpRadio v-model="picked" value="A">选项 A</CpRadio>',
  },
  radioGroupProps: {
    example: '<CpRadioGroup v-model="picked">\n  <CpRadio value="A">选项 A</CpRadio>\n  <CpRadio value="B">选项 B</CpRadio>\n</CpRadioGroup>',
  },
  segmentedProps: {
    example: '<CpSegmented v-model="active" :options="options" type="primary" />',
  },
  uploadProps: {
    slots: [
      ['default', '完全替换触发区域（隐藏默认 drag / card / button）'],
      ['placeholder', '自定义触发区内部内容 (作用域: { mode })'],
      ['card-actions', '自定义 picture-card 的 hover 操作面板 (作用域: { file, handleRemove, handlePreview, handleReplace })'],
    ],
    exposes: [
      ['submit()', '手动触发上传（autoUpload=false 时使用）'],
      ['clearFiles()', '清空文件列表'],
    ],
    example: '<CpUpload v-model="fileList" action="/api/upload" />\n<CpUpload v-model="fileList" action="/api/upload" drag />',
  },
  cardProps: {
    slots: [
      ['default', '卡片主体内容'],
      ['cover', '卡片封面区域（位于头部之前）'],
      ['header', '自定义头部'],
      ['title', '仅标题区域'],
      ['extra', '头部右侧操作'],
      ['footer', '卡片底部'],
      ['overlay', '悬停覆层内容'],
      ['loading', '自定义加载中内容（替代默认 CpLoading + 文字）'],
    ],
    example: '<CpCard title="系统信息"><p>内容</p></CpCard>\n<CpCard variant="semi" shape="round">半透明卡片</CpCard>',
  },
  imageProps: {
    slots: [['placeholder', '自定义加载占位'], ['error', '自定义错误状态']],
    example: '<CpImage src="/image.jpg" lazy />\n<CpImage src="/image.jpg" preview />',
  },
  imagePreviewProps: {
    exposes: [
      ['close()', '关闭预览'],
      ['prev()', '上一张'],
      ['next()', '下一张'],
      ['zoomIn()', '放大'],
      ['zoomOut()', '缩小'],
      ['rotateLeft()', '左旋 90 度'],
      ['rotateRight()', '右旋 90 度'],
      ['resetTransform()', '还原缩放/旋转'],
    ],
    example: '<CpImagePreview v-model="showPreview" :url-list="urls" />',
  },
  avatarProps: {
    example: '<CpAvatar src="/avatar.jpg" />\n<CpAvatar src="/avatar.jpg" size="xl" shape="clip" />',
  },
  avatarGroupProps: {
    slots: [['default', '多个 CpAvatar']],
    example: '<CpAvatarGroup>\n  <CpAvatar src="/avatar-1.png" />\n  <CpAvatar src="/avatar-2.png" />\n</CpAvatarGroup>',
  },
  progressProps: {
    slots: [['default', '自定义进度文字内容（覆盖默认百分比）']],
    example: '<CpProgress :percentage="60" />\n<CpProgress type="circle" :percentage="75" />',
  },
  popoverProps: {
    slots: [
      ['default', '触发器内容'],
      ['content', '弹层内容区域（替代 content prop）'],
      ['popover', '完全自定义弹层内部'],
    ],
    exposes: [
      ['open()', '打开弹层'],
      ['close()', '关闭弹层'],
      ['toggle()', '切换弹层'],
      ['updatePosition()', '更新位置'],
    ],
    example: '<CpPopover content="提示文本" tooltip>\n  <CpButton>悬停提示</CpButton>\n</CpPopover>',
  },
  statusIndicatorProps: {
    example: '<CpStatusIndicator type="success" />\n<CpStatusIndicator type="error" pulse />',
  },
  dialogProps: {
    slots: [
      ['default', '对话框主体内容'],
      ['cover', '封面区域（位于头部上方）'],
      ['header', '自定义整个头部（覆盖 title + 关闭按钮）'],
      ['title', '仅标题区域'],
      ['footer', '底部操作区域 (作用域: { close, confirm })'],
    ],
    example: '<CpDialog v-model="visible" title="系统通知">\n  <p>内容</p>\n</CpDialog>',
  },
  treeProps: {
    slots: [
      ['default', '自定义节点内容 (作用域: { node, data })'],
      ['icon', '自定义展开/叶子图标 (作用域: { node, data, expanded })'],
      ['empty', '空数据时的展示内容'],
    ],
    example: '<CpTree :data="treeData" default-expand-all />\n<CpTree :data="treeData" show-checkbox check-strictly />',
  },
  treeNodeProps: {},
  badgeProps: {
    slots: [['default', '被包裹的目标元素']],
    example: '<CpBadge :value="5">\n  <CpButton>消息</CpButton>\n</CpBadge>',
  },
  tagProps: {
    slots: [['default', '标签文本内容']],
    example: '<CpTag type="primary">标签</CpTag>\n<CpTag closable @close="handleClose">可关闭</CpTag>',
  },
  emptyProps: {
    slots: [
      ['default', '底部操作区域（按钮等）'],
      ['image', '自定义图标/图片（替代内置 SVG）'],
      ['title', '自定义标题内容'],
      ['description', '自定义描述内容'],
    ],
    example: '<CpEmpty />\n<CpEmpty title="暂无数据" description="点击刷新加载数据">\n  <CpButton type="primary" size="sm">刷新</CpButton>\n</CpEmpty>',
  },
  notificationProps: {
    slots: [
      ['default', '自定义消息内容'],
      ['title', '自定义标题'],
      ['icon', '自定义图标'],
      ['actions', '操作区（按钮等）'],
    ],
    example: '<CpNotification v-model="visible" title="系统通知" message="操作成功" type="success" />',
  },
  tableProps: {
    description: '赛博朋克风格数据表格，支持排序、多选、条纹、边框、固定表头、树形展开。配合 CpTableColumn 声明式定义列',
    slots: [
      ['default', 'CpTableColumn 列定义'],
      ['empty', '空数据自定义内容 (默认: CpEmpty 组件)'],
      ['loading', '自定义加载中内容（替代默认 CpLoading + 文字）'],
    ],
    exposes: [
      ['clearSelection()', '清空选择'],
      ['getSelectionRows()', '获取选中行数组'],
      ['sort(prop, order)', '编程式排序'],
      ['setCurrentRow(row)', '设置当前行'],
    ],
    example: '<CpTable :data="tableData" stripe border>\n  <CpTableColumn prop="name" label="姓名" sortable />\n  <CpTableColumn prop="age" label="年龄" sortable />\n</CpTable>',
  },
  tableColumnProps: {
    slots: [
      ['default', '自定义单元格 (作用域: { row, column, $index })'],
      ['header', '自定义表头 (作用域: { column, $index })'],
    ],
  },
  timelineProps: {
    slots: [['default', 'CpTimelineItem 子项']],
    example: '<CpTimeline>\n  <CpTimelineItem timestamp="2077.04.15">系统核心唤醒</CpTimelineItem>\n  <CpTimelineItem timestamp="2077.04.16" type="success">协议初始化</CpTimelineItem>\n</CpTimeline>',
  },
  timelineItemProps: {
    slots: [
      ['default', '主内容区域'],
      ['timestamp', '自定义时间戳内容'],
      ['dot', '自定义节点（覆盖默认圆点）'],
      ['extra', '附加操作区域，在主内容下方'],
      ['connector', '自定义连线（替换默认直线）'],
    ],
  },
  menuProps: {
    slots: [['default', '菜单内容（CpMenuItem / CpSubMenu 等组合）']],
    example: '<CpMenu default-active="1" @select="handleSelect">\n  <CpMenuItem index="1" :icon="HomeIcon">首页</CpMenuItem>\n</CpMenu>',
  },
  menuItemProps: {
    slots: [['default', '菜单项文本'], ['icon', '自定义图标']],
  },
  subMenuProps: {
    slots: [
      ['title', '子菜单标题'],
      ['default', '子菜单项内容'],
      ['icon', '自定义图标'],
    ],
  },
  menuItemGroupProps: {
    slots: [['title', '自定义标题'], ['default', '分组内菜单项']],
  },
  menuNavProps: {
    example: '<CpMenuNav :data="menuData" default-active="1" />',
  },
  paginationProps: {
    slots: [
      ['prev', '上一页按钮 (作用域: { disabled, onClick, currentPage })'],
      ['next', '下一页按钮 (作用域: { disabled, onClick, currentPage })'],
      ['pager', '整个页码区 (作用域: { pages, currentPage, pageCount, onPageClick })'],
      ['pager-item', '单个页码项 (作用域: { page, active, disabled, onClick })'],
    ],
    example: '<CpPagination v-model:currentPage="page" :total="200" layout="total, sizes, prev, pager, next, jumper" type="primary" />',
  },
  breadcrumbProps: {
    slots: [['default', 'CpBreadcrumbItem 列表']],
    example: '<CpBreadcrumb>\n  <CpBreadcrumbItem>首页</CpBreadcrumbItem>\n  <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>\n</CpBreadcrumb>',
  },
  breadcrumbItemProps: {
    slots: [
      ['default', '面包屑项文本内容'],
      ['separator', '自定义分隔符（覆盖父级 separator/separatorIcon）'],
    ],
    example: '<CpBreadcrumbItem to="/">控制台</CpBreadcrumbItem>',
  },
  containerProps: {
    slots: [['default', '容器内容（CpHeader / CpFooter / CpMain / CpAside 等）']],
    example: '<CpContainer>\n  <CpHeader>头部</CpHeader>\n  <CpMain>主内容</CpMain>\n  <CpFooter>底部</CpFooter>\n</CpContainer>',
  },
  headerProps: {
    slots: [['default', '顶栏内容']],
    example: '<CpHeader>Logo / 导航</CpHeader>',
  },
  footerProps: {
    slots: [['default', '底栏内容']],
  },
  mainProps: {
    slots: [['default', '主要内容']],
  },
  asideProps: {
    slots: [['default', '侧边栏内容']],
    example: '<CpAside width="220px">导航菜单</CpAside>',
  },
  rowProps: {
    slots: [['default', '行内容（CpCol 组合）']],
    example: '<CpRow :gutter="16">\n  <CpCol :span="8">1/3</CpCol>\n  <CpCol :span="8">1/3</CpCol>\n  <CpCol :span="8">1/3</CpCol>\n</CpRow>',
  },
  colProps: {
    slots: [['default', '列内容']],
    example: '<CpCol :span="6">span-6</CpCol>',
  },
  patternBackgroundProps: {
    example: '<CpPatternBackground pattern="grid" color="var(--cp-color-primary)" />',
  },
}

const FILES = [
  'packages/components/button/src/button.ts',
  'packages/components/icon/src/icon.ts',
  'packages/components/loading/src/loading.ts',
  'packages/components/text/src/text.ts',
  'packages/components/divider/src/divider.ts',
  'packages/components/spacer/src/spacer.ts',
  'packages/components/config-provider/src/config-provider.ts',
  'packages/components/form/src/form.ts',
  'packages/components/form-item/src/form-item.ts',
  'packages/components/input/src/input.ts',
  'packages/components/input-number/src/input-number.ts',
  'packages/components/textarea/src/textarea.ts',
  'packages/components/switch/src/switch.ts',
  'packages/components/slider/src/slider.ts',
  'packages/components/dropdown/src/dropdown.ts',
  'packages/components/checkbox/src/checkbox.ts',
  'packages/components/checkbox-group/src/checkbox-group.ts',
  'packages/components/radio/src/radio.ts',
  'packages/components/radio-group/src/radio-group.ts',
  'packages/components/segmented/src/segmented.ts',
  'packages/components/upload/src/upload.ts',
  'packages/components/card/src/card.ts',
  'packages/components/image/src/image.ts',
  'packages/components/image-preview/src/image-preview.ts',
  'packages/components/avatar/src/avatar.ts',
  'packages/components/avatar/src/avatar-group.ts',
  'packages/components/progress/src/progress.ts',
  'packages/components/popover/src/popover.ts',
  'packages/components/status-indicator/src/status-indicator.ts',
  'packages/components/dialog/src/dialog.ts',
  'packages/components/tree/src/tree.ts',
  'packages/components/tree/src/tree-node.ts',
  'packages/components/badge/src/badge.ts',
  'packages/components/tag/src/tag.ts',
  'packages/components/empty/src/empty.ts',
  'packages/components/notification/src/notification.ts',
  'packages/components/table/src/table.ts',
  'packages/components/table-column/src/table-column.ts',
  'packages/components/timeline/src/timeline.ts',
  'packages/components/timeline-item/src/timeline-item.ts',
  'packages/components/menu/src/menu.ts',
  'packages/components/menu-item/src/menu-item.ts',
  'packages/components/sub-menu/src/sub-menu.ts',
  'packages/components/menu-item-group/src/menu-item-group.ts',
  'packages/components/menu-nav/src/menu-nav.ts',
  'packages/components/pagination/src/pagination.ts',
  'packages/components/breadcrumb/src/breadcrumb.ts',
  'packages/components/breadcrumb-item/src/breadcrumb-item.ts',
  'packages/components/container/src/container.ts',
  'packages/components/row/src/row.ts',
  'packages/components/col/src/col.ts',
  'packages/components/pattern-background/src/pattern-background.ts',
]

let totalUpdated = 0
let totalSkipped = 0

for (const rel of FILES) {
  const abs = join(ROOT, rel)
  let content
  try {
    content = await readFile(abs, 'utf-8')
  } catch (e) {
    console.log('WARN file not found: ' + rel)
    continue
  }

  let modified = false
  const propsRegex = /export\s+const\s+(\w+Props)\s*=/g
  let match

  const propsNames = []
  while ((match = propsRegex.exec(content))) {
    propsNames.push({ name: match[1], index: match.index })
  }

  // Process from end to avoid index shifting
  for (let i = propsNames.length - 1; i >= 0; i--) {
    const propsName = propsNames[i].name
    const propsIndex = propsNames[i].index
    const doc = DOCS[propsName]
    if (!doc || Object.keys(doc).length === 0) {
      totalSkipped++
      continue
    }

    const before = content.slice(0, propsIndex)
    const jsdocEndIdx = before.lastIndexOf('*/')
    if (jsdocEndIdx === -1) {
      totalSkipped++
      continue
    }

    const jsdocStartIdx = before.lastIndexOf('/**')
    if (jsdocStartIdx === -1) {
      totalSkipped++
      continue
    }

    const jsdocBlock = content.slice(jsdocStartIdx, jsdocEndIdx + 2)

    const hasDescription = jsdocBlock.includes('@description')
    const hasSlots = jsdocBlock.includes('@slots')
    const hasExposes = jsdocBlock.includes('@exposes')
    const hasExample = jsdocBlock.includes('@example')

    const newTags = []

    if (doc.description && !hasDescription) {
      newTags.push(' * @description ' + doc.description)
    }

    if (doc.slots && doc.slots.length > 0 && !hasSlots) {
      for (const slot of doc.slots) {
        newTags.push(' * @slots ' + slot[0] + ' - ' + slot[1])
      }
    }

    if (doc.exposes && doc.exposes.length > 0 && !hasExposes) {
      for (const expose of doc.exposes) {
        newTags.push(' * @exposes ' + expose[0] + ' - ' + expose[1])
      }
    }

    if (doc.example && !hasExample) {
      newTags.push(' * @example')
      newTags.push(' * ' + '`'.repeat(3) + 'vue')
      var exLines = doc.example.split('\n')
      for (var k = 0; k < exLines.length; k++) {
        newTags.push(' * ' + exLines[k])
      }
      newTags.push(' * ' + '`'.repeat(3))
    }

    if (newTags.length === 0) {
      totalSkipped++
      continue
    }

    // Insert before */ closing
    var insertion = newTags.join('\n') + '\n '
    content = content.slice(0, jsdocEndIdx) + insertion + content.slice(jsdocEndIdx)
    modified = true
    totalUpdated++
    console.log('  + ' + propsName + ' (' + newTags.length + ' tags)')
  }

  if (modified) {
    await writeFile(abs, content, 'utf-8')
    console.log('OK ' + rel)
  }
}

console.log('\nDone! Updated ' + totalUpdated + ' props, skipped ' + totalSkipped)
