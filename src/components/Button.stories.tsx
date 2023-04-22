import { Button, ButtonProps } from './Button'
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Click me',
        type: 'primary',
    },
    argTypes: {        
        type: {
            options: ['primary', 'secondary', 'tertiary', 'uppercase'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<ButtonProps>


export const Primary: StoryObj<ButtonProps> = { args: { type: 'primary' }}

export const Secondary: StoryObj<ButtonProps> = {args: { type: 'secondary' }}

export const Tertiary: StoryObj<ButtonProps> =  {args: { type: 'tertiary' }}

export const Inverted: StoryObj<ButtonProps> =  {args: { type: 'inverted' }}