/**
 * SKILL 生成器 — 合并配置
 *
 * key   = 输出目录名（skills/<key>/SKILL.md）
 * value = packages/components 下的组件目录名数组
 *
 * 未在此配置的组件自动独立生成，目录名为 cp-<组件名>
 */
export default {
  'cp-form': ['form', 'form-item'],
  'cp-input': ['input', 'input-number', 'textarea'],
  'cp-checkbox': ['checkbox', 'checkbox-group'],
  'cp-radio': ['radio', 'radio-group'],
  'cp-image': ['image', 'image-preview'],
  'cp-timeline': ['timeline', 'timeline-item'],
  'cp-table': ['table', 'table-column'],
  'cp-menu': ['menu', 'menu-item', 'sub-menu', 'menu-item-group', 'menu-nav'],
  'cp-breadcrumb': ['breadcrumb', 'breadcrumb-item'],
  'cp-container': ['container'],
  'cp-grid': ['row', 'col'],
  'cp-notification': ['notification'],
}
