/**

 * User: Sohel
 * Date: 8/6/14
 * Time: 12: 10 PM
 */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'css/style.scss'                    
                }
            }
        },

        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                
                files: [ {

                    cwd: "templates/views",
                    src: "**/*.jade",
                    dest: "build/templates",
                    expand: true,
                    ext: ".html"
                }]
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-contrib-jade");

    grunt.registerTask('build', ['sass:dist', 'jade:compile']);
};
