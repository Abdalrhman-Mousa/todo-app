let person = prompt("Please enter your name", "Full Name");
 let gender = prompt("Please enter your gender", "male or female");

             let age = prompt('How old are you?');
             if (age > 1) {
                confirm("do you want to skip the welcoming message? ");

             } else{
                prompt('How old are you?');
             }


             if (gender == 'male')
             {
                 alert("Welcome, MR. " + person);
             }
             else if (gender == 'female')
             {
                 alert("Welcome, MS. " + person);
             }
         else  {
                alert(" Welcome, " + person);
             }
             
             
