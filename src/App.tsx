import "./styles.css";

import React from 'react'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Input, Select } from 'antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
  },
})

export default () => (
  <FormProvider form={form}>
    <SchemaField
      components={{
        Select,
      }}
    >
      <SchemaField.String name="input" x-component="Input" />
      <SchemaField.String
        name="select"
        x-component="Select"
        x-component-props={{
          style: {
            width: 200,
            marginTop: 20,
          },
        }}
      />
    </SchemaField>
  </FormProvider>
)