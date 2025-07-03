#include<iostream>
using namespace std ;

int countNum(int num){
    int count = 0 ; 
    if (num>0){
    while(num>0){
        count++;
        num = num/10;
    }
}
else if (num<0){
    while(num<0){ 
    count++;
    num = num/10;
}
}
else{
    return 0;
}
    return count;
}

int main (){
    int num; 
    cout<<"enter the number:- ";
    cin>>num;
    cout<<countNum(num);
}