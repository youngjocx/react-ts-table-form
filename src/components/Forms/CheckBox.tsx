import React from 'react';
import type { IFormElementBase } from 'types';
import { FormGroup } from './FormGroup';

export const CheckBox: React.FC<IFormElementBase> = ({ meta, value }) => {
  return <FormGroup
    label=""
    inputElement={
      <div className="flex items-center">
        <input
          name={meta.name}
          id={meta.name}
          type="checkbox"
          checked={value}
        />
        <label
          className="mb-0 ml-2"
          htmlFor={meta.name}
        >{meta.displayName}</label>
      </div>
    }
  />
}