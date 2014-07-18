var treejson = require("tree-json"),
    fs = require("fs");


module.exports=function(grunt){

	grunt.initConfig({
		'gh-pages' : {
			options:{
				base:'.'
			},
			src:['index.html', 'src/**/*', 'lib/*']
		},
	});

	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.registerTask('tree-json','',function(){
		fs.writeFileSync ('lib/tree.json', JSON.stringify(treejson('src')) );
		grunt.log.write('tree-json... ').ok();
	});

	grunt.registerTast('default','',[]);
};