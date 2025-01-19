const express=require('express');
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.send('Just a application running on node js');
})
app.listen(PORT,(req,res)=>{
    console.log(`Server running on ${PORT}`);
});
