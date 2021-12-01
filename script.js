function function1(){
    premium=document.getElementById("premium").value;
    ppt=document.getElementById("ppt").value;
    sv=document.getElementById("sv").value;

    totalsum=ppt*premium; // Total amount invested
    totalbenefit=totalsum+0.0536*totalsum*ppt; // Total amount benefited from investment
    surrendervaluesum=premium*sv; // total sum from surrender investment
    surenderbenefitvalue=surrendervaluesum+0.0536*surrendervaluesum*sv;

    document.getElementById("totalsum").innerHTML="Total Investment Sum:"+totalsum;
    document.getElementById("totalbenifit").innerHTML="With Benifit:"+totalbenefit;
    document.getElementById("surrendersum").innerHTML="Total Investment at Surrender Year:"+surrendervaluesum;
    document.getElementById("surrenderbenefit").innerHTML="Surrender Year Benefit:"+surenderbenefitvalue;
    document.getElementById("totalsum").style.color="cyan";
    document.getElementById("totalbenifit").style.color="cyan";
    document.getElementById("surrendersum").style.color="cyan";
    document.getElementById("surrenderbenefit").style.color="cyan";


}
function1();


function futureValue1(){

    iv = document.getElementById("iv").value;
    ip = document.getElementById("ip").value;
    roi = document.getElementById("ep").value;
      
      // return prem+ppt;
      sum=1+roi/100;
      power=sum**ip;
      total=power*iv;
  
      // return total;
      document.getElementById("output1").innerHTML = "Amount you will get:"+total;
      document.getElementById("output1").style.color="cyan";
  
      
      
  }
  futureValue1();
  
function futureValue2(){
      sip=document.getElementById("sip1").value;
      invp=document.getElementById("invp").value;

      invest_in_year=sip*12; // investment in a Year
      investment_total=invest_in_year*invp; // Investment total 
    //   ipm=invp*12; // investment period in months

    //   roi=12; // rate of interest 

      answer=0.12*investment_total;
      final=answer+investment_total;

      document.getElementById("output2").innerHTML="Amount you will get :"+final;
      document.getElementById("output2").style.color="cyan";
    

 }
 futureValue2();