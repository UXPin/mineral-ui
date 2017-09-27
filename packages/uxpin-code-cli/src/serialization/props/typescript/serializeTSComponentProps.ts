import { toPairs } from 'lodash';
import { parse as parsePath } from 'path';
import { ComponentDoc, parse, PropItem } from 'react-docgen-typescript/lib';
import { ComponentPropertyDefinition, PropertyTypeName } from '../ComponentPropertyDefinition';
import { PropsSerializationResult } from '../PropsSerializationResult';
import { convertTypeName } from './type/convertTypeName';

export function serializeTSComponentProps(componentFileLocation:string):Promise<PropsSerializationResult> {
  return new Promise((resolve) => {
    const result:ComponentPropertyDefinition[] = toPairs(getDefaultComponentFrom(componentFileLocation).props)
      .map(([propName, propType]) => propItemToPropDefinition(propName, propType));
    resolve({ result, warnings: [] });
  });
}

function propItemToPropDefinition(propName:string, propType:PropItem):ComponentPropertyDefinition {
  const propTypeName:PropertyTypeName = convertTypeName(propType.type.name);
  return {
    description: propType.description,
    isRequired: propType.required,
    name: propName,
    type: {
      name: propTypeName,
      structure: {},
    },
  };
}

function getDefaultComponentFrom(filePath:string):ComponentDoc {
  let components:ComponentDoc[];
  try {
    components = parse(filePath);
  } catch (e) {
    components = [];
  }
  const expectedComponentName:string = parsePath(filePath).name;
  const nameRegex:RegExp = new RegExp(expectedComponentName, 'i');
  const component:ComponentDoc | undefined = components.find((c) => nameRegex.test(c.displayName));
  if (component) {
    return component;
  }
  throw new Error(`No \`${expectedComponentName}\` component found in ${filePath}`);
}
