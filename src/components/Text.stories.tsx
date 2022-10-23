import { Text, TextProps } from './Text'
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum',
        size: 'md',
    },
    argTypes: { // storybook Control options
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<TextProps>

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    },
}

export const Default: StoryObj<TextProps> = {}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    },
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>This is a paragraph</p>
        )
    },
    argTypes: {
        children: {
            table: { //Disable Control arg display
                disable: true,
            }
        }
    }
}