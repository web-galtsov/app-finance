#!/usr/bin/env node
"use strict";
var log = _interopRequireWildcard(require("./node_modules/next/dist/build/output/log"));
var _indexJs = _interopRequireDefault(require("./node_modules/next/dist/compiled/arg/index.js"));
var _constants = require("./node_modules/next/dist/lib/constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                    };
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
[
    'react',
    'react-dom'
].forEach((dependency)=>{
    try {
        require.resolve(dependency);
    } catch (err) {
        console.warn(`The module '${dependency}' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install ${dependency}'`);
    }
});
const defaultCommand = 'start';
const commands = {
    build: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-build').nextBuild)
    ,
    start: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-start').nextStart)
    ,
    export: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-export').nextExport)
    ,
    dev: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-dev').nextDev)
    ,
    lint: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-lint').nextLint)
    ,
    telemetry: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-telemetry').nextTelemetry)
};
const args = (0, _indexJs).default({
     '--version': Boolean,
    '--help': Boolean,
    '--inspect': Boolean,
    '-v': '--version',
    '-h': '--help'
}, {
    permissive: true
});
if (args['--version']) {
    console.log(`Next.js v${"12.0.7"}`);
    process.exit(0);
}
const foundCommand = Boolean(commands[args._[0]]);
if (!foundCommand && args['--help']) {
    console.log(`
    Usage
      $ next <command>

    Available commands
      ${Object.keys(commands).join(', ')}

    Options
      --version, -v   Version number
      --help, -h      Displays this message

    For more information run a command with the --help flag
      $ next build --help
  `);
    process.exit(0);
}
const command = foundCommand ? args._[0] : defaultCommand;
const forwardedArgs = foundCommand ? args._.slice(1) : args._;
if (args['--inspect']) throw new Error(`--inspect flag is deprecated. Use env variable NODE_OPTIONS instead: NODE_OPTIONS='--inspect' next ${command}`);
if (args['--help']) {
    forwardedArgs.push('--help');
}
const defaultEnv = command === 'dev' ? 'development' : 'production';
const standardEnv = [
    'production',
    'development',
    'test'
];
if (process.env.NODE_ENV && !standardEnv.includes(process.env.NODE_ENV)) {
    log.warn(_constants.NON_STANDARD_NODE_ENV);
}
process.env.NODE_ENV = process.env.NODE_ENV || defaultEnv;
// Make sure commands gracefully respect termination signals (e.g. from Docker)
process.on('SIGTERM', ()=>process.exit(0)
);
process.on('SIGINT', ()=>process.exit(0)
);
commands[command]().then((exec)=>exec(forwardedArgs)
).then(()=>{
    if (command === 'build') {
        process.exit(0);
    }
});
if (command === 'start') {
    const { CONFIG_FILES  } = require('./node_modules/next/dist/shared/lib/constants');
    const { watchFile  } = require('fs');
    for (const CONFIG_FILE of CONFIG_FILES){
        watchFile(`${process.cwd()}/${CONFIG_FILE}`, (cur, prev)=>{
            if (cur.size > 0 || prev.size > 0) {
                console.log(`\n> Found a change in ${CONFIG_FILE}. Restart the server to see the changes in effect.`);
            }
        });
    }
}

//# sourceMappingURL=next.map
