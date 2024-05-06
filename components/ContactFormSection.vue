<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { Mail } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import z from 'zod'

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name is too short' })
    .max(20, { message: 'Name is too long' }),
  email: z.string().email({ message: 'Invalid email' }),
  message: z.string().max(200, { message: 'Message is too long' }),
})

const form = useForm({
  validationSchema: toTypedSchema(formSchema),
})

function onSubmit(values: Record<string, any>) {
  console.log('In the submit function')
  toast.success('Message Sent!')
}
</script>

<template>
  <div class="mx-auto min-w-64 max-w-[60%] justify-center py-12" id="contact">
    <h1 class="mb-2 text-3xl font-bold text-primary">
      Ready to work together?
    </h1>
    <p class="mb-4 font-light">
      Leave us a message and we'll get back to you as soon as possible.
    </p>
    <SHAutoForm
      :schema="formSchema"
      :form="form"
      @submit="onSubmit"
      :field-config="{
        message: {
          component: 'textarea',
          inputProps: {
            maxlength: 200,
          },
        },
      }"
    >
      <div class="flex justify-end">
        <SHButton class="mt-4 text-secondary" type="submit">
          <Mail class="mr-2 h-5 w-5 text-secondary" />
          Send
        </SHButton>
      </div>
    </SHAutoForm>
    <SHToaster richColors />
  </div>
</template>
