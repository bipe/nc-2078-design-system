import { Heading, HeadingProps } from './Heading'
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
        size: 'md',
    },
    argTypes: { // storybook Control options
        size: {
            options: ['sm', 'md', 'lg', 'xl'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<HeadingProps>

export const Small: StoryObj<HeadingProps> = { args: { size: 'sm' }}

export const Default: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {args: { size: 'lg' }}

export const ExtraLarge: StoryObj<HeadingProps> =  {args: { size: 'xl' }}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>This is a h1</h1>
        )
    },
    argTypes: {
        children: {
            table: { //Disable Control arg display
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}