 import React from 'react';
 import {Story, Meta} from '@storybook/react';
 import Typography from './Typography';


const Template: Story<any> = (args) => <Typography {...args}>{args.text}</Typography>

export const Primary = Template.bind({});
Primary.args = {text : 'coucou'};

export const Secondary = Template.bind({});
Secondary.args = {text :'tetsouille'};

export default {
    title : 'DesignSystem/Typography'
}