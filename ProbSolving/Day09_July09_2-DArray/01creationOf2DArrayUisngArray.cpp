#include<iostream>
using namespace std;


int main (){
    int arr[][4] = {{1,2,3,4},{4,5,6,8},{7,8,9,0}};
    int row = sizeof arr / sizeof arr[0];
    int col = sizeof arr[0]/ sizeof arr[0][0];
    // cout<<row<<endl;
    // cout<<col<<endl;


     for (int i = 0 ; i < row ; i++){
        for (int j = 0 ; j< col; j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
}