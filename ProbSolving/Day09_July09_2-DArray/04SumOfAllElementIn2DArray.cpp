#include<iostream>
using namespace std ;

int sum( vector<vector<int>>arr){
        int row = arr.size();
        int col = arr[0].size();

        int sum = 0 ;
        for (int i =0 ; i < row ; i++){
            for (int j = 0 ;j < col; j++){
                sum = sum+arr[i][j];
            }
        }
return sum;
}

int main (){
     vector<vector<int>>arr = {{1,2,3,4},{4,5,6,7},{7,8,9,0}};
    cout<<sum(arr);
}