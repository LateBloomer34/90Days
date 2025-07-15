#include<iostream>
using namespace std;

int rotateImage(vector<vector<int>>arr){
    int rowLen =  arr.size();
    int colLen = arr[0].size();

/*
problem solve in 2 step 
1- swap up and down element
2 - swap row into col
*/


    for (int i = 0 ; i < rowLen/2. ;i++ ){
        for (int j =0 ; j < colLen ; j++){
            swap(arr[i][j], arr[rowLen-1-i][j]);
        }
    }

    for (int i = 0 ; i < rowLen ; i++){
       for (int j = i ; j < colLen ; j++){
            swap(arr[i][j], arr[j][i]);
        }
    }
// print resultant array
    for (int i =0 ; i< rowLen ; i++){
        for (int j = 0 ; j< colLen ; j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
return 0;
}

int main (){
    vector<vector<int>>arr = {{1,2,3},{4,5,6},{7,8,9}};
// required output
    //7 4 1
    //8 5 2 
    //9 6 3
    rotateImage(arr);
}