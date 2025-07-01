#include<iostream>
using namespace std ;

int reverseNum(int num){
    int rem = 0 ;
    int revNum = 0;
    if (num>9){. // if number is greater than 9
    while (num > 0 ){
        rem = num%10;
        revNum = revNum*10+rem;
        num = num/10;
    }
}
else if (num<-9){ //if number is lesser than 9
    while (num < 0 ){
        rem = num%10;
        revNum = revNum*10+rem;
        num = num/10;
    }
}
else { //number between -9 to  9
    return num;
}

    return revNum;
}

int main (){
   int num; 
    cout<<"enter the number:- ";
    cin>>num;
    cout<<reverseNum(num);
}