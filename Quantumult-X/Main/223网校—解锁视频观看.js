
/******************************

脚本名称: 223网校——解锁视频观看
下载地址：https://is.gd/63j7aM
软件版本：3.7.1
脚本作者：✎执笔画浮尘﹏
更新时间：2023-8-18
QQ交流群：2278301
TG交流群：https://t.me/ios_jb
TG频道群：https://t.me/ios_apple_jb
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^http[s]?:\/\/api.233.com\/v1\/course\/myclass\/myclassdetail url script-response-body https://raw.githubusercontent.com/8351674/ios_jb/main/Quantumult-X/Main/223%E7%BD%91%E6%A0%A1%E2%80%94%E8%A7%A3%E9%94%81%E8%A7%86%E9%A2%91%E8%A7%82%E7%9C%8B.js
[mitm] 

hostname = api.233.com

*******************************/

var body = $response.body.replace(/freelistenTf":\d/g,'freelistenTf":1')
$done({ body });
