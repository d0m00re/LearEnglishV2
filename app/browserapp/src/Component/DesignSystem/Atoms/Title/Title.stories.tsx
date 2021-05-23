import React from 'react';
import {Story, Meta} from '@storybook/react';
import Title, {ITitleProps} from './Title';

const Template: Story<ITitleProps> = (args) => <Title {...args}>{args.children}</Title>

export const h1 = Template.bind({});
h1.args = {
    children : 'coucou',
    variant : 'h1',
    textAlign : 'center',
    color : 'primary'};

export const h2 = Template.bind({});
h2.args = {children :'tetsouille',
            variant : 'h2',
            textAlign : 'center',
            color : 'primary'};

export const h3 = Template.bind({});
h3.args = {children :'tetsouille', variant : 'h3',textAlign : 'center',
color : 'primary'};

export const h4 = Template.bind({});
h4.args = {children :'tetsouille', variant : 'h4', textAlign : 'center',
color : 'primary'};

export const h5 = Template.bind({});
h5.args = {children :'tetsouille', variant : 'h5', textAlign : 'center',
color : 'primary'};

export default {
   title : 'DesignSystem/Title'
}