#include<iostream>
using namespace std;

int sum(vector<vector<int>>arr){
    int rowLength = arr.size();
    int colLength = arr[0].size();
    int totSum = 0 ; 

    for (int i = 0 ;  i< rowLength ; i++){
        for (int j = 0  ; j < colLength ; j++){
            totSum = totSum + arr[i][j];
        }
    }
return totSum;
}

int main (){
    vector<vector<int>>arr ={{1,2,3},{4,5,6},{7,8,9}};
    cout<<sum(arr); 
}