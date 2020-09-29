module.exports = {
	publicPath: "./",
    devServer: {
		// 后端请求转发，此配置仅开发环境有效，生产环境请参考生产环境部署文档配置nginx转发
		proxy: {
			'/': {
				target: 'http://localhost/'
			}
		},
		port:8001,
		inline:false //实时编译
	},
	configureWebpack:{
		devServer: {
			disableHostCheck: true
		},
		externals: {
			vue: "Vue",
			"vue-router": "Router",
            "element-ui": "ELEMENT",
            "tinymce":"tinymce"
		}
	},
	chainWebpack: config => {
		// 移除 prefetch 插件
		config.plugins.delete('prefetch')
	},

	outputDir: undefined,
	assetsDir: undefined,
	runtimeCompiler: undefined,
	productionSourceMap: false,
	parallel: undefined,
	css: undefined
}