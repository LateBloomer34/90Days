#include<iostream>
using namespace std;

int zeroCount(vector<vector<int>>arr){
    int rowLength = arr.size();
    int colLength = arr[0].size();

    int count = 0 ;

    for (int i = 0 ; i < rowLength ; i++){
        for (int j = 0 ; j < colLength ; j++){
                if (arr[i][j]==0){
                    count++;
                }
        }
    }
return count;

}

int main (){
    vector<vector<int>>arr ={
        {0,0,0},
        {1,0,0},
        {0,1,1},
    };
    cout<<zeroCount(arr);
}