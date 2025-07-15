#include<iostream>
using namespace std;

pair<int , int> maxAndMin (vector<vector<int>>arr){
    int rowLength = arr.size();
    int colLength = arr[0].size();
    int max_Element = INT_MIN;
    int min_Element = INT_MAX;

    for(int i =0  ; i<rowLength ; i++){
        for (int j = 0 ; j< colLength ; j++){
            if (arr[i][j]>max_Element){
                max_Element =arr[i][j];
            }
            if (arr[i][j]<min_Element){
                min_Element =arr[i][j];
            }
        }
    }
return {max_Element , min_Element};
}

int main (){
    vector<vector<int>>arr = {{10,12,34,42},{54,25,76,79},{37,84,90,56}};
    pair<int, int>result = maxAndMin(arr);
    cout<<"maximum element of array is "<<result.first<<" and minimum element of array is "<<result.second;
}