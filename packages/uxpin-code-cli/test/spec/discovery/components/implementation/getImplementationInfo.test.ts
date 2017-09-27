import { resolve } from 'path';
import { ComponentImplementationInfo } from '../../../../../src/discovery/components/ComponentInfo';
import { ComponentPaths } from '../../../../../src/discovery/components/ComponentPaths';
import { getImplementationInfo } from '../../../../../src/discovery/components/implementation/getImplementationInfo';

describe('getImplementationInfo', () => {
  describe('obtaining information about the implementation of a component in the given directory', () => {
    it('returns correct info if directory contains component file', () => {
      const paths:ComponentPaths = getComponentsPath('directoryWithComponent');
      const expectedImplInfo:ComponentImplementationInfo = {
        framework: 'reactjs',
        lang: 'javascript',
        path: `directories/directoryWithComponent/directoryWithComponent.jsx`,
      };

      // when
      return getImplementationInfo(paths, 'directoryWithComponent')
      // then
        .then((implInfo) => expect(implInfo).toEqual(expectedImplInfo));
    });

    it('returns correct info if directory contains TypeScript component file', () => {
      const paths:ComponentPaths = getComponentsPath('directoryWithTypeScriptComponent');
      const expectedImplInfo:ComponentImplementationInfo = {
        framework: 'reactjs',
        lang: 'typescript',
        path: `directories/directoryWithTypeScriptComponent/directoryWithTypeScriptComponent.tsx`,
      };

      // when
      return getImplementationInfo(paths, 'directoryWithTypeScriptComponent')
      // then
        .then((implInfo) => expect(implInfo).toEqual(expectedImplInfo));
    });

    it('rejects a promise if directory does not contain component file', (done) => {
      const paths:ComponentPaths = getComponentsPath('directoryWithoutComponent');

      // when
      return getImplementationInfo(paths, 'directoryWithoutComponent')
      // then
        .catch(() => done());
    });

    it('rejects a promise if directory does not exist', (done) => {
      const paths:ComponentPaths = getComponentsPath('iDontExist');

      // when
      return getImplementationInfo(paths, 'iDontExist')
      // then
        .catch(() => done());
    });

    describe('when the given directory path is a path to a file', () => {
      it('rejects a promise', (done) => {
        const paths:ComponentPaths = getComponentsPath('notDirectory.ts');

        // when
        return getImplementationInfo(paths, 'notDirectory.ts')
        // then
          .catch(() => done());
      });
    });
  });

  function getComponentsPath(componentName:string):ComponentPaths {
    return {
      componentDirPath: `directories/${componentName}`,
      componentsDirPath: 'directories/',
      projectRoot: resolve('./test/resources/'),
    };
  }
});
