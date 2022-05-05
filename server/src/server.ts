import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    return res.send('hello wolrd!!')
})

app.listen(3333, () => {
    console.log('Http server runnig in port 3333')
});