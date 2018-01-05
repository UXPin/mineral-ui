import { kebabCase } from 'lodash';
import * as React from 'react';
import { ComponentExample } from '../../../../steps/serialization/component/examples/ComponentExample';
import {
  ComponentPropertyDefinition,
} from '../../../../steps/serialization/component/implementation/ComponentPropertyDefinition';
import { ExampleRenderer } from '../ExampleRenderer';
import { ComponentPreview } from './ComponentPreview';
import { ComponentProps } from './ComponentProps';

interface Props {
  examples:ComponentExample[];
  name:string;
  properties:ComponentPropertyDefinition[];
  renderExample:ExampleRenderer;
}

// tslint:disable:variable-name
export const ComponentContainer:React.SFC<Props> = ({
  examples,
  name = '',
  properties,
  renderExample,
}:Props) => {
  const headerId:string = `header-${kebabCase(name)}`;

  return (
    <div>
      <h3 id={headerId}>{name}</h3>
      <ComponentPreview examples={examples} renderExample={renderExample} />
      <ComponentProps properties={properties}/>
    </div>
  );
};
