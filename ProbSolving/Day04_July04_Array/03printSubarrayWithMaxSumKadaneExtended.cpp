
// problem - print maxsum of subarray and print that subarray


#include<iostream>
using namespace std;

int maxSubarraySum(vector<int>arr){
    int sum = 0 ;
    int maxsum = arr[0];
    int n = arr.size();

    int start = 0;
    int end = 0 ;
    int tempStart=0;
    vector<int> resultArr;
    for(int i= 0 ; i < n ; i++){
        sum = sum + arr[i];
        
        // maxsum = max(maxsum, sum);
     if (sum>maxsum){  // find maxSum and end point
        maxsum = sum;
        end = i;
        
     }
        if (sum<0){
            sum = 0 ;
            start = i+1;  // find start point
        }
    }
    for (int i = start ; i<=end; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    return maxsum;
}

int main (){
    vector<int>arr = {-2,1,-3,4,10,2,-1,2,1,-5,4};
    cout<<maxSubarraySum(arr);
}