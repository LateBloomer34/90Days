#include<iostream>
#include<vector>
using namespace std;

int removeEl(vector<int> &arr, int element){
    int n = arr.size();    
    vector<int>result;
    for (int i = 0 ; i < n ; i++){
        if (arr[i]!= element){
           result.push_back(arr[i]);
        }
    }
for (int i = 0 ; i < result.size();  i++){
    cout<<result[i]<<" ";
}
    return 0;
}

int main (){
    vector<int>arr = {1,2,3,4,5,6,7};
    int element = 4;
    removeEl(arr , element); 
}