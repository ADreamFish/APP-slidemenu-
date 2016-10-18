var jade = require('jade');

var provincial_names = [
    '湖北',
    '河南',
    '河北',
    '浙江'
];

var city_scores = [
    '60',
    '62',
    '80',
    '70'
];

var city_center = [
    '武汉',
    '郑州',
    '石家庄',
    '杭州'
];

var http = require('http');
http.createServer(function (req, res) {

    jade.renderFile('./jade.jade', { provincials: provincial_names, cscores: city_scores,center: city_center, name:'yuyong', h1:'This is the provincial capital city' }, function(err, html){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);

    });


}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
