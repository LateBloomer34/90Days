#include<iostream>
using namespace std;

bool isPrime(int num){
        if (num<=1){
            return true;
        }
    for (int i = 2 ; i*i<=num ; i++){
        if (num%i==0){
            return true;
        }
    }
return false;
}

int main (){
    int num ;
    cout<<"enter the number";
    cin>>num;
    isPrime(num);
    if (isPrime(num)){
        cout<<num<<" is not prime";
    }
    else{
        cout<<num<<" is prime";
    }
}