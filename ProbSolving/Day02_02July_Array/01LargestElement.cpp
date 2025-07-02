//largest element in an array

#include<iostream>
using namespace std ;

int largest(vector<int>arr){
    int n = arr.size();
    int max = INT_MIN;
    for (int i = 0 ; i < n ; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

int main (){
    vector<int>arr = {3,2,4,15,7,6,0};
    cout<<largest(arr);
}