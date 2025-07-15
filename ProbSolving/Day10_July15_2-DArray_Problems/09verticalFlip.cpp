#include<iostream>
using namespace std;

int upSideDown(vector<vector<int>>arr){
        int rowLength = arr.size();
        int colLength =  arr[0].size();

        for(int i = 0 ; i < rowLength/2 ; i++){
            for(int j = 0 ; j < colLength ; j++){
                swap(arr[(rowLength -1)- i][j],arr[i][j]);
            }
        }

          for (int i = 0 ; i < rowLength ; i++){
        for (int j = 0 ; j < colLength ; j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }

return 0;        
}

int main (){
    vector<vector<int>>arr = {{1,2,3,4} , {4,5,6,7} , {7,8,9,0},{9,5,1,7}};
    upSideDown(arr);
}