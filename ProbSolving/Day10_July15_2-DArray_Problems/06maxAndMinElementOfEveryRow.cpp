#include<iostream>
using namespace std;

int rowMaxMin(vector<vector<int>>arr){
    int rowLength  = arr.size();
    int colLength = arr[0].size();
    
    for (int i = 0 ; i < rowLength ; i++){
        int maxElement = INT_MIN;
        int minElement = INT_MAX;
        for (int j = 0 ; j < colLength ; j++){
            if (arr[i][j]>maxElement){
                maxElement = arr[i][j];
            }
             if (arr[i][j]<minElement){
                minElement = arr[i][j];
            }
        }
        cout<<"max element of row "<<i << " is "<<maxElement<<" and min element of row "<<i <<" is "<<minElement;
        cout<<endl;
    }
return 0;
}

int main (){
   vector<vector<int>>arr = {{10,12,34,42},{54,25,76,79},{37,84,90,56}};
   rowMaxMin(arr);
}