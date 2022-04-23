function myFunction() {

    document.getElementById("talitintti").innerHTML = " AI-VAN OI-KEIN. TIE-SITKÖ, ET-TÄ TA-LI-TI-AI-SEL-LA VOI OL-LA JO-PA KYM-ME-NEN POI-KAS-TA.";
 }
  const btn = document.querySelector('#btn');        
  const radioButtons = document.querySelectorAll('input[name="lintu"]');
  btn.addEventListener("click", () => {
      let selectedLintu;
      for (const radioButton of radioButtons) {
          if (radioButton.checked) {
              selectedLintu = radioButton.value;
              break;
      
          }
      }
      // show the output:
      output.innerText = selectedLintu ? `HUPS, KU-VAN LIN-TU EI O-LE ${selectedLintu}.` : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
  });

  const btn2 = document.querySelector('#btn2');        
  const radioButtons2 = document.querySelectorAll('input[name="kala"]');
  btn2.addEventListener("click", () => {
      let selectedKala;
      for (const radioButton of radioButtons2) {
          if (radioButton.checked) {
              selectedKala = radioButton.value;
              break;
      
          }
      }
            output2.innerText = selectedKala? `VÄÄ-RIN ME-NI, KU-VAN KA-LA EI O-LE ${selectedKala}.` : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
  });

  const btn3 = document.querySelector('#btn3');        
  const radioButtons3 = document.querySelectorAll('input[name="perhonen"]');
  btn3.addEventListener("click", () => {
      let selectedPerhonen;
      for (const radioButton of radioButtons3) {
          if (radioButton.checked) {
              selectedPerhonen = radioButton.value;
              break;
      
          }
      }
            output3.innerText = selectedPerhonen? `OOPS, KU-VAS-SSA EI O-LE ${selectedPerhonen}.` : `ET O-LE VIE-LÄ VA-LIN-NUT MI-TÄÄN.`;
  });

