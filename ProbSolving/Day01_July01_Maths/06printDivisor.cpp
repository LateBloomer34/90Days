#include<iostream>
using namespace std;

vector<int> divisor(int num){
    vector<int>div;
    for (int i = 1 ; i <= num ; i++){
        if (num%i==0){
            div.push_back(i);
        }
    }
    return div;
}

int main(){
    int num ;
    cout<<"enter the number : ";
    cin>>num;
    vector <int> y = divisor(num);
    for (int i = 0 ; i < y.size() ; i++){
        cout<<y[i]<<" ";
    }
}