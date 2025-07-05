#include<iostream>
using namespace std ;

int maxSum (vector<int> &arr){
        int n = arr.size();
        int sum = 0 ; 
        int maxsum = 0;
        int start = 0;
        int end = 0 ;

    for(int i = 0 ; i <n  ; i++){
        sum = sum+arr[i];
        if (sum <0){
            sum = 0 ;
             start = i+1;
        }
        if (sum>maxsum){
            maxsum = sum;
             end= i;
        }
    }

    for (int i = start ; i <= end ; i++){
        cout<<arr[i]<<" ";
        
    }
        cout<<endl;
    return maxsum;
}

int main (){
    vector<int>arr= {-5,4,1,2,-3,-2,-7,2,1,3,4,5};
    cout<<maxSum(arr);
}