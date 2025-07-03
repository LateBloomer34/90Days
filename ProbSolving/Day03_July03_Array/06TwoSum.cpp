#include<iostream>
using namespace std;


//brute approach
/*
pair<int , int> twoSum (vector<int>arr , int target){
    int n = arr.size();
    for (int i = 0 ; i < n-1 ; i++){
        for(int j = i ; j < n ; j++){
            int sum = arr[i]+arr[j];
            if (sum==target){
                return {i , j};
            }
        }
    }
return {-1 , -1};
}
*/

//optimal - using 2 pointer

pair<int, int> twoSum(vector<int>arr , int target){
    int n = arr.size();
    int start = 0 ;
    int end = n-1;
    while(start<end){
        int sum = arr[start]+arr[end];
        if (sum<target){
            start++;
        }
        else if(sum>target){
            end--;
        }
        else{
            return {start , end};
        }
    }
    return {-1, -1};
}

int main (){
    vector<int>arr = {2,6,7,8,11};
    int target = 15;
    // twoSum(arr  , target);
    pair<int , int>res = twoSum(arr, target); 
    cout<<res.first<<" "<<res.second;
}