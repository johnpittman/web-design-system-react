import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Tag, { TagProps } from './component';

export default {
  title: 'Base/Tag',
  component: Tag,
  argTypes: {}
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  accentBar: true,
  label: 'Tag'
};
