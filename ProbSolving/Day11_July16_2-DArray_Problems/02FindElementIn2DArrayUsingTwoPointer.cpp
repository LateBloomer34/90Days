#include<iostream>
using namespace std;

int findEle(vector<vector<int>>arr , int target){
    int rowLen = arr.size();
    int colLen = arr[0].size();

    int rowStart = rowLen-1;
    int colStart = 0;

    while(rowStart>=0 && colStart <colLen){
        if (arr[rowStart][colStart]== target){
            return 1;
        }
        else if (target >arr[rowStart][colStart]){
            colStart++;
        }
        else{
            rowStart--;
        }
    }
return 0;
}



int main (){
    vector<vector<int>>arr = {{1,4,7,11,15},{2,5,8,12,19},{3,6,9,16,22},{10,13,14,17,24},{18,21,23,26,30}};
    int target = 26;
    cout<< findEle(arr, target);
}