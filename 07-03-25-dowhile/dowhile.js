function contador() {  // declara a função "contador" os parênteses vazios significa que não tem parâmetro para ser enviado ou "coletado" 
    const tempo = new Date (); // declaração da variável "tempo" somente leitura, a qual receberá o objeto "Date" do javascript

    let hora = tempo.getHours();
    let minutos = tempo.getMinutes();
    let segundos = tempo.getSeconds();
     
    if(document.getElementById("cbxMarcarTempo").checked == true) { //if=ele válida se o cbx esta marcado e o verifica
        document.getElementById("div_hora").innerText = hora; // ele pega "div hora" e vai colocar o texto referente a ele                                         //         document.getElementById("div_minutos").innerText = minutos; 
        document.getElementById("div_minutos").innerText = minutos;   // ele pega o "div minutos" e vai colocar o texto referente a ele           
        document.getElementById("div_segundos").innerText = segundos; //ele pega o "div segundos" e vai colocar o texto referente a ele
    }
    setInterval(contador, 1000); //fecha o bloco de códigos de "if" verdadeiro
    if  (document.getElementById("cbxMarcarTempo").checked == false) { ; //ele vai validar se não está verificado 
        document.getElementById("div_minutos").innerText =  ""; //vai zerar o div_horas
        document.getElementById("div_minutos").innerText =  "";  
        document.getElementById("div_segundos").innerText = "";
        clearInterval() //ele vai zerar o comando do setInterval 
    } // ele vai encerrar o bloco de códigos do if falso
 } //ele vai encerrar o código da função contador

document.getElementById("cbxMarcaTempo").addEventListener('click', () => { //ela esta adicionando na lista de eventos do Java, o evento cliclk do objeto "MarcaTempo"
     contador(); //diciona a função contador
}); // bloco de códigos do metodo e da função inominada 