/**
 * 测试服务器
 * Created by DELL on 2018/2/26.
 */

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var HOST = 3008;

var app = express();
var compiler = webpack(config);




