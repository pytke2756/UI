let kedvencek = [];

class Kedvenc{
    constructor(szoveg, meret, szovegSzin, hatterSzin){
        this.szoveg = szoveg;
        this.meret = meret;
        this.szovegSzin = szovegSzin;
        this.hatterSzin = hatterSzin;
    }
}

function szovegIras(e) {
    let szoveg = document.getElementById("szoveg").value;
    if (!szovegCheck(szoveg)) {
        document.getElementById("szoveg_hiba").style.display = "block";
        document.getElementById("szoveg_hiba").innerHTML = "A mintaszöveg nem lehet üres!";
        
    }
    else{
        document.getElementById("szoveg_ki").innerHTML = szoveg;
        document.getElementById("szoveg_hiba").style.display = "none";
    }
    
}

function szovegCheck(szoveg) {
    let betu = false;
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] != " " || szoveg[i] != "") {
            betu = true;
        }
    }
    return betu;

}

function betuMeret(e) {
    let betu = document.getElementById("betu").value;
    document.getElementById("szoveg_ki").style.fontSize = betu + "pt";
}

function szovegSzin(e) {
    let foreGround = document.getElementById("szoveg_szin").value;
    document.getElementById("szoveg_ki").style.color = foreGround;
}

function szovegHatter(e) {
    let backGround = document.getElementById("hatter_szin").value;
    document.getElementById("szoveg_ki").style.backgroundColor = backGround;
}

function kedvencAdd() {
    let szoveg = document.getElementById("szoveg").value;
    let meret = document.getElementById("betu").value;
    let szovegSzin = document.getElementById("szoveg_szin").value;
    let hatterSzin = document.getElementById("hatter_szin").value;
    let k = new Kedvenc(szoveg, meret, szovegSzin, hatterSzin);
    kedvencek.push(k);
    selectAdd(k);
    console.log(kedvencek);
}

function selectAdd(kedvenc) {
    let ujOption = document.createElement("option");
    ujOption.value = kedvencek.length - 1;
    ujOption.text = kedvencek.length + ". kedvenc";
    document.getElementById("kedvencek_lista").appendChild(ujOption);
}


function alaphelyzet() {
    document.getElementById("szoveg").value = "Árvíztűrű tükörfúrógép";
    document.getElementById("betu").value = "12";
    document.getElementById("szoveg_szin").value = "#000000";
    document.getElementById("hatter_szin").value = "#FFFFFF";
    document.getElementById("szoveg_ki").style.fontSize = "12pt";
    document.getElementById("szoveg_ki").style.color = "#000000";
    document.getElementById("szoveg_ki").style.backgroundColor = "#FFFFFF";
    document.getElementById("szoveg_ki").innerHTML = "Árvíztűrű tükörfúrógép";
}


function init() {
    alaphelyzet();
    document.getElementById("alap").addEventListener("click", alaphelyzet);
    document.getElementById("kedvencAdd").addEventListener("click", kedvencAdd);
    document.getElementById("szoveg").addEventListener("input", szovegIras);
    document.getElementById("betu").addEventListener("input", betuMeret);
    document.getElementById("szoveg_szin").addEventListener("input", szovegSzin);
    document.getElementById("hatter_szin").addEventListener("input", szovegHatter);
}
document.addEventListener("DOMContentLoaded", init);