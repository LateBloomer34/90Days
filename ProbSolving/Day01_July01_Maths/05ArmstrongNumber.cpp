#include<iostream>
using namespace std;

int arms(int num){
    // count the digits in number
    int count =0 ;
    int orgNum = num;
    while(num>0){
        count++;
        num = num/10;
    }
    
     int arm = 0 ;
     while(orgNum>0){
        int rem = orgNum%10;
        arm = arm + pow(rem , count);
        orgNum = orgNum/10;
     }
    
return arm;
}

int main (){
    int num;
    cout<<"enter the number";
    cin>>num;
    int y = arms(num);
    if (y==num){
        cout<<num<< " is arm num";
    }
    else{
        cout<<num <<" is not arm num";
    }
}