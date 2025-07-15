#include<iostream>
using namespace std;

// in case of binary search array must be sorted, if array not sorted binary search not applicable 

pair<int , int> findElement(vector<vector<int>>arr, int target){
    int start = 0 ; 
    int end = arr.size()*arr[0].size()-1;
    int rowIndex  = 0;
    int colIndex = 0;
    
    while(start<=end){
    int mid = start+(end-start)/2;
    rowIndex = mid / arr[0].size();
    colIndex = mid % arr[0].size();

    if (arr[rowIndex][colIndex]==target){
        cout<<"element present in array at index ";
        return {rowIndex , colIndex};
    }
    else if (target>arr[rowIndex][colIndex]){
        start = mid+1;
    }
    else{
        end = mid-1;
    }
   }
   cout<<"element not present in array ";
return {-1,-1};
}


int main (){
    vector<vector<int>>arr = { {10, 20, 30},{40, 50, 60},{70, 80, 90} };
    int target = 70;
    pair<int,int> result = findElement(arr , target);
    cout<<result.first<<" "<<result.second;
}