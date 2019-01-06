import path from 'path';
import webpack from 'webpack';

import '../..';

describe('generic-jsx-loader', () => {

    it('can load generic jsx using webpack', (done) => {
        const jsxReplacement = '"JSX_WAS_HERE!"';

        webpack({
            mode: 'development',
            entry: path.resolve(__dirname, 'source.gjsx'),
            output: {
                path: path.resolve(__dirname),
                filename: 'source.bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.gjsx$/,
                        use: [
                            {
                                loader: path.resolve(__dirname, '../../index.js'),
                                options: {
                                    serialize: function() {
                                        return jsxReplacement;
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        }, function(err) {
            expect(err).not.toBeTruthy();

            const oldConsoleLog = console.log;
            console.log = jest.fn();

            require('./source.bundle');
            expect(console.log).toBeCalledWith(JSON.parse(jsxReplacement));

            console.log = oldConsoleLog;
            done();
        });
    });

});
