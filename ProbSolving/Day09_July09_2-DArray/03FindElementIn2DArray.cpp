#include<iostream>
using namespace std ;

pair<int , int> findEle( vector<vector<int>>arr, int target){
        int row = arr.size();
        int col = arr[0].size();

        for (int i =0 ; i < row ; i++){
            for (int j = 0 ; j < col ; j++){
                if (arr[i][j]== target){
                    return {i,j};
                }
            }
        }
return {-1, -1};
}

int main (){
     vector<vector<int>>arr = {{1,2,3,4},{4,5,6,7},{7,8,9,0}};
     int target = 5;
    pair<int , int>result =  findEle(arr, target);
    cout<<"element available at index" <<result.first<<" "<<result.second;
}