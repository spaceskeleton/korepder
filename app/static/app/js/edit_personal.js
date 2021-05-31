function editJs(){


    var historia = document.getElementById('id_przedmiot_1')
    var angielski = document.getElementById("id_przedmiot_2")
    var informatyka = document.getElementById("id_przedmiot_3")
    var matematyka = document.getElementById("id_przedmiot_4")
    var polski = document.getElementById("id_przedmiot_5")


    if(historia.checked==false && angielski.checked==false && informatyka.checked==false && matematyka.checked==false && polski.checked==false ){
        document.getElementById('id_przedmiot_0').checked = true
    }
    else{
        document.getElementById('id_przedmiot_0').checked = false
    }



}