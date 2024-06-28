import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
