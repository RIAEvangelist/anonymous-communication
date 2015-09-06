var NwBuilder = require('nw-builder');
var nw = new NwBuilder(
    {
        files: './src/**/**', // use the glob format
        platforms: ['osx', 'win','linux'],
        winIco: './src/icons/icon_256.ico',
        macZip:true,
        version:'0.12.3'
    }
);

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(
    function () {
        console.log('all done!');
    }
).catch(
    function (error) {
        console.error(error);
    }
);
