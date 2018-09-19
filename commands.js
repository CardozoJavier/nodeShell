var fs=require('fs');

function pwd(){
    process.stdout.write(process.argv[1]);
};

function date(){
    process.stdout.write(Date());
};

function ls(){
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
          process.stdout.write(file.toString() + "\n");
        })
    });
};

function echo(par){
    var arr=par.toString().split(' ');
    arr.shift();
    var str= arr.join(' ');
    process.stdout.write(str);
};

function cat(data){
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        process.stdout.write(res);
    })
};

function head(data){
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        var arreglo1=res.split('\n');
        var arreglo2=[];
        for(var i=0;i<5;i++){
            arreglo2.push(arreglo1[i])
        };
        var str=arreglo2.join('\n');
        process.stdout.write(str);
    })
};

function tail(data){
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        var arreglo1=res.split('\n');
        var arreglo2=[];
        for(var i=arreglo1.length-6;i<arreglo1.length;i++){
            arreglo2.push(arreglo1[i])
        };
        var str=arreglo2.join('\n');
        process.stdout.write(str);
    })
};



module.exports={
    pwd:pwd,
    date:date,
    ls:ls,
    echo:echo,
    cat:cat,
    head:head,
    tail:tail,
}