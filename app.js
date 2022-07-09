const redis = require('redis');
const client = redis.createClient();

client.on("connect", function(){
    console.log("connected")
})

client.set('foo', 'bar', (err, reply) => {
    if (err) throw err;
    console.log(reply);

    client.get('foo', (err, reply) => {
        if (err) throw err;
        console.log(reply);
    });
});