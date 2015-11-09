var elixir = require('laravel-elixir');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var gulp = require('gulp');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix.copy('node_modules/bootstrap-sass/assets/fonts/', 'public/fonts');
    mix.sass('app.scss');
    // mix.coffee(['../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js']);
    mix.coffee(['jquery.js']);
});