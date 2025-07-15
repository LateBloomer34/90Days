#include<iostream>
using namespace std;

int colSum(vector<vector<int>>arr){
    int rowLength = arr.size();
    int colLength = arr[0].size();

    for (int i = 0 ; i< colLength ; i++){
        int sum = 0 ; 
        for (int j = 0 ; j <rowLength  ; j++){
            sum = sum + arr[j][i];
        }
        cout<<sum<<endl;
    }
return 0;
}

int main (){
    vector<vector<int>>arr = {{1,2,3,4},{4,5,6,7},{7,8,9,0}};
    colSum(arr);
}