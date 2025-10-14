const change = document.getElementById("change")

function change_all(){
    if (document.getElementsByTagName('div')[3].innerText==='Khamidullina'){
        document.getElementsByTagName('div')[3].innerText='Хамидуллина';
        document.getElementsByTagName('div')[4].innerText='Реана';
        document.getElementsByTagName('div')[5].innerText='Айратовна';
        document.getElementsByTagName('div')[6].innerText='жен';
        document.getElementsByTagName('div')[8].innerText='Казань';
    }
    else{

        if (document.getElementsByTagName('div')[3].innerText==='Хамидуллина'){
            document.body.style.backgroundImage = "url('eng_pas.jpg')";
            document.getElementsByTagName('div')[3].innerText='Khamidullina';
            document.getElementsByTagName('div')[4].innerText='Reana';
            document.getElementsByTagName('div')[5].innerText='Airatovna';
            document.getElementsByTagName('div')[6].innerText='female';
            document.getElementsByTagName('div')[8].innerText='Kazan';
            document.getElementsByTagName('div')[5].style.marginLeft='200px';
            document.getElementsByTagName('div')[3].style.marginTop='200px';



        }
    }
}

change.addEventListener("click", change_all)

