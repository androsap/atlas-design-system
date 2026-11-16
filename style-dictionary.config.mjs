import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary, { usesDtcg: true });

// Token sources and outputs live in the @asyst/atlas package so the design
// tokens ship with the components that use them.
export default {
    source: ['packages/atlas/tokens/**/*.json'],
    preprocessors: ['tokens-studio'],
    usesDtcg: true,
    platforms: {
        css: {
            transformGroup: 'tokens-studio',
            buildPath: 'packages/atlas/src/styles/',
            files: [
                {
                    destination: 'tokens.css',
                    format: 'css/variables',
                    options: {
                        outputReferences: (token) => token.$type !== 'typography'
                    }
                }
            ]
        },
        ts: {
            transformGroup: 'tokens-studio',
            buildPath: 'packages/atlas/src/',
            files: [
                { destination: 'tokens.ts', format: 'javascript/es6' }
            ]
        }
    }
};
