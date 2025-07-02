//largest element in an array

#include<iostream>
using namespace std ;

int check(vector<int>arr){
    int n = arr.size();
    for (int i = 0; i< n-1  ; i++ ){
        if (arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

int main (){
    vector<int>arr = {5,9,65,78,8};
    check(arr);
    if (check(arr)){
        cout<<"sorted";
    }
    else{
        cout<<"not sorted";
    }
}