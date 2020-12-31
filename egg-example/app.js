// module.exports = app => {
//     app.cache = new Cache();
//     app.once('server', server => {
//         console.log('WebSocket')
//     });
//     app.on('error', (err, ctx) => {
//         console.log('report error')
//     });
//     app.on('request', ctx => {
//         console.log('log receive request')
//     });
//     app.on('response', ctx => {
//         const used = Date.now() - ctx.starttime;
//         console.log('log total cost')
//     })
// }3

