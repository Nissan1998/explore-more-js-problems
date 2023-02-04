/* 1. if ticket less than 100 the price will be 100tk.
2. if ticket more than 100 but not less than 200, the tickets price will be 90tk
3.if the ticket morthan 200 the price will be 70tk;
first100ticket ----100tk
second100ticket ---200tk
resttickets ---70tk*/

const first100Rate = 100;
const second100to200Rate =90;
const restTicketsRate =70;
function discount(ticketQuantity){
        if(ticketQuantity<=100){
            const first100ticketPrice = ticketQuantity * first100Rate;
            return first100ticketPrice;
        }
        else if(ticketQuantity<=200){
            const first100Price = 100 * first100Rate; 
            const restTicketsQuantity = ticketQuantity - 100;
            const totalTicketPrice = restTicketsQuantity * second100to200Rate;
            const sum = first100Price + totalTicketPrice;
            return sum; 
        }
        else{
            const first100Price = 100 * first100Rate;
            const second101to200Price = 100 * second100to200Rate;
            const restTicketsQuantity = ticketQuantity - 200;
            const restRemindingPrice = restTicketsQuantity * restTicketsRate
            const totalTicketPrice =first100Price + second101to200Price + restRemindingPrice;
            return totalTicketPrice;
        }
}

const totalPrice = discount(220);
console.log(totalPrice);