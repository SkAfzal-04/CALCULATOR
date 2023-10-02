let string="";
let Errors=["++","+-","-+","--","+*","-*","**","*+","*-","//","/+","+/","-/","/-","/*","*/"];
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(string);
    if (e.target.innerHTML=='='){
        let f=0;
        var op=string;
        for (let i=0;i<string.length;i++){
            let er=string[i]+string[i+1];
            for (let j=0;j<Errors.length;j++){
            if (er ==Errors[j]){
                document.getElementById('input').value="Invalid Syntax";
                f=1;
                break;
            }
            if (f==1){
                break;
            }
        }
                
        }
        if (f==0){
        string=eval(string);
        document.getElementById('input').value=string;
        document.getElementById('output').value=op;
        }
        
    }
    else if (e.target.innerHTML=='AC'){
        string="";
        document.getElementById('input').value=string;
        document.getElementById('output').value=string;
    }
    else if (e.target.innerHTML=='Del'){
        let str="";
        for (var i=0;i<string.length-1;i++){
            str=str+string[i];
        }
        string=str;
        document.getElementById('input').value=string;

    }

    else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.getElementById('input').value=string;
    }
    });
})