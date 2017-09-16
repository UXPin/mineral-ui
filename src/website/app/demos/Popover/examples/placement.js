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
import Button from '../../../../../Button';
import { createStyledComponent } from '../../../../../utils';
import DemoContent from '../components/DemoContent';
import Popover from '../components/AlwaysOpenPopover';

const DemoLayout = createStyledComponent('div', {
  height: '350px',
  position: 'relative',

  '> div': {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
});

export default {
  id: 'placement',
  title: 'Placement',
  description:
    'The placement prop determines the placement of the Popover content relative to the trigger.',
  scope: { Button, DemoContent, DemoLayout, Popover },
  source: `
    <DemoLayout>
      <Popover
        content={<DemoContent />}
        placement="bottom">
        <Button size="jumbo" disabled>Open Popover</Button>
      </Popover>
    </DemoLayout>`
};