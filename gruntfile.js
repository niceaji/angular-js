var treejson = require("tree-json"),
    fs = require("fs");


module.exports=function(grunt){

	grunt.initConfig({
		'gh-pages' : {
			options:{
				base:'.'
			},
			src:['**/*','!node_modules']

		}
	});

	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.registerTask('default','',function(){

		
	});
};