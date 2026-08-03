import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary, { usesDtcg: true });

export default {
    source: ['src/tokens/**/*.json'],
    preprocessors: ['tokens-studio'],
    usesDtcg: true,
    platforms: {
        css: {
            transformGroup: 'tokens-studio',
            buildPath: 'src/styles/',
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
            buildPath: 'src/tokens/',
            files: [
                { destination: 'generated.ts', format: 'javascript/es6' }
            ]
        }
    }
};