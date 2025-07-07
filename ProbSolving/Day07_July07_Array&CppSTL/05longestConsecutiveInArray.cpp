// Longest Consecutive Sequence in an Array

#include<iostream>
using namespace std;

int longConsecutive(vector<int>arr){
    int n = arr.size();
    int count= 1 ;
    int maxCount = 0;
    sort(arr.begin(), arr.end());  // step 1 -  sort the array
    for (int i = 1 ; i< n ; i++){
        if (arr[i]== arr[i-1]+1){
            count++;
        }
        maxCount = max (maxCount+1, count);
    }
    return maxCount;
}

int main (){
    vector<int>arr={3, 8, 5, 7, 6};
    cout<<longConsecutive(arr);
}