import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, {IStyledButton} from './Button';

const Template: Story<IStyledButton> = (args) => <Button {...args}>{args.children}</Button>

export const primary = Template.bind({});
primary.args = {
    children: 'coucou',
    variant : 'primary'
};

export const secondary = Template.bind({});
secondary.args = {
    children: 'tetsouille',
    variant: 'secondary'
};

export const All = () => {
    return (
    <>
        <Button variant='primary'>Button Primary</Button>
        <Button variant='secondary'>Button Secondary</Button>
    </>);
}

export default {
    title: 'DesignSystem/Button'
}