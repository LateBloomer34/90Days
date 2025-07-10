#include<iostream>
using namespace std;

int transpose(vector<vector<int>>arr){
    int row = arr.size();
    int col = arr[0].size();

    for (int i = 0 ; i < col ; i++){
        for (int j = 0 ; j < row ; j++){
            cout<<arr[j][i];
        }
        cout<<endl;
    }
return 0;
}


int main (){
    vector<vector<int>>arr = {{1,2,3,4},{4,5,6,7},{7,8,9,0}};
    transpose(arr);
}