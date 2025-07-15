#include<iostream>
using namespace std;

int rowSum(vector<vector<int>>arr){
    int rowLength = arr.size();
    int colLength = arr[0].size();
    
    for (int i =0 ; i < rowLength ; i++){
        int sum = 0;
        for (int j =0. ; j< colLength ; j++){
            sum = sum +arr[i][j];
        }
        cout<<sum<<endl;
    }
return 0;    
}

int main (){
    vector<vector<int>>arr = {{1,2,3},{4,5,6},{7,8,9}};
    rowSum(arr);
}