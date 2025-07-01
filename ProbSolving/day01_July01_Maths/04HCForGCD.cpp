#include<iostream>
using namespace std;

int HCF(int num1, int num2){

    if (num1 == 0 ){
        return num2;  // if any number is zero , gcd will be other number
    }
    if (num2 ==0 ){
        return num1;
    }
    //brute approach
/*
   
      int gcd = 1;
    for (int i = 1 ;  i <=min(num1, num2); i++){
        if (num1%i==0 & num2 %i ==0){
            gcd = i;
        }
    }
    return gcd;
*/

// optimal approach - euclidian 
while (num1 != 0 && num2!= 0 ){
if (num1 >num2){
    num1 = num1 % num2;
}
else{
    num2 = num2 % num1;
}
}

return max(num1, num2);
}

int main (){
    int num1;
    cout<<"enter num1 : ";
    cin>>num1;
    int num2;
    cout<<"enter num2 : ";
    cin>>num2;
    cout<<HCF(num1 , num2);
}