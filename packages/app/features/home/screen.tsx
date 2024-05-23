import { ButtonWide, YStack, useThemeName, Text, InputBase } from '@my/ui'
import { Controller, useForm } from 'react-hook-form'

const defaultValues = { text: '' }
type FormData = typeof defaultValues

export function HomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
  })
  function onSubmit(data: FormData) {
    console.log(data)
  }
  const theme = useThemeName()
  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <Controller
        control={control}
        defaultValue={defaultValues.text}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputBase
            placeholder="Enter your text"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="text"
      />
      {errors.text != null && <Text color="$red9">{errors.text?.message}</Text>}
      <ButtonWide onPress={handleSubmit(onSubmit)}>log to console</ButtonWide>
    </YStack>
  )
}
