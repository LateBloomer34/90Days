#include<iostream>
using namespace std;

int  MaxSubArrSum(vector<int>arr){
    int n = arr.size();
    int sum = 0 ;
    int maxSum = arr[0];
    for (int i = 0 ; i < n ; i++){
        sum  = sum +arr[i];
        maxSum = max(sum , maxSum);
        if (sum <0){
            sum = 0 ;
        }
    }
    return maxSum;
}

int main (){
    vector<int>arr = {-2,1,-3,4,-1,2,1,-5,4};
    cout<<MaxSubArrSum(arr);
}