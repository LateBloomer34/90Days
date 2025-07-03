#include<iostream>
using namespace std;

int maxConsecutive(vector<int>arr){
    int n = arr.size();
    int count = 1 ; 
    int maxCount = 0 ;
     for (int i = 1 ; i < n  ; i++){
        
        if (arr[i]==arr[i-1]){
            count++;
        }
        else{
            count = 1;
        }
        maxCount = max(count, maxCount);
     }
return maxCount;
}

int main (){
    vector<int>arr = {1, 0, 1, 1, 0, 1};
    cout<<maxConsecutive(arr);
}