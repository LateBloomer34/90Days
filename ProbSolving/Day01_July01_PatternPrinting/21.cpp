#include<iostream>
using namespace std;

void pattern (int n){
    for (int i = 0 ; i < n ; i++){
        for (int j = 0 ; j < n ; j++){
            if (j==0||i==0||j==n-1||i==n-1){
                cout<<"*";
            }
            else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
}

int main (){
    int n ;
    cout<<"enter the value of n : ";
    cin>>n;
    pattern(n);
}