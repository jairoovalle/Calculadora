var display = document.getElementById("display")
var operandos = {
            operador: "",
            operadorAnt: "",
            numAnt: 0
        }
var calculadora = {
    init: function(){
        var self = this
        var cero = document.getElementById("0")
        var uno = document.getElementById("1")
        var dos = document.getElementById("2")
        var tres = document.getElementById("3")
        var cuatro = document.getElementById("4")
        var cinco = document.getElementById("5")
        var seis = document.getElementById("6")
        var siete = document.getElementById("7")
        var ocho = document.getElementById("8")
        var nueve = document.getElementById("9")
        var punto = document.getElementById("punto")
        var on = document.getElementById("on")
        var sign = document.getElementById("sign")
        var raiz = document.getElementById("raiz")
        var div = document.getElementById("dividido")
        var por = document.getElementById("por")
        var menos = document.getElementById("menos")
        var mas = document.getElementById("mas")
        var igual = document.getElementById("igual")
        cero.addEventListener("click",  function(){
            self.numero("0")
        })
        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style","transform:scale(0.90,0.90)")
        })
        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style","transform:scale(1,1)")
        })

        uno.addEventListener("click", function(){
            self.numero("1")
        })
        uno.addEventListener("mousedown", function(){
            uno.setAttribute("style","transform:scale(0.90,0.90)")
        })
        uno.addEventListener("mouseout",function(){
            uno.setAttribute("style","transform:scale(1,1)")
        })

        dos.addEventListener("click", function(){
            self.numero("2")
        })
        dos.addEventListener("mousedown",function(){
            dos.setAttribute("style","transform:scale(0.90,0.90)")
        })
        dos.addEventListener("mouseout",function(){
            dos.setAttribute("style","transform:scale(1,1)")
        })
        tres.addEventListener("click", function(){
            self.numero("3")
        })
        tres.addEventListener("mousedown",function(){
           tres.setAttribute("style","transform:scale(0.90,0.90)")
        })
        tres.addEventListener("mouseout",function(){
           tres.setAttribute("style","transform:scale(1,1)")
        })
        cuatro.addEventListener("click", function(){
             self.numero("4")
        })
        cuatro.addEventListener("mousedown",function(){
           cuatro.setAttribute("style","transform:scale(0.90,0.90)")
        })
        cuatro.addEventListener("mouseout",function(){
            cuatro.setAttribute("style","transform:scale(1,1)")
        })
        cinco.addEventListener("click",function(){
            self.numero("5")
        })
        cinco.addEventListener("mousedown",function(){
            cinco.setAttribute("style","transform:scale(0.90,0.90)")
        })
        cinco.addEventListener("mouseout",function(){
            cinco.setAttribute("style","transform:scale(1,1)")
        })
        seis.addEventListener("click",function(){
            self.numero("6")
        })
        seis.addEventListener("mousedown",function(){
           seis.setAttribute("style","transform:scale(0.90,0.90)")
        })
        seis.addEventListener("mouseout",function(){
            seis.setAttribute("style","transform:scale(1,1)")
        })
        siete.addEventListener("click",function(){
            self.numero("7")
        })
        siete.addEventListener("mousedown",function(){
            siete.setAttribute("style","transform:scale(0.90,0.90)")
        })
        siete.addEventListener("mouseout",function(){
            siete.setAttribute("style","transform:scale(1,1)")
        })
        ocho.addEventListener("click",function(){
            self.numero("8")
        })
        ocho.addEventListener("mousedown",function(){
             ocho.setAttribute("style","transform:scale(0.90,0.90)")
        })
        ocho.addEventListener("mouseout",function(){
            ocho.setAttribute("style","transform:scale(1,1)")
        })
        nueve.addEventListener("click", function(){
            self.numero("9")
        })
        nueve.addEventListener("mousedown",function(){
            nueve.setAttribute("style","transform:scale(0.90,0.90)")
        })
        nueve.addEventListener("mouseout",function(){
            nueve.setAttribute("style","transform:scale(1,1)")
        })
        punto.addEventListener("click", function(){
            self.numero(".")
        })
        punto.addEventListener("mousedown", function(){
             punto.setAttribute("style","transform:scale(0.90,0.90)")
        })
        punto.addEventListener("mouseout", function(){
            punto.setAttribute("style","transform:scale(1,1)")
        })
        on.addEventListener("click", function(){
            display.innerHTML = "0"
            operandos.numAnt = 0
            operandos.operador = ""
            operandos.operadorAnt = ""
        })
        on.addEventListener("mousedown", function(){
             on.setAttribute("style","transform:scale(0.90,0.90)")
        })
        on.addEventListener("mouseout", function(){
            on.setAttribute("style", "transform:scale(1,1)")
        })
        sign.addEventListener("click", function(){
            self.signo()
        })
        sign.addEventListener("mousedown", function(){
            sign.setAttribute("style","transform:scale(0.90,0.90)")
        })
        sign.addEventListener("mouseout", function(){
            sign.setAttribute("style", "transform:scale(1,1)")
        })
        raiz.addEventListener("click", function(){
            display.innerHTML= Math.sqrt(parseFloat(display.innerHTML))
            acomodarDisplay()


        })
        function formatoNumero(numero){
            var redondeo = 0

        }
        raiz.addEventListener("mousedown",function(){
             raiz.setAttribute("style","transform:scale(0.90,0.90)")
        })
        raiz.addEventListener("mouseout",function(){
            raiz.setAttribute("style", "transform:scale(1,1)")
        })
        mas.addEventListener("click",function(){
            self.operandos("+")
        })
        mas.addEventListener("mousedown",function(){
             mas.setAttribute("style","transform:scale(0.90,0.90)")
        })
        mas.addEventListener("mouseout",function(){
            mas.setAttribute("style", "transform:scale(1,1)")
        })
        menos.addEventListener("click",function(){
            self.operandos("-")
        })
        menos.addEventListener("mousedown",function(){
             menos.setAttribute("style","transform:scale(0.90,0.90)")
        })
        menos.addEventListener("mouseout",function(){
            menos.setAttribute("style", "transform:scale(1,1)")
        })
        div.addEventListener("click",function(){
            self.operandos("/")
        })
        div.addEventListener("mousedown",function(){
             div.setAttribute("style","transform:scale(0.90,0.90)")
        })
        div.addEventListener("mouseout",function(){
            div.setAttribute("style", "transform:scale(1,1)")
        })
        por.addEventListener("click",function(){
            self.operandos("*")
        })
        por.addEventListener("mousedown",function(){
             por.setAttribute("style","transform:scale(0.90,0.90)")
        })
        por.addEventListener("mouseout",function(){
            por.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener("click", function(){
            self.operandos("=")
        })
        igual.addEventListener("mousedown",function(){
             igual.setAttribute("style","transform:scale(0.90,0.90)")
        })
        igual.addEventListener("mouseout",function(){
            igual.setAttribute("style", "transform:scale(1,1)")
        })
    }
}
var disp="";
var disp2="";
function f_display(a) {
    if( a == -1 ){
      document.getElementById("display").innerHTML = 0;
      disp = ""
      disp2 = ""
    }
    else if((a == -5)){
      if ( disp.toString().slice(0, 1) == "-"){
        disp =  disp.toString().slice(1,disp.length);
        document.getElementById("display").innerHTML = disp;
      }else{
        disp =  "-"+disp.toString();
        document.getElementById("display").innerHTML = disp;
      }

    }
    else if((disp.length >= 8)){

    }
    else if (a == "."  && disp.length ==0 ){
      disp = '0' +a;
      document.getElementById("display").innerHTML = disp;
    }
    else if (a == 0  && disp.length ==0 ){

    }
    else{
        disp =  disp.toString() + a;
        document.getElementById("display").innerHTML = disp;
    }
}
var operation="";
function f_operator(a) {
    if( a == "="){
        if(operation == "+"){
           disp = parseFloat(disp) +  parseFloat(disp2)
        }else if (operation == "-"){
           disp = parseFloat(disp2) - parseFloat(disp)
        }else if (operation == "*"){
           disp = parseFloat(disp) *  parseFloat(disp2)
        }else if (operation == "/"){
           disp =  parseFloat(disp2) / parseFloat(disp)
        }
        if((disp.toString().length >= 8)) {
            disp = disp.toString().slice(0, 8)
        }

        document.getElementById("display").innerHTML = disp;
        operation=""

    }else{
        disp2 = disp;
        disp="";
        document.getElementById("display").innerHTML = "";

      operation = a;

    }

}

document.getElementById("1").addEventListener("click", asignar_numero1);
function asignar_numero1() {
    f_display(1);
}
document.getElementById("2").addEventListener("click", asignar_numero2);
function asignar_numero2() {
    f_display(2);
}
document.getElementById("3").addEventListener("click", asignar_numero3);
function asignar_numero3() {
    f_display(3);
}
document.getElementById("4").addEventListener("click", asignar_numero4);
function asignar_numero4() {
    f_display(4);
}
document.getElementById("5").addEventListener("click", asignar_numero5);
function asignar_numero5() {
    f_display(5);
}
document.getElementById("6").addEventListener("click", asignar_numero6);
function asignar_numero6() {
    f_display(6);
}
document.getElementById("7").addEventListener("click", asignar_numero7);
function asignar_numero7() {
    f_display(7);
}
document.getElementById("8").addEventListener("click", asignar_numero8);
function asignar_numero8() {
    f_display(8);
}
document.getElementById("9").addEventListener("click", asignar_numero9);
function asignar_numero9() {
    f_display(9);
}
document.getElementById("0").addEventListener("click", asignar_numero0);
function asignar_numero0() {
    f_display(0);
}
document.getElementById("punto").addEventListener("click", asignar_numeropunto);
function asignar_numeropunto() {
    f_display(".");
}
document.getElementById("sign").addEventListener("click", asignar_signo);
function asignar_signo() {
    f_display(-5);
}

document.getElementById("raiz").addEventListener("click", asignar_raiz);
function asignar_raiz() {
    f_display("r");
}

document.getElementById("on").addEventListener("click", asignar_numeroon);
function asignar_numeroon() {
    f_display(-1);
}
document.getElementById("mas").addEventListener("click", asignar_numeromas);
function asignar_numeromas() {
    f_operator("+");
}
document.getElementById("menos").addEventListener("click", asignar_numeromenos);
function asignar_numeromenos() {
    f_operator("-");
}
document.getElementById("por").addEventListener("click", asignar_numeropor);
function asignar_numeropor() {
    f_operator("*");
}
document.getElementById("dividido").addEventListener("click", asignar_numerodividido);
function asignar_numerodividido() {
  f_operator("/");
}
document.getElementById("igual").addEventListener("click", asignar_numeroigual);
function asignar_numeroigual() {
    f_operator("=");
}
