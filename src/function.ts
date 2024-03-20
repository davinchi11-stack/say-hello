import { SayHelloProps} from './types'
export function SayHello ({firstName , lastName , age}: SayHelloProps ) {
     console.log("hello");
     console.log(`your first name is ${firstName}`);

     if (lastName) {
        console.log(`your first name is ${lastName}`);
     }

     if (age) {
        console.log(`your first name is ${age}`);
     }
     
      
}