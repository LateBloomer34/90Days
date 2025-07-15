#include<iostream>
using namespace std;


//method 1 -
/*
int transpose(vector<vector<int>>arr){
    int rowLength  = arr.size();
    int colLength = arr[0].size();

    for(int i =0 ; i < colLength ; i++){
        for (int j = 0 ; j< rowLength ; j++ ){
            cout<<arr[j][i]<<" ";
        }
        cout<<endl;
    }
   
return 0;
}
*/


//method 2 -

int transpose(vector<vector<int>> &arr){
    int rowLength  = arr.size();
    int colLength = arr[0].size();

    for (int i = 0 ; i < rowLength ; i++){
        for (int j = i ; j < colLength ; j++){
            swap(arr[i][j], arr[j][i]);
        }
    }
    // print the array

     for (int i = 0 ; i < rowLength ; i++){
        for (int j = 0 ; j < colLength ; j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }

    return 0;
}




int main (){
   vector<vector<int>>arr = {{10,12,34,42},{54,25,76,79},{37,84,90,56},{1,1,1,1}};
   transpose(arr);
}