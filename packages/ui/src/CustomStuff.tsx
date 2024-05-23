import { View, Button, styled, Input } from 'tamagui'

export const ButtonWide = styled(Button, {
  name: 'ButtonWide',
  width: '100%',
  maxWidth: '$20',
  paddingVertical: '$2',
  backgroundColor: '$background',
  fontWeight: '$12',
  color: '$green10',
  borderColor: '$green10',
  borderWidth: 1,
  hoverStyle: {
    backgroundColor: '$green3',
    borderColor: '$green10',
  },
  pressStyle: {
    backgroundColor: '$red4',
    borderColor: '$red11',
  },
})

export const InputBase = styled(Input, {
  name: 'InputBase',
  width: '90%',
  maxWidth: '$20',
  borderWidth: 0,
  borderBottomWidth: 1,
  borderRadius: 0,
  backgroundColor: '$background',
  color: '$color',
  paddingHorizontal: '$3',
  autoCapitalize: 'none',
  hoverStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '$green10',
  },
  focusStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '$green10',
  },
})
