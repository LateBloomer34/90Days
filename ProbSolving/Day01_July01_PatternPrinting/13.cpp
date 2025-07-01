#include<iostream>
using namespace std;

void pattern (int n){
    int count = 1 ;
    for(int i = 0 ; i < n ; i++){
        for (int j = 0 ; j < i+1 ;  j++){
            cout<<count<<" ";
            count++;
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