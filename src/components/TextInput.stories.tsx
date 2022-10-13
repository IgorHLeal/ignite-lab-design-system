import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    // Retornar com o vetor (colchetes) oculta o fragment no ambiente do storybook
    children: [ 
        <TextInput.Icon>
          <Envelope />
        </ TextInput.Icon >, // Adicionar a vírgula p/ evitar erros de lint
        <TextInput.Input placeholder='Type your e-mail address' />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true, 
      }
    },
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder='Type your e-mail address' />
    )
  }
};
