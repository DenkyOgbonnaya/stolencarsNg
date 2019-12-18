const withCSS =  require('@zeit/next-css');
module.exports =
    withCSS({
        cssLoaderOptions: {
            url: false
        },
        webpack(config){
            config.module.rules.push({
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            });
            return config;
        }
    })
    

