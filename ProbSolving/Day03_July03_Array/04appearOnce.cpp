#include<iostream>
using namespace std;

int appearOnce(vector<int>arr){
    int n = arr.size();
    int result = 0 ;
    for (int i = 0 ; i < n  ; i++){
        result = result^arr[i];
    }
    return result;
}

int main (){
    vector<int>arr = {4,1,2,1,2};
   cout<< appearOnce(arr);
}