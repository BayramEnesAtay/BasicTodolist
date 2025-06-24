 const gorevler =[];
      
        function tiklama()
      {
         var icerik=document.getElementById("grv1").value;
          if(icerik=="")
        {
          alert("Please add task!!");
        }
        else{
            

            gorevler.push(icerik);
            
            
            
              
            
              let checkbox=document.createElement("input");
              checkbox.type="checkbox";
              checkbox.className="ck1";
              checkbox.id="ck1";
             

              let text=document.createElement("p");
              text.className="paragrafh";
              text.id="parag";
              
            
        
              let silme=document.createElement("button");
              silme.className="silme";
              silme.innerHTML="X";
               
              let duzenleme=document.createElement("button");
              duzenleme.className="duzenle";
              duzenleme.innerHTML="🖊️";
                
             
              document.getElementById("grv1").value="";
              let div=document.createElement("div");
              div.append(checkbox,text,duzenleme,silme);
              div.className="ozel-div";
              div.id="ozel-div"
              document.getElementById("liste").appendChild(div);
              
              for(let i=0;i<gorevler.length;i++)
              {
                text.innerHTML=gorevler[i];
               silme.onclick=function()
              {
                div.remove();
                gorevler[i]="";
              };
              console.log(gorevler[i]);
             
              } 
              //azcık gpt yardımı alındı.
              checkbox.addEventListener("change", function() {
              if (checkbox.checked) {
              text.style.textDecoration = "line-through";
            }
            else{
              text.style.textDecoration="none";
            }
           });
              duzenleme.addEventListener("click",function()
            {
              const duzengorev= prompt("Duzenlenmis gorev: ");

              text.innerHTML=duzengorev;
              //gorev arrayı duzenlenemedı.
              

            });

              
              

              
              
             
              
                
            
      
              
             
              
              


            }
            
          }
