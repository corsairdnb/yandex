module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            compile: {
                files: {
                    'css/dev/stylus.css': ['styl/*.styl']
                },
                options: {
                    compress: false
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'css/prod/main.css': ['css/dev/stylus.css']
                }
            }
        },
        htmlmin: {
            min: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'index.dev.html'
                }
            }
        },
        copy: {
            min: {
                src: 'index.html',
                dest: 'index.dev.html'
            },
            source: {
                src: 'index.dev.html',
                dest: 'index.html'
            }
        },
        clean: {
            minified: 'index.html',
            dev: 'index.dev.html'
        },
        dataUri: {
            dist: {
                src: ['css/dev/stylus.css'],
                dest: 'css/dev/',
                options: {
                    target: ['svg/*.svg'],
                    fixDirLevel: true
                }
            }
        },
        connect: {
            all: {
                options:{
                    port: 9000,
                    hostname: '127.0.0.1',
                    base: '.',
                    livereload: true
                }
            }
        },
        watch: {
            stylus: {
                files: ['styl/*.styl'],
                tasks: ['stylus', 'dataUri']
            },
            /*cssmin: {
                files: ['css/dev*//*.css'],
                tasks: ['cssmin']
            },*/
            files: '*.html',
            options: {
                livereload: true
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['stylus', 'dataUri', 'connect', 'watch']);
    grunt.registerTask('deploy', ['stylus', 'dataUri', 'cssmin', 'copy:min', 'htmlmin']);
    grunt.registerTask('prod', ['clean:minified', 'copy:source', 'clean:dev']);

};