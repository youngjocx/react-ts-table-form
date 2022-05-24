import React from 'react';
import type { IFormElementBase } from 'types';
import { FormGroup } from './FormGroup';

export const Select: React.FC<IFormElementBase> = ({ meta, value }) => {
  return <FormGroup
    label={meta.displayName}
    inputElement={
      <select
        name={meta.name}
        value={value}
      >
        {
          meta['x-options']?.map((option, i) =>
            <option
              key={i}
              value={option.value}
            >
              {option.text}
            </option>)
        }
      </select>
    }
  />
}