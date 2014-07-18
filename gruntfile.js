var treejson = require("tree-json"),
    fs = require("fs");


module.exports=function(grunt){

	grunt.initConfig({
		'gh-pages' : {
			options:{
				base:'.'
			},
			src:['index.html', 'src/**/*']
		}
	});

	grunt.loadNpmTasks('grunt-gh-pages');

	// grunt.registerTask('default','',function(){

		
	// });
};