---
name: components-service
description: 全局函数/服务式调用 API 参考：CpNotify 等无需模板声明、通过函数直接调用的组件服务。
---

# 全局函数 / 服务式调用

部分组件提供函数式（命令式）API，无需在模板中声明 `<CpXxx>`，直接通过 JS/TS 调用即可。
适用于通知、消息提示、确认弹窗等"即用即弃"的反馈场景。

> **原则**：能用函数式就用函数式，仅在需要插槽自定义内容时退回组件式写法。

---

## CpNotify — 通知提醒

### 导入

```ts
import { CpNotify } from "@cyberpunk-vue/components";
```

### 基础调用

```ts
// 默认 4500ms 后自动关闭
CpNotify({ title: "系统通知", message: "操作已完成" });

// 类型快捷方法
CpNotify.success({ title: "成功", message: "数据已保存" });
CpNotify.warning({ title: "警告", message: "磁盘空间不足" });
CpNotify.error({ title: "错误", message: "连接失败" });
CpNotify.info({ title: "提示", message: "系统将维护" });
CpNotify.primary({ title: "主要", message: "新功能已上线" });
```

### 返回句柄

`CpNotify()` 返回一个 `NotificationHandle`，可调用 `handle.close()` 手动关闭。

```ts
const handle = CpNotify({
  title: "持久通知",
  message: "需要手动关闭",
  duration: 0, // 不自动关闭
});

// 某个时机手动关闭
handle.close();
```

### 全部关闭

```ts
CpNotify.closeAll();
```

### 完整选项

| 属性                       | 类型                                                                    | 默认值          | 说明                            |
| -------------------------- | ----------------------------------------------------------------------- | --------------- | ------------------------------- |
| `title`                    | `string`                                                                | `''`            | 通知标题                        |
| `message`                  | `string \| VNode`                                                       | `''`            | 消息内容，支持 `h()` 渲染函数   |
| `type`                     | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'`     | 主题色                          |
| `duration`                 | `number`                                                                | `4500`          | 自动关闭延迟 (ms)，`0` = 不关闭 |
| `position`                 | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'`          | `'top-right'`   | 弹出位置                        |
| `variant`                  | `'solid' \| 'semi' \| 'outline'`                                        | `'solid'`       | 变体                            |
| `shape`                    | `'clip' \| 'no-clip' \| 'round'`                                        | `'clip'`        | 形状                            |
| `showClose`                | `boolean`                                                               | `true`          | 显示关闭按钮                    |
| `offset`                   | `number`                                                                | `16`            | 距窗口边缘偏移 (px)             |
| `stacking`                 | `boolean \| 'vertical' \| 'overlap'`                                    | `false`         | 堆叠模式（见下方说明）          |
| `selectable`               | `boolean`                                                               | `false`         | 允许选中消息文本                |
| `onClick`                  | `() => void`                                                            | -               | 点击通知回调                    |
| `onClose`                  | `(vm: VNode) => void`                                                   | -               | 关闭时回调                      |
| `dangerouslyUseHTMLString` | `boolean`                                                               | `false`         | 将 message 作为 HTML 渲染       |
| `color`                    | `string`                                                                | `''`            | 自定义主色调                    |
| `bgColor`                  | `string`                                                                | `''`            | 自定义背景色                    |
| `borderColor`              | `string`                                                                | `''`            | 自定义边框色                    |
| `titleColor`               | `string`                                                                | `''`            | 标题文字颜色                    |
| `textColor`                | `string`                                                                | `''`            | 消息文字颜色                    |
| `zIndex`                   | `number`                                                                | `9999`          | z-index                         |
| `width`                    | `string \| number`                                                      | `'330px'`       | 通知宽度                        |
| `animationDuration`        | `number`                                                                | `300`           | 动画时长 (ms)                   |
| `appendTo`                 | `HTMLElement \| string`                                                 | `document.body` | 挂载目标                        |

### 控制自动关闭时间

```ts
// 1.5s 后自动关闭
CpNotify({ title: "快速", message: "1.5s 后消失", duration: 1500 });

// 不自动关闭
CpNotify({ title: "持久", message: "需手动关闭", duration: 0 });
```

### 绑定点击事件

```ts
const handle = CpNotify({
  title: "互动通知",
  message: "点击触发回调",
  type: "primary",
  duration: 0,
  onClick: () => {
    console.log("通知被点击！");
    handle.close();
  },
});
```

### VNode 渲染 + 组合其他组件

通过 `h()` 渲染函数，可以在 `message` 中使用组件库内的任意组件：

```ts
import { h } from "vue";
import { CpNotify, CpTag, CpButton } from "@cyberpunk-vue/components";

const handle = CpNotify({
  title: "部署完成",
  type: "success",
  duration: 0,
  message: h("div", { style: "display:flex;flex-direction:column;gap:8px;" }, [
    h("div", { style: "display:flex;align-items:center;gap:6px;" }, [
      h("span", "环境："),
      h(CpTag, { type: "success", size: "sm" }, () => "Production"),
    ]),
    h("div", { style: "display:flex;align-items:center;gap:6px;" }, [
      h("span", "版本："),
      h(
        CpTag,
        { type: "primary", size: "sm", variant: "outline" },
        () => "v2.1.0",
      ),
    ]),
    h("div", { style: "display:flex;gap:6px;margin-top:4px;" }, [
      h(
        CpButton,
        { size: "sm", type: "success", onClick: () => handle.close() },
        () => "查看详情",
      ),
      h(
        CpButton,
        { size: "sm", variant: "outline", onClick: () => handle.close() },
        () => "关闭",
      ),
    ]),
  ]),
});
```

> **注意**：通过 `h()` 传入的组件会自动复用全局样式和注册。`CpTag` 的 `size` 使用 `'sm'` / `'md'` / `'lg'`（非 `'small'`）。

### 堆叠模式

| 值                    | 行为                                      |
| --------------------- | ----------------------------------------- |
| `false` (默认)        | 不堆叠，同位置通知重叠到同一位置          |
| `true` / `'vertical'` | 垂直堆叠，每个通知完整排列                |
| `'overlap'`           | 重叠堆叠，新通知覆盖上一个，仅露出约 32px |

```ts
// 垂直堆叠 — 通知完整排列
CpNotify({
  title: "通知 1",
  message: "第一条",
  stacking: "vertical",
  duration: 0,
});
CpNotify({
  title: "通知 2",
  message: "第二条",
  stacking: "vertical",
  duration: 0,
});

// 重叠堆叠 — 新通知覆盖上一个，仅露出一小部分
CpNotify({
  title: "通知 A",
  message: "第一条",
  stacking: "overlap",
  duration: 0,
});
CpNotify({
  title: "通知 B",
  message: "第二条",
  stacking: "overlap",
  duration: 0,
});
```

关闭通知时，两种模式下后续通知都会平滑动画上移。

### HTML 字符串

```ts
CpNotify({
  title: "富文本",
  message: '<strong style="color:#00f0ff">SYSTEM</strong>: 检测到异常',
  dangerouslyUseHTMLString: true,
  type: "info",
});
```

> ⚠️ **安全提示**：`dangerouslyUseHTMLString` 存在 XSS 风险，不要直接渲染用户输入。优先使用 VNode 方式。

### 何时使用组件式

当你需要以下功能时，使用 `<CpNotification>` 组件式写法：

- **`#title` 插槽** — 自定义标题内容
- **`#default` 插槽** — 自定义消息体（含 Vue 模板语法）
- **`#icon` 插槽** — 自定义图标
- **`#actions` 插槽** — 操作区按钮

```vue
<CpNotification
  v-model="visible"
  title="版本更新"
  message="检测到新版本"
  type="warning"
  :duration="0"
>
  <template #actions>
    <CpButton size="sm" type="warning" @click="visible = false">立即更新</CpButton>
    <CpButton size="sm" variant="outline" @click="visible = false">稍后提醒</CpButton>
  </template>
</CpNotification>
```

> 组件式的完整 Props/事件/插槽 参见 [展示与反馈组件参数](../components-display/SKILL.md)。

---

## 未来扩展

以下服务式 API 计划在未来版本中提供：

- **CpMessage** — 轻量消息提示（顶部居中弹出）
- **CpMessageBox** — 确认/输入对话框（`confirm` / `prompt`）
