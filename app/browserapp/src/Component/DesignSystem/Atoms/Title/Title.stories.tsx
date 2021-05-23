import React from 'react';
import { Story, Meta } from '@storybook/react';
import Title, { ITitleProps } from './Title';

const Template: Story<ITitleProps> = (args) => <Title {...args}>{args.children}</Title>

export const h1 = Template.bind({});
h1.args = {
    children: 'coucou',
    variant: 'h1',
    textAlign: 'center',
    color: 'primary'
};

export const h2 = Template.bind({});
h2.args = {
    children: 'tetsouille',
    variant: 'h2',
    textAlign: 'center',
    color: 'primary'
};

export const h3 = Template.bind({});
h3.args = {
    children: 'tetsouille', variant: 'h3', textAlign: 'center',
    color: 'primary'
};

export const h4 = Template.bind({});
h4.args = {
    children: 'tetsouille', variant: 'h4', textAlign: 'center',
    color: 'primary'
};

export const h5 = Template.bind({});
h5.args = {
    children: 'tetsouille', variant: 'h5', textAlign: 'center',
    color: 'primary'
};

export const AllTitle = () => {
    return (
    <>
        <Title variant='h1' color='primary'>H1 component primary </Title>
        <Title variant='h2' color='primary'>H2 component primary </Title>
        <Title variant='h3' color='primary'>H3 component primary </Title>
        <Title variant='h4' color='primary'>H4 component primary </Title>
        <Title variant='h5' color='primary'>H5 component primary </Title>
        <Title variant='h5' color='secondary'>H5 component secondary </Title>
        <Title variant='h4' color='secondary'>H4 component secondary </Title>
        <Title variant='h3' color='secondary'>H3 component secondary </Title>
        <Title variant='h2' color='secondary'>H2 component secondary </Title>
        <Title variant='h1' color='secondary'>H1 component secondary </Title>

        <Title variant='h1' color='#f6f'>H1 component specific color </Title>

    </>);
}

export default {
    title: 'DesignSystem/Title'
}