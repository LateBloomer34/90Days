#include<iostream>
using namespace std;

int findElement(vector<vector<int>>arr, int target){
        int rowLen = arr.size();  // find the number of row in a matrix
        int colLen = arr[0].size();     // find the number of row in a matrix

        int start = 0 ;         // find the starting index
        int end = rowLen*colLen-1;      // find the elding index


        while (start <end){
            int mid = start +(end -start)/2;
            int rowIndex = mid/colLen;  // calculate rowIndex
            int colIndex = mid%colLen;      // calculate column index
            if (target == arr[rowIndex][colIndex]){
                return 1;
            }
            else if (target>arr[rowIndex][colIndex]){
                start = mid+1;
            }
            else{
                end = mid-1;
            }
        }
    return 0;
}

int main (){
    vector<vector<int>>arr = { {10, 20, 30},{40, 50, 60},{70, 80, 90} };
    int target = 70;
   cout<<findElement(arr , target);
}