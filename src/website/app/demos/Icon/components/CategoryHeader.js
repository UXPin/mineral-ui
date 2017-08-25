/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import {
  createStyledComponent,
  getNormalizedValue
} from '../../../../../utils';

export default createStyledComponent(
  'h4',
  ({ theme }) => ({
    borderTop: `1px solid ${theme.borderColor}`,
    paddingTop: theme.spacing_triple,
    fontSize: theme.fontSize_h5,
    textTransform: 'capitalize',
    margin: `${parseFloat(
      getNormalizedValue(theme.spacing_triple, theme.fontSize_h5)
    )}em 0`
  }),
  {
    displayName: 'CategoryHeader',
    includeStyleReset: true
  }
);
