import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent, h } from 'vue';

const ScrollContainer = defineComponent({
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  setup(props) {
    const className = props.variant === 'default' 
      ? 'cp-scrollbar' 
      : `cp-scrollbar--${props.variant} cp-scrollbar`;

    return () => h('div', {
      style: {
        height: props.height,
        width: '300px',
        overflowY: 'auto',
        border: '1px solid var(--cp-border)',
        padding: '20px',
        background: 'var(--cp-bg-base)',
        color: 'var(--cp-text-primary)'
      },
      class: className
    }, [
      h('div', { style: { height: '600px' } }, [
        h('h3', `Scrollbar Variant: ${props.variant}`),
        ...Array.from({ length: 20 }).map((_, i) => h('p', `Line ${i + 1}: Cyberpunk Vue Scrollbar Test Content...`))
      ])
    ]);
  }
});

const meta: Meta<typeof ScrollContainer> = {
  title: 'Styles/Scrollbar',
  component: ScrollContainer,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'rounded', 'futuristic', 'thin', 'bordered', 'clipped', 'hidden']
    }
  }
};

export default meta;
type Story = StoryObj<typeof ScrollContainer>;

export const Default: Story = {
  args: {
    variant: 'default'
  }
};

export const Rounded: Story = {
  args: {
    variant: 'rounded'
  }
};

export const Futuristic: Story = {
  args: {
    variant: 'futuristic'
  }
};

export const Thin: Story = {
  args: {
    variant: 'thin'
  }
};

export const Bordered: Story = {
  args: {
    variant: 'bordered'
  }
};

export const Clipped: Story = {
  args: {
    variant: 'clipped'
  }
};

export const Hidden: Story = {
  args: {
    variant: 'hidden'
  }
};

export const Horizontal: Story = {
  render: (args) => h('div', {
    style: {
      width: '300px',
      overflowX: 'auto',
      border: '1px solid var(--cp-border)',
      padding: '20px',
      background: 'var(--cp-bg-base)',
      color: 'var(--cp-text-primary)'
    },
    class: args.variant === 'default' ? 'cp-scrollbar' : `cp-scrollbar--${args.variant} cp-scrollbar`
  }, [
    h('div', { style: { width: '1000px', whiteSpace: 'nowrap' } }, [
      h('h3', 'Horizontal Scrollbar'),
      h('p', 'This container has a very long horizontal content to trigger the scrollbar...')
    ])
  ]),
  args: {
    variant: 'futuristic'
  }
};
