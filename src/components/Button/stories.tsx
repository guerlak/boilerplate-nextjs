import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    description: 'Button component
  }
} as Meta

export const Basic: Story = (args) => <Button />
