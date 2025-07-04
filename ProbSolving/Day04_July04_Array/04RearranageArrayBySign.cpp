#include<iostream>
using namespace std;

int rearrange(vector<int>arr){
    int n  = arr.size();
    int start = 0;
    int pos = 0;
    int neg = 1;
    // while(start<n){
    //     if (arr[start]>0){
    //         swap(arr[start], arr[pos]);
    //         start++;
    //         pos = pos+2;
    //     }
    //     else if (arr[start]<0){
    //         swap(arr[start], arr[neg]);
    //         start++;
    //         neg = neg+2;
    //     }
    // }

    vector<int>result(n);
    for (int i = 0 ; i < n ;i++){
        if (arr[i]>0){
            result[pos] = arr[i];
            pos = pos+2;
        }
        else{
            result[neg] = arr[i];
            neg = neg+2;
        }
    }
    for (int i = 0; i<n ; i++){
        cout<<result[i]<<" ";
    }
    return 0;
}

int main (){
    vector<int>arr = {1,2,-3,-1,-2,3};
    rearrange(arr);
}