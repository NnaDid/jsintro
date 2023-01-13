
// Second solution
const date_1 = document.querySelector(".date_1");
const date_2 = document.querySelector(".date_2");

const check_btn   = document.querySelector(".check_btn");
const date_holder = document.querySelector(".date_holder");
const days_holder = document.querySelector(".days_holder");

 function date_difference(date1, date2){
       let d1 = new Date(date1.value).getTime();
       let d2 = new Date(date2.value).getTime();

        console.log(d1, d2);   

       let diff_in_days = Math.ceil((d1 - d2)/1000/60/60/24);
           diff_in_days = Math.abs(diff_in_days);

       console.log(diff_in_days);
       date_holder.innerHTML = `${date1.value} - ${date2.value} : `;
       days_holder.innerHTML = `${diff_in_days} day(s)`;
 }

// Listen to click event to execute or run the function
 check_btn.addEventListener("click",()=>{
    date_difference(date_1, date_2);
 });



 // JAVASCRIPT DATA TYPES

 // #1 : STRING
     let name  = "Christian";
     let name2 = 'Smith ';
     console.log(name);
     console.log(name2.toUpperCase());

     console.log(typeof name);
     console.log(typeof name2);

     let fullName = name + ' ' + name2,
         fullname2 = name2.concat(name);

     console.log(fullName,fullname2);


   //  #2 NUMBER
       const number_one = 90;
       let num_1        = "90";

       console.log(number_one, num_1); 

       console.log(num_1 === number_one);

       // convert the string to a number
       let converted = Number(num_1);
       console.log(converted);

       console.log(parseFloat(num_1));


      //  null and undefined
       let nu_val = null;
       let nu_val2;
 console.log(nu_val);
 console.log(nu_val2);


 console.log(typeof nu_val);
 console.log(typeof nu_val2);


function sumonTo_30(){
       let num =0;
       let sum =0;
       while(sum<=30){
         num++;
         sum+=num;
       }
 console.log(sum)
}
 
sumonTo_30();











 




   




