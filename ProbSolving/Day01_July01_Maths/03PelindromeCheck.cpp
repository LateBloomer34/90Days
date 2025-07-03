#include<iostream>
using namespace std;

int pelindromeCheck(int num1){
    int num = num1;
    int rem = 0 ;
    int revNum = 0;
    if (num>0){   // if number is greater than 0
    while (num > 0 ){
        rem = num%10;
        revNum = revNum*10+rem;
        num = num/10;
    }
}
else if (num<0){ //if number is less than 0
    while (num < 0 ){
        rem = num%10;
        revNum = revNum*10+rem;
        num = num/10;
    }
}

return revNum;  // return reverse number

}

int main (){
    int num1 ;
    cout<<"enter the number ";
    cin>>num1;
    int result  = pelindromeCheck(num1);
    cout<<result<<endl;
    if (result == num1){ // if orignal number is equals to reverse number
       cout<<"pelindrom";
   }
   else{                // if orignal number is not equals to reverse number
       cout<<"not pelindrome";
   }
  
}